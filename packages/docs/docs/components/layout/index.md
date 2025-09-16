# Layout 布局

<script setup>
import Basic from './basic.vue';
</script>

栅格布局。

## 基础用法

使用 `Row` 组件来创建行，`Col` 组件来创建列。

<Basic/>

<details>
<summary>查看代码</summary>

```vue
<template>
  <div class="example">
    <g-row :gap="10">
      <g-col v-for="(item, index) in items" :key="index" :span="item">
        <div class="g-box">
          {{ item }}
        </div>
      </g-col>
    </g-row>
  </div>
</template>

<script lang="ts" setup>
const items = [12, 6, 6, 4, 4, 4, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2];
</script>

<style lang="scss">
.example {
  .g-box {
    padding: 12px;
    border: 1px solid #cccccc;
    border-radius: 4px;
  }
}
</style>
```
</details>