<template>
  <div>
    <div class="form-group">
      <label>快捷操作</label>
      <van-button
        size="small"
        type="primary"
        v-for="btn in quarkBtn"
        @click="btn.func ? btn.func() : quarkBtnFunc(btn.name)"
        :key="btn.name"
      >
        {{ btn.name }}
      </van-button>
    </div>
    <div class="form-group">
      <label>选择人数</label>
      <div class="counter-group" v-for="count in counts" :key="count.category">
        <span class="counter-label">{{ count.label }}</span>
        <div class="counter-controls">
          <button class="counter-btn" @click="changeCount(count, -1)">−</button>
          <span class="counter-value">{{ count.num }}</span>
          <button class="counter-btn" @click="changeCount(count, 1)">+</button>
        </div>
      </div>
    </div>

    <div class="form-group">
      <label>差价</label>
      <div class="counter-group">
        <button class="counter-btn" @click="changeDiffAmount('standard', -5)">−</button>
        <van-field v-model="diffAmount.standard" type="number" label="标准" />
        <button class="counter-btn" @click="changeDiffAmount('standard', 5)">+</button>
      </div>

      <div class="counter-group">
        <button class="counter-btn" @click="changeDiffAmount('earlyBird', -5)">−</button>
        <van-field v-model="diffAmount.earlyBird" type="number" label="早鸟" />
        <button class="counter-btn" @click="changeDiffAmount('earlyBird', 5)">+</button>
      </div>
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
  import type { PersonCount, QuarkBtn, Product, ProductSummary } from '@/views/list/list';
  import dayjs from 'dayjs';
  import { products } from '@/views/list/data.ts';
  import { showToast } from 'vant';
  import { personCountConfig, quarkBtnConfig } from '@/views/list/components/config/calculator.ts';

  const useDate = inject<Ref<string, string>>('useDate', ref(''));

  const counts = ref<PersonCount[]>(personCountConfig.filter((item) => item.visible));

  const resetForm = () => {
    counts.value.forEach((item) => {
      item.num = 0;
    });
    diffAmount.value.standard = 0;
    diffAmount.value.earlyBird = 0;
  };

  const ratio = ref({
    costPlatform: 0.02,
  });

  const diffAmount = ref({
    standard: 0,
    earlyBird: 0,
  });

  const standardSummary = ref<ProductSummary>({
    amount: '0',
    originalAmount: '0',
    costPlatform: '0',
    commission: '0',
    totalCost: '0',
    profit: '0',
  });

  const earlyBirdSummary = ref<ProductSummary>({
    amount: '0',
    originalAmount: '0',
    costPlatform: '0',
    commission: '0',
    totalCost: '0',
    profit: '0',
  });

  watch(
    [useDate, counts, ratio],
    () => {
      calculate();
    },
    {
      deep: true,
    },
  );

  const changeCount = (count: PersonCount, value: number) => {
    if (count.num === 0 && value < 0) return;
    count.num += value;
  };

  const changeDiffAmount = (type: string, value: number) => {
    if (diffAmount.value[type] === 0 && value < 0) return;
    diffAmount.value[type] = (diffAmount.value[type] * 100 + value * 100) / 100;
  };

  function getProductMap() {
    const filterProducts = products.data.filter((item) => {
      return item.useDate === useDate.value;
    });
    if (filterProducts.length == 0) {
      showToast('Product data not found');
      return;
    }
    const productMap: Map<string, Product> = new Map();
    for (const element of filterProducts) {
      const product: any = element;
      productMap.set(product.touristResortProductCategoryFullCode, product);
    }
    return productMap;
  }

  const personCounts = computed(() => {
    const localPersonCounts = {
      SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT: { num: 0, earlyBirdLink: 'SHANGHAI_LEGOLAND_EARLY_ONE_DAY_ONE_ADULT' },
      SHANGHAI_LEGOLAND_ONE_DAY_ONE_CHILD: { num: 0, earlyBirdLink: 'SHANGHAI_LEGOLAND_EARLY_ONE_DAY_ONE_CHILD' },
      SHANGHAI_LEGOLAND_ONE_DAY_ONE_SENIOR: { num: 0, earlyBirdLink: 'SHANGHAI_LEGOLAND_EARLY_ONE_DAY_ONE_SENIOR' },
    };
    counts.value.forEach((count) => {
      if (count.details) {
        count.details.forEach((detail) => {
          localPersonCounts[detail.category].num += count.num * detail.num;
        });
      } else {
        localPersonCounts[count.category].num += count.num;
      }
    });
    return localPersonCounts;
  });

  // 计算总金额
  function calculate() {
    let earlyBirdTotalAmount = 0;
    let earlyBirdTotalOriginalAmount = 0;
    let earlyBirdTotalCost = 0;
    let earlyBirdTotalCostPlatform = 0;
    const earlyBirdTotalCommission = 0;
    let totalAmount = 0;
    let totalOriginalAmount = 0;
    let totalCost = 0;
    let totalCostPlatform = 0;
    const totalCommission = 0;

    const productMap: Map<string, Product> | undefined = getProductMap();
    if (!productMap) {
      return;
    }

    // 计算早鸟
    for (const key in personCounts.value) {
      const element = personCounts.value[key];
      const product = productMap.get(element.earlyBirdLink) as Product;
      earlyBirdTotalAmount += element.num * product.preferSaleAmount;
      earlyBirdTotalOriginalAmount += element.num * product.price;
    }
    // 计算标准
    for (const element of counts.value) {
      const product = productMap.get(element.category) as Product;
      totalAmount += element.num * product.preferSaleAmount;
      totalOriginalAmount += element.num * product.price;
    }

    // 特殊情况下，活动票比早鸟更优惠，则不显示早鸟票
    if (totalAmount < earlyBirdTotalAmount) {
      earlyBirdTotalAmount = totalAmount;
      earlyBirdTotalOriginalAmount = totalOriginalAmount;
    }

    // 计算利润
    earlyBirdTotalCostPlatform = earlyBirdTotalAmount * ratio.value.costPlatform;
    earlyBirdTotalCost = earlyBirdTotalCommission + earlyBirdTotalCostPlatform;
    const earlyBirdTotalProfit = earlyBirdTotalAmount - earlyBirdTotalCost - earlyBirdTotalCommission;

    // 更新显示
    earlyBirdSummary.value.amount = earlyBirdTotalAmount.toFixed(2);
    earlyBirdSummary.value.originalAmount = earlyBirdTotalOriginalAmount.toFixed(2);
    earlyBirdSummary.value.costPlatform = earlyBirdTotalCostPlatform.toFixed(2);
    earlyBirdSummary.value.commission = earlyBirdTotalCommission.toFixed(2);
    earlyBirdSummary.value.totalCost = earlyBirdTotalCost.toFixed(2);
    earlyBirdSummary.value.profit = earlyBirdTotalProfit.toFixed(2);

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

  const amountCalculate = (amount: string, diffAmount: number) => {
    return Math.ceil(Number.parseFloat(amount) / 5) * 5 + Number.parseFloat(diffAmount + '');
  };

  const copyProductInfo = () => {
    const formatSimpleText = (type: string) => {
      return `${
        personCounts.value[type].num
          ? personCounts.value[type].num +
            counts.value.find((item) => {
              return item.category === type;
            }).simpleText
          : ''
      }`;
    };

    let productInfo = `${useDate.value} ${dayjs(useDate.value).format('dddd')} ${formatSimpleText('SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT')}${formatSimpleText('SHANGHAI_LEGOLAND_ONE_DAY_ONE_CHILD')}${formatSimpleText('SHANGHAI_LEGOLAND_ONE_DAY_ONE_SENIOR')}`;
    const finalAmount: number = amountCalculate(standardSummary.value.amount, diffAmount.value.standard);
    const diffDays = dayjs(useDate.value).diff(new Date(), 'd');
    const earlyBirdFinalAmount: number = amountCalculate(earlyBirdSummary.value.amount, diffAmount.value.earlyBird);
    // 特殊情况下，活动票比早鸟更优惠，则不显示早鸟票
    const isEarlyBirdProduct = diffDays >= 9 && earlyBirdFinalAmount < finalAmount;
    if (isEarlyBirdProduct) {
      productInfo += `
早鸟票：${earlyBirdFinalAmount}`;
    }
    productInfo += `
标准票：${finalAmount}
临近出游日可能提前售罄，建议提前两天预定`;
    if (isEarlyBirdProduct) {
      productInfo += `

早鸟价格优惠，不可改签，需提前 10 天预订
标准可改签一次`;
    }

    if (personCounts.value.SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT.num !== 1) {
      productInfo += `

不升级年卡，您可以自己买官方的半价一小
工作日 150，节假日 175`;
    }
    navigator.clipboard.writeText(productInfo);
  };

  const quarkBtnFunc = (matchQuarkBtnName: string) => {
    resetForm();

    const btnConfig = quarkBtnConfig.find((item) => item.name === matchQuarkBtnName);

    counts.value.forEach((item) => {
      btnConfig?.quarkFuncConfig.forEach((matchItem) => {
        if (matchItem.category === item.category) {
          item.num = matchItem.num;
        }
      });
    });

    nextTick(() => {
      copyProductInfo();
    });
  };

  const quarkBtn: QuarkBtn[] = [
    {
      name: `一大一小`,
    },
    {
      name: `2大1小`,
      visible: false,
    },
    {
      name: `2大2小`,
      visible: false,
    },
    {
      name: `2大`,
    },
    {
      name: `清空`,
      func: resetForm,
    },
    {
      name: `均价`,
      func: () => {},
    },
    {
      name: `出票信息`,
      func: copyProductInfo,
    },
  ];
</script>

<style scoped lang="scss">
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
