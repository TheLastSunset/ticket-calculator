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
      <div class="counter-group" v-for="(val, key) in summaries" :key="key">
        <button class="counter-btn" @click="changeDiffAmount(key, -5)">−</button>
        <van-field v-model="diffAmount[key]" type="number" :label="val.name" />
        <button class="counter-btn" @click="changeDiffAmount(key, 5)">+</button>
      </div>
    </div>

    <div class="summary" v-for="(val, key) in summaries" :key="key">
      <h2>💰 费用汇总-{{ val.name }}</h2>
      <div class="summary-item">
        <span class="summary-label">总金额</span>
        <span class="summary-value">
          ¥<span>{{ val.amount }}</span>
        </span>
      </div>
      <div class="summary-item">
        <span class="summary-label">官方票价</span>
        <span class="summary-value">
          ¥<span>{{ val.originalAmount }}</span>
        </span>
      </div>
      <div class="summary-item">
        <span class="summary-label">总佣金</span>
        <span class="summary-value">
          ¥<span>{{ val.commission }}</span>
        </span>
      </div>
      <div class="summary-item">
        <span class="summary-label">总成本-平台</span>
        <span class="summary-value">
          ¥<span>{{ val.costPlatform }}</span>
        </span>
      </div>
      <div class="summary-item">
        <span class="summary-label">总成本</span>
        <span class="summary-value">
          ¥<span>{{ val.totalCost }}</span>
        </span>
      </div>
      <div class="summary-item">
        <span class="summary-label">总利润</span>
        <span class="summary-value">
          ¥<span>{{ val.profit }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { showToast } from 'vant';
  import type { CalculatorClipboardPluginParams } from '@/views/list/components/plugins/clipboard';
  import type { PersonCount, QuarkBtn, Product, ProductSummary, ProductCategoryDetail } from '@/views/list/types';
  import Decimal from 'decimal.js';
  import { products } from '@/views/list/data/index.ts';
  import { basicProducts, personCountConfig, quarkBtnConfig } from '@/views/list/components/config/calculator.ts';
  import { CalculatorClipboardPlugins } from '@/views/list/components/plugins/clipboard/calculator/index.ts';

  const useDate = inject<Ref<string, string>>('useDate', ref(''));

  const counts = ref<PersonCount[]>([]);

  const resetForm = () => {
    counts.value.forEach((item) => {
      item.num = 0;
    });
    // TODO: add to store or config api
    for (const valueKey in diffAmount.value) {
      diffAmount.value[valueKey] = 0;
    }
  };

  const ratio = ref<Record<string, number>>({
    costPlatform: 0.02,
  });

  // TODO: add to store or config api
  const diffAmount = ref<Record<string, number>>({});

  const summaries = ref<Record<string, ProductSummary>>({});

  const configInit = () => {
    counts.value = personCountConfig.filter((item) => item.visible === undefined || item.visible(useDate.value));

    summaries.value = {};
    diffAmount.value = {};
    basicProducts
      .filter((item) => item.visible(useDate.value))
      .forEach((item) => {
        summaries.value[item.code] = {
          name: item.name,
          needLink: item.needLink,
          amount: '0',
          originalAmount: '0',
          costPlatform: '0',
          commission: '0',
          totalCost: '0',
          profit: '0',
          book: item.book,
        } as ProductSummary;
        diffAmount.value[item.code] = 0;
      });
  };

  watch([useDate], () => {
    configInit();
    calculate();
  });

  watch(
    [counts, ratio],
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
    diffAmount.value[type] = new Decimal(diffAmount.value[type] as number).plus(value).toNumber();
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
      productMap.set(element.attractionProductCategoryFullCode, element);
    }
    return productMap;
  }

  const personCounts = computed(() => {
    const localPersonCounts: Record<string, any> = {
      SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT: {
        num: 0,
        reference: {
          earlyBird: 'SHANGHAI_LEGOLAND_EARLY_ONE_DAY_ONE_ADULT',
          superEarlyBird: 'SHANGHAI_LEGOLAND_SUPER_EARLY_ONE_DAY_ONE_ADULT',
        },
      },
      SHANGHAI_LEGOLAND_ONE_DAY_ONE_CHILD: {
        num: 0,
        reference: {
          earlyBird: 'SHANGHAI_LEGOLAND_EARLY_ONE_DAY_ONE_CHILD',
          superEarlyBird: 'SHANGHAI_LEGOLAND_SUPER_EARLY_ONE_DAY_ONE_CHILD',
        },
      },
      SHANGHAI_LEGOLAND_ONE_DAY_ONE_SENIOR: {
        num: 0,
        reference: {
          earlyBird: 'SHANGHAI_LEGOLAND_EARLY_ONE_DAY_ONE_SENIOR',
          superEarlyBird: 'SHANGHAI_LEGOLAND_SUPER_EARLY_ONE_DAY_ONE_SENIOR',
        },
      },
    };
    counts.value.forEach((count) => {
      if (count.insteadSolution) {
        const details = count.insteadSolution.details as ProductCategoryDetail[];
        details.forEach((detail) => {
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
    const productMap: Map<string, Product> | undefined = getProductMap();
    if (!productMap) {
      return;
    }

    for (const valueKey in summaries.value) {
      let totalAmount = 0;
      let totalOriginalAmount = 0;
      let totalCost = 0;
      let totalCostPlatform = 0;
      const totalCommission = 0;
      const summary = summaries.value[valueKey] as ProductSummary;
      if (summary.needLink) {
        // 计算早鸟
        for (const key in personCounts.value) {
          const element = personCounts.value[key];
          const product = productMap.get(element.reference[valueKey]) as Product;
          totalAmount += element.num * product.preferSaleAmount;
          totalOriginalAmount += element.num * product.originalPrice;
        }
      } else {
        // 计算标准
        for (const element of counts.value) {
          const product = productMap.get(element.category) as Product;
          totalAmount += element.num * product.preferSaleAmount;
          totalOriginalAmount += element.num * product.originalPrice;
        }
      }

      totalAmount += Number.parseFloat(diffAmount.value[valueKey] + '');
      // 计算利润
      totalCostPlatform = totalAmount * (ratio.value.costPlatform as number);
      totalCost = totalCommission + totalCostPlatform;
      const totalProfit = totalAmount - totalCost - totalCommission;

      // 更新显示
      summary.amount = totalAmount.toFixed(2);
      summary.originalAmount = totalOriginalAmount.toFixed(2);
      summary.costPlatform = totalCostPlatform.toFixed(2);
      summary.commission = totalCommission.toFixed(2);
      summary.totalCost = totalCost.toFixed(2);
      summary.profit = totalProfit.toFixed(2);
    }
  }

  const copyProductInfo = () => {
    let productInfo = ``;
    const params: CalculatorClipboardPluginParams = {
      useDate: useDate.value,
      personCounts: personCounts.value,
      counts: counts.value,
      summaries: summaries.value,
      diffAmount: diffAmount.value,
    };
    for (const plugin of CalculatorClipboardPlugins) {
      if (plugin.condition(params)) {
        productInfo += plugin.action(params);
      }
    }
    navigator.clipboard.writeText(productInfo);
  };

  const quarkBtnFunc = (matchQuarkBtnName: string) => {
    resetForm();

    const btnConfig = quarkBtnConfig.find((item) => item.name === matchQuarkBtnName);

    counts.value.forEach((item) => {
      btnConfig?.action(useDate.value).forEach((matchItem) => {
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

  onMounted(() => {
    configInit();
    // 初始化计算
    calculate();
  });
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
