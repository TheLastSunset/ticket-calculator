<template>
  <div v-for="term in terms" :key="term.fullText">
    <div>
      <span>{{ term.simpleText }}</span>
    </div>
    <div>
      <van-button @click="handleCopy(term)">复制</van-button>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { terms } from '@/views/list/private.ts';

  const handleCopy = (term) => {
    if (term.func) {
      navigator.clipboard.writeText(term.func());
    } else {
      navigator.clipboard.writeText(term.fullText);
    }
  };
</script>
<style scoped lang="scss"></style>
