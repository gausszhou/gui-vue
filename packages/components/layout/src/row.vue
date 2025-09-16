<template>
  <component :is="tag" class="g-row" :style="{ '--g-row-gap': gap + 'px' }">
    <slot></slot
  ></component>
</template>
<script lang="ts" setup>
defineOptions({
  name: "GRow",
});
defineProps({
  tag: {
    default: "div",
  },
  gap: {
    type: Number,
    default: 12,
  },
});
</script>

<style>
.g-row {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: var(--g-row-gap);
}
</style>
