<template>
  <van-tabs v-model:active="tabActiveName">
    <van-tab v-for="touristResort in touristResorts" :title="touristResort.name" :name="touristResort.code" :key="touristResort.name">
      <div v-for="term in termsRef" :key="term.fullText">
        <div>
          <span>{{ term.simpleText }}</span>
        </div>
        <div>
          <van-button @click="handleCopy(term)">复制</van-button>
        </div>
      </div>
    </van-tab>
  </van-tabs>
</template>

<script setup lang="ts">
  import { terms } from '@/views/list/terms.ts';
  import { touristResorts } from '@/views/list/touristResort.ts';
  import type { Term } from '@/views/list/list';

  const tabActiveName = ref('');
  const termsRef = ref<Term[]>([]);

  watch([tabActiveName], () => {
    termsRef.value = terms.filter((term) => !term.touristResort || term.touristResort === tabActiveName.value);
  });

  onMounted(() => {
    tabActiveName.value = 'SHANGHAI_LEGOLAND';
  });

  const handleCopy = (term: Term) => {
    if (term.func) {
      navigator.clipboard.writeText(term.func());
    } else {
      navigator.clipboard.writeText(term.fullText || '');
    }
  };
</script>

<style scoped lang="scss"></style>
