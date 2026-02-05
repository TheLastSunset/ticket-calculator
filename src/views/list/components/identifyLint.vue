<template>
  <div class="content">
    <div class="input-group">
      <div class="input-wrapper">
        <div>订单 ID</div>
        <van-field type="text" label="订单 ID" label-align="top" v-model="orderId" />
      </div>
    </div>
    <div class="input-group">
      <div class="input-wrapper">
        <van-field
          type="textarea"
          label="身份信息"
          label-align="top"
          v-model="input"
          rows="10"
          @keyup.enter="handleCheck"
          placeholder="例如：张三 110101199001011234"
        />
        <div>票种统计：{{ personSummary }}</div>
        <div>ID 统计：{{ validSummary }}</div>
        <van-button @click="splitLines" type="primary" size="small">分割</van-button>
        <van-button @click="handleCheck" type="primary" size="small">自动识别</van-button>
        <van-button @click="handleCopy" type="primary" size="small">复制</van-button>
        <van-button @click="identifyTransfer" type="primary" size="small">互换</van-button>
        <van-button @click="resetForm" type="primary" size="small">清空</van-button>
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
            showProductPicker = true;
            currentLine = line;
          "
        />
        <van-button @click="identifyTransfer(i)" type="primary" size="small">互换</van-button>
      </div>
    </div>
    <van-popup v-model:show="showIdPicker" round position="bottom">
      <van-picker :columns="idTypeOptions" v-model="idPickerSelectedValues" @cancel="resetIdPicker" @confirm="onIdTypeConfirm" />
    </van-popup>
    <van-popup v-model:show="showProductPicker" round position="bottom">
      <van-picker :columns="ticketOptions" v-model="ticketPickerSelectedValues" @cancel="resetTicketPicker" @confirm="onTicketConfirm" />
    </van-popup>
  </div>
</template>

<script setup lang="ts">
  import dayjs from 'dayjs';
  import type { ProductInfo } from '@/views/list/types';
  import { type PickerColumn, type PickerConfirmEventParams, showToast } from 'vant';
  import type { Numeric } from 'vant/es/utils';
  import type { IdentifyLintClipboardPluginParams } from '@/views/list/components/plugins/clipboard';
  import { IdentifyLintClipboardPlugins } from '@/views/list/components/plugins/clipboard/identifyLint/index.ts';
  import { invalidSymbols } from '@/chore/invalidSymbols.ts';

  const useDate = inject<Ref<string, string>>('useDate', ref(''));

  const input = ref('');
  const lines = ref<ProductInfo[]>([]);
  const personSummary = ref('');
  const validSummary = ref('');

  const showIdPicker = ref(false);
  const showProductPicker = ref(false);
  const idPickerSelectedValues = ref<Numeric[]>([]);
  const ticketPickerSelectedValues = ref<Numeric[]>([]);
  const currentLine = ref<ProductInfo>();

  const orderId = ref('');
  // 证件类型枚举
  const ID_TYPES = {
    CHINA_ID: { fullName: '中国居民身份证', shortName: '身份证' },
    PASSPORT: { fullName: '护照', shortName: '护照' },
    HK_MACAU_PASS: { fullName: '港澳通行证（回乡证）', shortName: '回乡证' },
    TAIWAN_PASS: { fullName: '台湾通行证', shortName: '台湾通行证' },
    FPRID: { fullName: '外国人永久居留身份证', shortName: '永居' },
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

  // 校验中国身份证号码
  const validateChinaID = (id: string) => {
    const pattern = /^[1-9]\d{5}(18|19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}[\dXx]$/;

    if (!pattern.test(id)) return false;

    const weights: number[] = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    const codes = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];

    let sum = 0;
    for (let i = 0; i < 17; i++) {
      sum += Number.parseInt(id[i]) * weights[i];
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
      ...getProductInfo(id.slice(6, 14)),
    };
  };

  const getProductInfo = (birthday: string) => {
    const years = dayjs(useDate.value).diff(birthday, 'y');
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
      } else if (result.valid === false) {
        line.idValid = '无效';
      } else {
        line.idValid = '未知';
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
    // TODO: first chinese character before add '/n'
    // last chinese character after add whitespace
    // TODO: add to store or config api
    invalidSymbols.forEach((item) => {
      temp = temp.replaceAll(item, ' ');
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
      } as ProductInfo;
    });
  };

  const identifyTransfer = (i?: number) => {
    if (typeof i === 'number') {
      const obj = lines.value[i] as ProductInfo;
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
    currentLine.value = {} as ProductInfo;
  };

  const resetTicketPicker = () => {
    showProductPicker.value = false;
    currentLine.value = {} as ProductInfo;
  };

  const handleCopy = () => {
    if (orderId.value.trim() === '') {
      showToast('Order id must not blank');
      return;
    }
    let infos: string[] = [];
    const params: IdentifyLintClipboardPluginParams = {
      useDate: useDate.value,
      remainPersons: Array.from(lines.value),
      orderId: orderId.value,
    };
    for (const plugin of IdentifyLintClipboardPlugins) {
      if (plugin.condition(params)) {
        infos = infos.concat(plugin.action(params));
      }
    }
    navigator.clipboard.writeText(infos.join('\n'));
  };

  const resetForm = () => {
    input.value = '';
    lines.value = [];
    orderId.value = '';
    personSummary.value = '';
    validSummary.value = '';
  };
</script>

<style scoped lang="scss"></style>
