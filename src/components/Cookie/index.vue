<template>
  <div class="cookie" :style="{ backgroundColor: color }">饼干</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
interface Props {
  cakeIndex: Number; // 第几个列表
  cakeItem: Number; // 当前列表的第几个
  color: String;
}
const props = defineProps<Props>();
// console.log(props.cakeIndex, props.cakeItem, "item");
</script>
<style scoped lang="scss">
.cookie {
  width: 100%;
  text-align: center;
  border: 1px solid #fff;
  padding: 4px;
  border-radius: 4px;
  color: #fff;
  font-weight: bold;
}
</style>
