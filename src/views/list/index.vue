<template>
  <div class="container">
    <h1>🎫 票务计算器</h1>

    <div class="form-group">
      <van-cell title="选择日期" :value="useDate" @click="show = true" />
      <van-calendar v-model:show="show" @confirm="onConfirm" :formatter="calendarFormatter" />
    </div>

    <van-tabs v-model:active="tabActiveName">
      <van-tab title="票务" name="calculator" key="calculator">
        <calculator />
      </van-tab>
      <van-tab title="证件" name="identifyLint" key="identifyLint">
        <identify-lint />
      </van-tab>
      <van-tab title="工具" name="tools" key="tools">
        <tools />
      </van-tab>
      <van-tab title="术语" name="term" key="term">
        <term />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script setup lang="ts">
  import dayjs from 'dayjs';
  import Calculator from '@/views/list/components/calculator.vue';
  import IdentifyLint from '@/views/list/components/identifyLint.vue';
  import Term from '@/views/list/components/term.vue';
  import Tools from '@/views/list/components/tools.vue';
  import ChinaHolidayAndFestival from '@/views/list/components/config/calendar.ts';
  import type { CalendarDayItem } from 'vant/lib/calendar/types';

  // TODO: refactor useDayjs
  dayjs.locale('zh-cn', {
    weekdays: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
  });
  const tabActiveName = ref('calculator');

  const formatDate = (date: Date) => dayjs(date).format('YYYY-MM-DD');

  const useDate = ref(formatDate(new Date()));
  provide('useDate', useDate);
  const show = ref(false);

  const onConfirm = (value: Date) => {
    show.value = false;
    useDate.value = formatDate(value);
  };

  const calendarFormatter = (day: CalendarDayItem) => {
    const date = dayjs(day.date);
    const result = ChinaHolidayAndFestival.find((item) => item.condition(date));
    if (result !== undefined) {
      day.topInfo = result?.topInfo;
      day.bottomInfo = result?.bottomInfo;
      day.className = result?.className;
    }
    return day;
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
