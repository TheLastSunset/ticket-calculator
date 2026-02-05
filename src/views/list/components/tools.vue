<template>
  <div>
    <van-tabs v-model:active="tabActiveName">
      <van-tab title="日历价" name="calendarPrice" key="calendarPrice">
        <van-field v-model="attraction.text" is-link readonly label="景区" @click="attractionHandle" />
        <van-field v-model="productCategory.text" is-link readonly label="票种" @click="productCategoryHandle" />
        <van-calendar :poppable="false" :show-confirm="false" :style="{ height: '500px' }" :formatter="calendarFormatter" />
        <van-popup v-model:show="showCalendarPricePicker" round position="bottom">
          <van-picker
            :columns="calendarPricePickerOptions"
            v-model="calendarPricePickerSelectedValues"
            @cancel="resetCalendarPricePicker"
            @confirm="onCalendarPricePickerConfirm"
          />
        </van-popup>
      </van-tab>
      <van-tab title="成本" name="costCalculator" key="costCalculator">
        <van-field label="金额" v-model="costCalculator.price"></van-field>
        <van-field label="手续费" v-model="costCalculator.costPlatform"></van-field>
        <van-field label="佣金" v-model="costCalculator.costCommission"></van-field>
        <van-field label="原价" v-model="costCalculator.productPrice"></van-field>
        <van-field label="汇率" v-model="costCalculator.exchangeRate"></van-field>
        <van-field label="利润" v-model="costCalculator.profit"></van-field>
        <van-button>复制</van-button>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script setup lang="ts">
  import type { ListApiData } from '@/api/productCategory/types';
  import type { CalendarDayItem } from 'vant/lib/calendar/types';
  import type { Numeric } from 'vant/es/utils';
  import type { PickerColumn, PickerConfirmEventParams } from 'vant';
  import dayjs from 'dayjs';
  import Decimal from 'decimal.js';
  import { products, productCategories } from '@/views/list/data/index.ts';
  import { attractions } from '../attractions.ts';

  const tabActiveName = ref('calculator');
  const attraction = ref({ text: '', value: '' });
  const productCategory = ref({ text: '', value: '' });
  const queryForm = ref<Record<string, any>>({});

  const showCalendarPricePicker = ref(false);
  const calendarPricePickerOptions = ref<PickerColumn>([]);

  const calendarPricePickerSelectedValues = ref<Numeric[]>([]);
  const cachedProductCategories = ref<ListApiData[]>([]);

  const costCalculator = ref({
    price: 0,
    costPlatform: 0,
    costCommission: 0,
    productPrice: 0,
    exchangeRate: 1,
    profit: 0,
  });
  watch(
    [() => costCalculator.value.price],
    () => {
      costCalculator.value.costPlatform = new Decimal(costCalculator.value.price).mul(0.02).toNumber();
    },
    { deep: true },
  );

  watch(
    [costCalculator],
    () => {
      costCalculator.value.profit = new Decimal(costCalculator.value.price)
        .sub(new Decimal(costCalculator.value.costPlatform))
        .sub(costCalculator.value.costCommission)
        .sub(new Decimal(costCalculator.value.productPrice).mul(costCalculator.value.exchangeRate))
        .toNumber();
    },
    { deep: true },
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let calendarPricePickerConfirmCb = (selectedValues: Numeric[]) => {};
  const attractionHandle = () => {
    showCalendarPricePicker.value = true;
    calendarPricePickerOptions.value = attractions.map((item) => {
      return { text: item.attractionSimpleName, value: item.attractionCode };
    });
    calendarPricePickerConfirmCb = (selectedValues: Numeric[]) => {
      attraction.value.value = selectedValues[0] as string;
      attraction.value.text = attractions.find((item) => item.attractionCode === attraction.value.value)?.attractionSimpleName as string;
      queryForm.value['attraction'] = attraction.value.text;
    };
  };
  const productCategoryHandle = () => {
    showCalendarPricePicker.value = true;
    calendarPricePickerOptions.value = cachedProductCategories.value.map((item) => {
      return { text: item.productCategoryName, value: item.productCategoryCode };
    });
    calendarPricePickerConfirmCb = (selectedValues: Numeric[]) => {
      productCategory.value.value = selectedValues[0] as string;
      productCategory.value.text = productCategories.data.find((item) => item.productCategoryCode === productCategory.value.value)
        ?.productCategoryName as string;
      queryForm.value['productCategory'] = productCategory.value.text;
    };
  };
  const onCalendarPricePickerConfirm = ({ selectedValues }: PickerConfirmEventParams) => {
    resetCalendarPricePicker();
    calendarPricePickerConfirmCb(selectedValues);
  };
  const resetCalendarPricePicker = () => {
    showCalendarPricePicker.value = false;
  };

  const calendarFormatter = (day: CalendarDayItem) => {
    const date = dayjs(day.date);
    const result = products.data.find(
      (item) =>
        item.useDate === date.format('YYYY-MM-DD') &&
        item.attractionProductCategoryFullCode.replace(attraction.value.value + '_', '') === productCategory.value.value,
    );
    if (result !== undefined) {
      day.topInfo = result?.originalPrice + '';
      day.bottomInfo = result?.preferSaleAmount + '';
      // day.className = result?.className;
    }
    console.log(result);
    return day;
  };

  onMounted(() => {
    // list().then((res) => {
    //   cachedProductCategories.value = res.data;
    // });
    cachedProductCategories.value = productCategories.data.filter((item) => {
      return item.visible === undefined || item.visible;
    });
  });
</script>

<style scoped lang="scss"></style>
