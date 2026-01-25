<template>
  <div>
    <van-field v-model="totalAmount"></van-field>
    <van-field v-for="(person, i) in persons" v-model="person.num" :key="i" :label="person.label"></van-field>
    <div v-for="(person, i) in persons" :key="i">{{ person.label }}</div>
    <van-button>复制</van-button>
  </div>
</template>
<script setup lang="ts">
  const totalAmount = ref(0);

  const persons = [
    {
      label: '成人',
      num: 0,
      avgRatio: 0.55,
      avgAmount: 0,
    },
    {
      label: '儿童',
      num: 0,
      avgRatio: 0.45,
      avgAmount: 0,
    },
    {
      label: '老人',
      num: 0,
      avgRatio: 0.45,
      avgAmount: 0,
    },
  ];
</script>

<style scoped lang="scss"></style>
