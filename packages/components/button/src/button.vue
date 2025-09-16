<template>
  <button
    class="g-button"
    :class="classList"
    :disabled="disabled || loading"
    @click="handlerClick"
  >
    <i v-if="props.loading" class="g-icon-loading"></i>
    <i
      v-if="props.icon && !props.loading"
      class="g-icon"
      :class="props.icon"
    ></i>
    <span v-if="$slots.default">
      <slot />
    </span>
  </button>
</template>

<script lang="ts" setup>
import { computed } from "vue";

defineOptions({
  name: "GButton",
});

const props = defineProps({
  type: {
    default: "",
  },
  size: {
    default: "",
  },
  icon: {
    default: "",
  },
  round: Boolean,
  plain: Boolean,
  circle: Boolean,
  disabled: Boolean,
  loading: Boolean,
});
const emits = defineEmits(["click"]);
const classList = computed(() => {
  const { type, size, round, plain, circle, disabled, loading } = props;
  return [
    {
      [`g-button--${type}`]: type,
      [`g-button--${size}`]: size,
      ["is-disabled"]: disabled,
      ["is-loading"]: loading,
      ["is-round"]: round,
      ["is-plain"]: plain,
      ["is-circle"]: circle,
    },
  ];
});
function handlerClick(event: MouseEvent): void {
  emits("click", event);
}
</script>

<style lang="scss">
.g-button {
  padding: 4px 8px;
  border: 1px solid #cccccc;
  border-radius: 4px;
}

.g-button + .g-button {
  margin-left: 8px;
}

.g-button.is-round {
  border-radius: 50px;
}

.g-button.is-circle {
  border-radius: 50%;
  width: 32px;
  height: 32px;
}

.g-button--primary {
  color: var(--g-button-text);
  background-color: var(--g-button-primary);
  border-color: var(--g-button-primary);
}

.g-button--success {
  color: var(--g-button-text);
  background-color: var(--g-button-success);
  border-color: var(--g-button-success);
}

.g-button--warning {
  color: var(--g-button-text);
  background-color: var(--g-button-warning);
  border-color: var(--g-button-warning);
}

.g-button--danger {
  color: var(--g-button-text);
  background-color: var(--g-button-danger);
  border-color: var(--g-button-danger);
}

.g-button--info {
  color: var(--g-button-text);
  background-color: var(--g-button-info);
  border-color: var(--g-button-info);
}

.g-button.is-plain {
  background-color: transparent;
  &.g-button--primary {
    color: var(--g-button-primary);
  }

  &.g-button--success {
    color: var(--g-button-success);
  }

  &.g-button--warning {
    color: var(--g-button-warning);
  }

  &.g-button--danger {
    color: var(--g-button-danger);
  }

  &.g-button--info {
    color: var(--g-button-info);
  }
}
</style>
