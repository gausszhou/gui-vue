<template>
  <component
    :is="tag"
    class="g-col"
    :style="{
      '--g-col-xl': xl ?? span,
      '--g-col-lg': lg ?? span,
      '--g-col-md': md ?? span,
      '--g-col-sm': sm ?? span,
      '--g-col-xs': xs ?? span,
    }"
  >
    <slot></slot>
  </component>
</template>
<script lang="ts" setup>
defineOptions({
  name: "GCol",
});

defineProps({
  tag: {
    type: String,
    default: "div",
  },
  xl: {
    type: [Number, String],
    default: null,
  },
  lg: {
    type: [Number, String],
    default: null,
  },
  md: {
    type: [Number, String],
    default: null,
  },
  sm: {
    type: [Number, String],
    default: null,
  },
  xs: {
    type: [Number, String],
    default: null,
  },
  span: {
    type: Number,
    default: 12,
  },
});
</script>

<style>
@media screen and (min-width: 2560px) {
  .g-col {
    grid-column: span var(--g-col-xl);
  }
}

@media screen and (min-width: 1920px) and (max-width: 2559px) {
  .g-col {
    grid-column: span var(--g-col-lg);
  }
}

@media screen and (min-width: 1600px) and (max-width: 1919px) {
  .g-col {
    grid-column: span var(--g-col-md);
  }
}

@media screen and (min-width: 1280px) and (max-width: 1599px) {
  .g-col {
    grid-column: span var(--g-col-sm);
  }
}

@media screen and (min-width: 768px) and (max-width: 1279px) {
  .g-col {
    grid-column: span var(--g-col-xs);
  }
}

@media screen and (max-width: 767px) {
  .g-col {
    grid-column: span var(--g-col-xs);
  }
}
</style>
