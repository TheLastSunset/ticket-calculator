<template>
  <div class="container">
    <h1>🎫 票务计算器</h1>

    <div class="form-group">
      <van-cell title="选择日期" :value="travelDate" @click="show = true" />
      <van-calendar v-model:show="show" @confirm="onConfirm" />
      <div id="dayType">
        <span class="day-type" :class="currentDayType === 'weekend' ? 'weekend' : 'workday'">
          {{ currentDayType === 'weekend' ? '周末 - 节假日价格' : '工作日 - 标准价格' }}
        </span>
      </div>
    </div>

    <div class="form-group">
      <label>选择人数</label>
      <div class="counter-group">
        <span class="counter-label">👨 成人</span>
        <div class="counter-controls">
          <button class="counter-btn" @click="changeCount('adult', -1)">−</button>
          <span class="counter-value">{{ counts.adult.num }}</span>
          <button class="counter-btn" @click="changeCount('adult', 1)">+</button>
        </div>
      </div>

      <div class="counter-group">
        <span class="counter-label">👶 儿童</span>
        <div class="counter-controls">
          <button class="counter-btn" @click="changeCount('child', -1)">−</button>
          <span class="counter-value">{{ counts.child.num }}</span>
          <button class="counter-btn" @click="changeCount('child', 1)">+</button>
        </div>
      </div>

      <div class="counter-group">
        <span class="counter-label">👴 老人</span>
        <div class="counter-controls">
          <button class="counter-btn" @click="changeCount('senior', -1)">−</button>
          <span class="counter-value">{{ counts.senior.num }}</span>
          <button class="counter-btn" @click="changeCount('senior', 1)">+</button>
        </div>
      </div>
    </div>

    <div class="form-group">
      <label>折扣比例</label>
      <div class="counter-group">
        <button class="counter-btn" @click="changeRatio('standard', -0.01)">−</button>
        <van-field v-model="ratio.standard" type="number" label="标准" />
        <button class="counter-btn" @click="changeRatio('standard', 0.01)">+</button>
      </div>

      <div class="counter-group">
        <button class="counter-btn" @click="changeRatio('earlyBird', -0.01)">−</button>
        <van-field v-model="ratio.earlyBird" type="number" label="早鸟" />
        <button class="counter-btn" @click="changeRatio('earlyBird', 0.01)">+</button>
      </div>
    </div>

    <div>
      <van-button size="small" type="primary" @click="copyTicketInfo">复制出票信息</van-button>
    </div>

    <div class="summary">
      <h2>💰 费用汇总-标准</h2>
      <div class="summary-item">
        <span class="summary-label">总金额</span>
        <span class="summary-value">
          ¥<span>{{ standardSummary.amount }}</span>
        </span>
      </div>
      <div class="summary-item">
        <span class="summary-label">官方票价</span>
        <span class="summary-value">
          ¥<span>{{ standardSummary.originalAmount }}</span>
        </span>
      </div>
      <div class="summary-item">
        <span class="summary-label">总佣金</span>
        <span class="summary-value">
          ¥<span>{{ standardSummary.commission }}</span>
        </span>
      </div>
      <div class="summary-item">
        <span class="summary-label">总成本-平台</span>
        <span class="summary-value">
          ¥<span>{{ standardSummary.costPlatform }}</span>
        </span>
      </div>
      <div class="summary-item">
        <span class="summary-label">总成本</span>
        <span class="summary-value">
          ¥<span>{{ standardSummary.totalCost }}</span>
        </span>
      </div>
      <div class="summary-item">
        <span class="summary-label">总利润</span>
        <span class="summary-value">
          ¥<span>{{ standardSummary.profit }}</span>
        </span>
      </div>
    </div>

    <div class="summary">
      <h2>💰 费用汇总-早鸟</h2>
      <div class="summary-item">
        <span class="summary-label">总金额</span>
        <span class="summary-value">
          ¥<span>{{ earlyBirdSummary.amount }}</span>
        </span>
      </div>
      <div class="summary-item">
        <span class="summary-label">官方票价</span>
        <span class="summary-value">
          ¥<span>{{ earlyBirdSummary.originalAmount }}</span>
        </span>
      </div>
      <div class="summary-item">
        <span class="summary-label">总佣金</span>
        <span class="summary-value">
          ¥<span>{{ earlyBirdSummary.commission }}</span>
        </span>
      </div>
      <div class="summary-item">
        <span class="summary-label">总成本-平台</span>
        <span class="summary-value">
          ¥<span>{{ earlyBirdSummary.costPlatform }}</span>
        </span>
      </div>
      <div class="summary-item">
        <span class="summary-label">总成本</span>
        <span class="summary-value">
          ¥<span>{{ earlyBirdSummary.totalCost }}</span>
        </span>
      </div>
      <div class="summary-item">
        <span class="summary-label">总利润</span>
        <span class="summary-value">
          ¥<span>{{ earlyBirdSummary.profit }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { tickets } from './data';
  import dayjs from 'dayjs';

  // 人数计数器
  const counts = ref({
    adult: { num: 0, simpleText: '大' } as any,
    child: { num: 0, simpleText: '小' } as any,
    senior: { num: 0, simpleText: '老' } as any,
  });

  // 当前选择的日期类型
  const currentDayType = ref('workday');

  const standardSummary = ref({
    amount: '0',
    originalAmount: '0',
    costPlatform: '0',
    commission: '0',
    totalCost: '0',
    profit: '0',
  });

  const earlyBirdSummary = ref({
    amount: '0',
    originalAmount: '0',
    costPlatform: '0',
    commission: '0',
    totalCost: '0',
    profit: '0',
  });

  const ratio = ref({
    standard: 0.926,
    earlyBird: 0.95,
    costPlatform: 0.02,
  });

  const travelDate = ref('');
  const show = ref(false);

  const formatDate = (date: Date) => dayjs(date).format('YYYY-MM-DD');

  const onConfirm = (value: Date) => {
    show.value = false;
    travelDate.value = formatDate(value);
  };

  const changeCount = (type: string, value: number) => {
    if (counts.value[type].num === 0 && value < 0) return;
    counts.value[type].num += value;
  };

  const changeRatio = (type: string, value: number) => {
    if (ratio.value[type] === 0 && value < 0) return;
    ratio.value[type] = (ratio.value[type] * 100 + value * 100) / 100;
  };

  // 初始化日期为今天
  travelDate.value = formatDate(new Date());

  checkDayType();

  watch(
    [travelDate, counts, ratio],
    () => {
      checkDayType();
      calculate();
    },
    {
      deep: true,
    },
  );

  // 检查是否为工作日
  function checkDayType() {
    const dayOfWeek = dayjs(travelDate.value).day();

    currentDayType.value = dayOfWeek === 0 || dayOfWeek === 6 ? 'weekend' : 'workday';
  }

  // 计算总金额
  function calculate() {
    let earlyBirdTotalAmount = 0;
    let earlyBirdTotalOriginalAmount = 0;
    let earlyBirdTotalCost = 0;
    let earlyBirdTotalCostPlatform = 0;
    let earlyBirdTotalCommission = 0;
    let totalAmount = 0;
    let totalOriginalAmount = 0;
    let totalCost = 0;
    let totalCostPlatform = 0;
    let totalCommission = 0;

    const filterTickets = tickets.data.filter((item) => {
      return item.travelDate === travelDate.value;
    });
    const ticketMap: Map<string, any> = new Map();
    for (const element of filterTickets) {
      const ticket: any = element;
      ticketMap.set(ticket.touristResortTicketsCategoryFullCode, ticket);
    }

    // 计算成人
    earlyBirdTotalAmount +=
      counts.value.adult.num * ticketMap.get('SHANGHAI_LEGOLAND_EARLY_ONE_DAY_ONE_ADULT').price * ratio.value.earlyBird;
    earlyBirdTotalOriginalAmount += counts.value.adult.num * ticketMap.get('SHANGHAI_LEGOLAND_EARLY_ONE_DAY_ONE_ADULT').price;
    earlyBirdTotalCommission += counts.value.adult.num * 0;

    // 计算儿童
    earlyBirdTotalAmount +=
      counts.value.child.num * ticketMap.get('SHANGHAI_LEGOLAND_EARLY_ONE_DAY_ONE_CHILD').price * ratio.value.earlyBird;
    earlyBirdTotalOriginalAmount += counts.value.child.num * ticketMap.get('SHANGHAI_LEGOLAND_EARLY_ONE_DAY_ONE_CHILD').price;
    earlyBirdTotalCommission += counts.value.child.num * 0;

    // 计算老人
    earlyBirdTotalAmount +=
      counts.value.senior.num * ticketMap.get('SHANGHAI_LEGOLAND_EARLY_ONE_DAY_ONE_SENIOR').price * ratio.value.earlyBird;
    earlyBirdTotalOriginalAmount += counts.value.senior.num * ticketMap.get('SHANGHAI_LEGOLAND_EARLY_ONE_DAY_ONE_SENIOR').price;
    earlyBirdTotalCommission += counts.value.senior.num * 0;

    // 计算利润
    earlyBirdTotalCostPlatform = earlyBirdTotalAmount * ratio.value.earlyBird;
    earlyBirdTotalCost = earlyBirdTotalCommission + earlyBirdTotalCostPlatform;
    const earlyBirdTotalProfit = earlyBirdTotalAmount - earlyBirdTotalCost - earlyBirdTotalCommission;

    // 更新显示
    earlyBirdSummary.value.amount = earlyBirdTotalAmount.toFixed(2);
    earlyBirdSummary.value.originalAmount = earlyBirdTotalOriginalAmount.toFixed(2);
    earlyBirdSummary.value.costPlatform = earlyBirdTotalCostPlatform.toFixed(2);
    // earlyBirdSummary.value.commission = totalCommission.toFixed(2);
    // earlyBirdSummary.value.totalCost = totalCost.toFixed(2);
    earlyBirdSummary.value.profit = earlyBirdTotalProfit.toFixed(2);

    // 计算成人
    totalAmount += counts.value.adult.num * ticketMap.get('SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT').price * ratio.value.standard;
    totalOriginalAmount += counts.value.adult.num * ticketMap.get('SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT').price;
    totalCommission += counts.value.adult.num * 10;

    // 计算儿童
    totalAmount += counts.value.child.num * ticketMap.get('SHANGHAI_LEGOLAND_ONE_DAY_ONE_CHILD').price * ratio.value.standard;
    totalOriginalAmount += counts.value.child.num * ticketMap.get('SHANGHAI_LEGOLAND_ONE_DAY_ONE_CHILD').price;
    totalCommission += counts.value.child.num * 10;

    // 计算老人
    totalAmount += counts.value.senior.num * ticketMap.get('SHANGHAI_LEGOLAND_ONE_DAY_ONE_SENIOR').price * ratio.value.standard;
    totalOriginalAmount += counts.value.senior.num * ticketMap.get('SHANGHAI_LEGOLAND_ONE_DAY_ONE_SENIOR').price;
    totalCommission += counts.value.senior.num * 10;

    // 计算利润
    totalCostPlatform = totalAmount * ratio.value.costPlatform;
    totalCost = totalCommission + totalCostPlatform;
    const totalProfit = totalAmount - totalCost - totalCommission;

    // 更新显示
    standardSummary.value.amount = totalAmount.toFixed(2);
    standardSummary.value.originalAmount = totalOriginalAmount.toFixed(2);
    standardSummary.value.costPlatform = totalCostPlatform.toFixed(2);
    standardSummary.value.commission = totalCommission.toFixed(2);
    standardSummary.value.totalCost = totalCost.toFixed(2);
    standardSummary.value.profit = totalProfit.toFixed(2);
  }

  // 初始化计算
  calculate();

  const copyTicketInfo = () => {
    function formatSimpleText(type) {
      return `${counts.value[type].num ? counts.value[type].num + counts.value[type].simpleText : ''}`;
    }
    let ticketInfo = `${travelDate.value} ${formatSimpleText('adult')}${formatSimpleText('child')}${formatSimpleText('senior')}`;
    const finalAmount: number = Math.ceil(Number.parseFloat(standardSummary.value.amount) / 5) * 5;
    const diffDays = dayjs(travelDate.value).diff(new Date(), 'd');
    const isEarlyBirdTicket = diffDays >= 9;
    if (isEarlyBirdTicket) {
      const earlyBirdFinalAmount: number = Math.ceil(Number.parseFloat(earlyBirdSummary.value.amount) / 5) * 5;
      ticketInfo += `
早鸟票：${earlyBirdFinalAmount}`;
    }
    ticketInfo += `
标准票：${finalAmount}`;
    if (isEarlyBirdTicket) {
      ticketInfo += `
早鸟价格优惠，不可改签，需提前 10 天预订
标准可改签一次`;
    }
    navigator.clipboard.writeText(ticketInfo);
  };
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    max-width: 500px;
    padding: 30px;
    margin: 0 auto;
    background: white;
    border-radius: 20px;
    box-shadow: 0 20px 60px rgb(0 0 0 / 30%);
  }

  h1 {
    margin-bottom: 30px;
    font-size: 24px;
    color: #333;
    text-align: center;
  }

  .form-group {
    margin-bottom: 20px;
  }

  label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 600;
    color: #555;
  }

  input[type='date'] {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    border: 2px solid #e0e0e0;
    border-radius: 10px;
    transition: border-color 0.3s;
  }

  input[type='date']:focus {
    outline: none;
    border-color: #667eea;
  }

  .day-type {
    display: inline-block;
    padding: 6px 12px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 600;
    border-radius: 6px;
  }

  .workday {
    color: #1976d2;
    background: #e3f2fd;
  }

  .weekend {
    color: #f57c00;
    background: #fff3e0;
  }

  .counter-group {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    margin-bottom: 15px;
    background: #f8f9fa;
    border-radius: 10px;
  }

  .counter-label {
    font-size: 16px;
    font-weight: 600;
    color: #333;
  }

  .counter-controls {
    display: flex;
    gap: 15px;
    align-items: center;
  }

  .counter-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    font-size: 20px;
    color: white;
    cursor: pointer;
    background: #667eea;
    border: none;
    border-radius: 8px;
    transition: all 0.3s;
  }

  .counter-btn:hover {
    background: #5568d3;
    transform: scale(1.1);
  }

  .counter-btn:active {
    transform: scale(0.95);
  }

  .counter-value {
    min-width: 30px;
    font-size: 18px;
    font-weight: 700;
    color: #333;
    text-align: center;
  }

  .summary {
    padding: 25px;
    margin-top: 30px;
    color: white;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 15px;
  }

  .summary h2 {
    margin-bottom: 15px;
    font-size: 18px;
    text-align: center;
  }

  .summary-item {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    font-size: 15px;
    border-bottom: 1px solid rgb(255 255 255 / 20%);
  }

  .summary-item:last-child {
    padding-top: 15px;
    margin-top: 10px;
    font-size: 18px;
    font-weight: 700;
    border-top: 2px solid rgb(255 255 255 / 40%);
    border-bottom: none;
  }

  .summary-label {
    opacity: 0.9;
  }

  .summary-value {
    font-weight: 600;
  }

  @media (max-width: 480px) {
    .container {
      padding: 20px;
    }

    h1 {
      font-size: 20px;
    }

    .counter-group {
      padding: 12px;
    }

    .counter-label {
      font-size: 14px;
    }
  }
</style>
