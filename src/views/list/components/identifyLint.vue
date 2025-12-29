<template>
  <div class="content">
    <div class="input-group">
      <div class="input-wrapper">
        <van-field type="textarea" v-model="input" rows="10" @keyup.enter="handleCheck" placeholder="例如：张三 110101199001011234" />
        <div>票种统计：{{ personSummary }}</div>
        <div>ID 统计：{{ validSummary }}</div>
        <van-button @click="splitLines" type="primary" size="small">分割</van-button>
        <van-button @click="handleCheck" type="primary" size="small">自动识别</van-button>
        <van-button @click="handleCopy" type="primary" size="small">复制</van-button>
        <van-button @click="identifyTransfer" type="primary" size="small">互换</van-button>
        <van-button
          @click="
            input = '';
            lines = [];
          "
          type="primary"
          size="small"
        >
          清空
        </van-button>
      </div>
    </div>
    <div class="input-group">
      <div v-for="(line, i) in lines" :key="line.name">
        <van-field v-model="line.name" label="姓名" type="text" />
        <van-field v-model="line.id" label="ID" type="text" />
        <van-field
          v-model="line.idType"
          is-link
          readonly
          label="类型"
          @click="
            showIdPicker = true;
            currentLine = line;
          "
        />
        <van-field v-model="line.idValid" label="ID 状态" />
        <van-field
          v-model="line.ticketType"
          is-link
          readonly
          label="票种"
          @click="
            showTicketPicker = true;
            currentLine = line;
          "
        />
        <van-button @click="identifyTransfer(i)" type="primary" size="small">互换</van-button>
      </div>
    </div>
    <van-popup v-model:show="showIdPicker" round position="bottom">
      <van-picker :columns="idTypeOptions" v-model="idPickerSelectedValues" @cancel="resetIdPicker" @confirm="onIdTypeConfirm" />
    </van-popup>
    <van-popup v-model:show="showTicketPicker" round position="bottom">
      <van-picker :columns="ticketOptions" v-model="ticketPickerSelectedValues" @cancel="resetTicketPicker" @confirm="onTicketConfirm" />
    </van-popup>
  </div>
</template>

<script setup lang="ts">
  import dayjs from 'dayjs';
  import type { TicketInfo } from '@/views/list/list';
  import type { PickerColumn, PickerConfirmEventParams } from 'vant';
  import type { Numeric } from 'vant/es/utils';

  const travelDate = inject<Ref<string, string>>('travelDate', ref(''));

  const input = ref('');
  const lines = ref<TicketInfo[]>([]);
  const personSummary = ref('');
  const validSummary = ref('');

  const showIdPicker = ref(false);
  const showTicketPicker = ref(false);
  const idPickerSelectedValues = ref<Numeric[]>([]);
  const ticketPickerSelectedValues = ref<Numeric[]>([]);
  const currentLine = ref<TicketInfo>();

  // 证件类型枚举
  const ID_TYPES = {
    CHINA_ID: { fullName: '中国居民身份证', shortName: '身份证' },
    PASSPORT: { fullName: '护照', shortName: '护照' },
    HK_MACAU_PASS: { fullName: '港澳通行证（回乡证）', shortName: '回乡证' },
    TAIWAN_PASS: { fullName: '台湾通行证', shortName: '台湾通行证' },
    UNKNOWN: { fullName: '未知类型', shortName: '未知' },
  };
  // 票种枚举
  const TICKET_TYPES = {
    ADULT: { fullName: '成人', shortName: '成人' },
    CHILD: { fullName: '儿童', shortName: '儿童' },
    SENIOR: { fullName: '老人', shortName: '老人' },
    NOT: { fullName: '免票', shortName: '免票' },
    UNKNOWN: { fullName: '未知', shortName: '未知' },
  };

  const idTypeOptions: PickerColumn = [];
  const ticketOptions: PickerColumn = [];
  for (const type in ID_TYPES) {
    idTypeOptions.push({ text: ID_TYPES[type].fullName, value: ID_TYPES[type].shortName });
  }
  for (const type in TICKET_TYPES) {
    ticketOptions.push({ text: TICKET_TYPES[type].fullName, value: TICKET_TYPES[type].shortName });
  }
  // default value
  idPickerSelectedValues.value = [idTypeOptions[0].value];
  ticketPickerSelectedValues.value = [ticketOptions[0].value];

  // TODO: auto plans
  // const plans = [
  //   { text: '出境游 400-45（成人-标准-439）', value: 'CNY 409-45=364+10=374', originalAmount: 439, ticketType: 'standard' },
  //   { text: '出境游 400-45（一大一小-标准-860）', value: 'CNY 409-45=364+10=374', originalAmount: 439, ticketType: 'standard' },
  //   { text: '客路 96 折（儿童/老人-标准-350）', value: 'CNY 319.7-30=289.7+10=299.7', originalAmount: 439, ticketType: 'standard' },
  //   { text: '客路 96 折（成人-标准-379）', value: 'CNY 345.6-30=315.6+10=325.6', originalAmount: 379, ticketType: 'standard' },
  //   { text: '客路 96 折（成人-标准-439）', value: 'CNY 402.2-30=372.2+10=382.2', originalAmount: 439, ticketType: 'standard' },
  //   { text: '出境游 200-20（儿童-标准-300）', value: 'CNY 276-20=256+3=259', originalAmount: 300, ticketType: 'standard' },
  //   { text: '光大 400-50（成人-早鸟-439）', value: 'CNY 439-50=389+10=399', originalAmount: 439, ticketType: 'earlyBird' },
  //   { text: '建行 9 折（两大一小-1320）', value: 'CNY 1352-106=1246+8=1254', originalAmount: 1352, ticketType: 'standard' },
  //   { text: '建行 9 折（两大一小-1200）', value: 'CNY 1229-106=1123+8=1131', originalAmount: 1229, ticketType: 'standard' },
  //   { text: '去哪儿一大一小+一大（两大一小-1180）', value: 'CNY 1229-106=1123+8=1131', originalAmount: 1229, ticketType: 'standard' },
  //   { text: '一大一小（770）', value: 'CNY 1229-106=1123+8=1131', originalAmount: 1229, ticketType: 'standard' },
  //   { text: '一大一小（860）', value: 'CNY 1229-106=1123+8=1131', originalAmount: 1229, ticketType: 'standard' },
  //   { text: '一大一小（680）', value: 'CNY 1229-106=1123+8=1131', originalAmount: 1229, ticketType: 'standard' },
  //   { text: '一大一小（590）', value: 'CNY 1229-106=1123+8=1131', originalAmount: 1229, ticketType: 'standard' },
  // ]
  //
  // const pickerPlans : PickerColumn =  computed(() => {
  //   return plans.map(item => {return { text: item.text, value: item.value }})
  // })

  // 校验中国身份证号码
  const validateChinaID = (id: string) => {
    const pattern = /^[1-9]\d{5}(18|19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}[\dXx]$/;

    if (!pattern.test(id)) return false;

    const weights: number[] = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    const codes = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];

    let sum = 0;
    for (let i = 0; i < 17; i++) {
      sum += parseInt(id[i]) * weights[i];
    }

    const checkCode = codes[sum % 11];
    return checkCode === id[17].toUpperCase();
  };

  // 判断是否为护照号码
  const isPassport = (str: string) => {
    const chinaPassport = /^[EG]\d{8}$/;
    const foreignPassport = /^[A-Z]{1,2}\d{6,9}$/;
    return chinaPassport.test(str) || foreignPassport.test(str);
  };

  // 判断是否为港澳通行证
  const isHKMacauPass = (str: string) => {
    return /^[CHM]\d{8,10}$/.test(str);
  };

  // 判断是否为台湾通行证
  const isTaiwanPass = (str: string) => {
    return /^\d{8,10}$/.test(str);
  };

  // 从身份证号提取信息
  const extractIDInfo = (id: string) => {
    if (id.length !== 18) return null;

    const year = id.slice(6, 4);
    const month = id.slice(10, 2);
    const day = id.slice(12, 2);

    return {
      birthday: `${year}-${month}-${day}`,
      ...getTicketInfo(id.slice(6, 14)),
    };
  };

  const getTicketInfo = (birthday: string) => {
    const years = dayjs(travelDate.value).diff(birthday, 'y');
    if (years < 2) {
      return {
        ticketType: '免票',
        orderPriority: 0,
      };
    } else {
      if (years <= 12) {
        return {
          ticketType: '儿童',
          orderPriority: 2,
        };
      }
      if (years < 60) {
        return {
          ticketType: '成人',
          orderPriority: 1,
        };
      }
      return {
        ticketType: '老人',
        orderPriority: 3,
      };
    }
  };

  // 主函数：识别输入类型
  const identifyInput = (inputStr: string) => {
    if (!inputStr) {
      return {
        type: ID_TYPES.UNKNOWN.shortName,
        valid: false,
        message: '输入不能为空',
      };
    }

    const trimmed = inputStr.trim();

    // 判断是否为中国身份证
    if (/^\d{15}$|^\d{17}[\dXx]$/.test(trimmed)) {
      const valid = validateChinaID(trimmed);
      return {
        type: ID_TYPES.CHINA_ID.shortName,
        valid: valid,
        message: valid ? '有效的身份证号码' : '身份证号码校验失败',
        details: extractIDInfo(trimmed),
      };
    }

    if (isHKMacauPass(trimmed)) {
      return {
        type: ID_TYPES.HK_MACAU_PASS.shortName,
      };
    }

    if (isTaiwanPass(trimmed)) {
      return {
        type: ID_TYPES.TAIWAN_PASS.shortName,
        valid: true,
        message: '台湾通行证',
      };
    }

    if (isPassport(trimmed)) {
      return {
        type: ID_TYPES.PASSPORT.shortName,
        valid: true,
        message: '护照号码',
      };
    }

    return {
      type: ID_TYPES.UNKNOWN.shortName,
      valid: false,
      message: '无法识别的输入类型',
    };
  };

  // 处理识别
  const handleCheck = () => {
    lines.value.forEach((line) => {
      const result = identifyInput(line.id);
      line.idType = result.type;
      line.ticketType = result.details ? result.details.ticketType : '未知';
      if (result.valid === true) {
        line.idValid = '有效';
      } else {
        if (result.valid === false) {
          line.idValid = '无效';
        } else {
          line.idValid = '未知';
        }
      }
      line.orderPriority = result.details ? result.details.orderPriority : 0;
    });
    // sort by ticket type
    lines.value.sort((a, b) => a.orderPriority - b.orderPriority);

    let result = Object.groupBy(lines.value, ({ ticketType }) => ticketType);
    personSummary.value = Object.keys(result)
      .map((key) => `${key} ${result[key].length}`)
      .join('，');
    result = Object.groupBy(lines.value, ({ idValid }) => idValid);
    validSummary.value = Object.keys(result)
      .map((key) => `${key} ${result[key].length}`)
      .join('，');
  };

  const splitLines = () => {
    let temp = input.value;
    const invalidSymbols = [',', '，'];
    invalidSymbols.forEach((item) => {
      temp = temp.replace(item, ' ');
    });
    const result = temp
      .split('\n')
      .map((item) => item.trim())
      .filter((item) => item !== '');
    lines.value = result.map((item) => {
      const nameAndIdentify = item
        .split(' ')
        .map((item) => item.trim())
        .filter((item) => item !== '');
      return {
        name: nameAndIdentify[0],
        id: nameAndIdentify[1],
        orderPriority: 1,
      } as TicketInfo;
    });
  };

  const identifyTransfer = (i?: number) => {
    if (typeof i === 'number') {
      const obj: TicketInfo = lines.value[i];
      const temp = obj.name;
      obj.name = obj.id;
      obj.id = temp;
    } else {
      lines.value.forEach((obj) => {
        const temp = obj.name;
        obj.name = obj.id;
        obj.id = temp;
      });
    }
  };

  const onIdTypeConfirm = ({ selectedValues }: PickerConfirmEventParams) => {
    currentLine.value.idType = selectedValues[0];
    resetIdPicker();
  };

  const onTicketConfirm = ({ selectedValues }: PickerConfirmEventParams) => {
    currentLine.value.ticketType = selectedValues[0];
    resetTicketPicker();
  };

  const resetIdPicker = () => {
    showIdPicker.value = false;
    currentLine.value = {} as TicketInfo;
  };

  const resetTicketPicker = () => {
    showTicketPicker.value = false;
    currentLine.value = {} as TicketInfo;
  };

  const handleCopy = () => {
    let ticketInfo = '';
    ticketInfo += lines.value
      .map((item) => {
        return `上海乐高乐园 ${dayjs(travelDate.value).format('YYYY-MM-DD')} ${item.ticketType} ${item.idType} 金额
${item.name} ${item.id}`;
      })
      .join('\n');
    navigator.clipboard.writeText(ticketInfo);
  };
</script>

<style scoped lang="scss"></style>
