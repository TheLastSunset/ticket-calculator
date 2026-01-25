<template>
  <van-tabs v-model:active="tabActiveName">
    <van-tab
      v-for="attraction in displayAttractions"
      :title="attraction.attractionSimpleName"
      :name="attraction.attractionCode"
      :key="attraction.attractionCode"
    >
      <div v-for="term in displayTerms" :key="term.fullText">
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
  import { attractions } from '@/views/list/attractions.ts';
  import type { Term } from '@/views/list/list';

  const tabActiveName = ref('');
  const displayTerms = ref<Term[]>([]);

  const displayAttractions = attractions.filter((item) => item.visible === undefined || item.visible);

  watch([tabActiveName], () => {
    displayTerms.value = terms
      .filter((term) => term.visible === undefined || term.visible)
      .filter((term) => !term.attraction || term.attraction === tabActiveName.value);
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
