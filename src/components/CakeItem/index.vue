<template>
  <div class="cake_item_wrapper">
    <div v-for="(item, index) in cakeNumber" class="cake_item">
      <CookieComp
        :cake-index="cakeIndex"
        :cake-item="item"
        :color="colorArr[index]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  getRandomInt,
  generateColorFromNumber,
  randomFigure,
} from "@/utils/functions.ts";
import CookieComp from "@/components/Cookie/index.vue";
import { computed, ref } from "vue";
import { themeColorArr } from "@/const/index.ts";
interface Props {
  cakeIndex: Number;
}
const props = defineProps<Props>();

/**
 * 随机的两个颜色
 */
const cakeColorArr = [
  themeColorArr[getRandomInt(0, 3)].color,
  themeColorArr[getRandomInt(4, 7)].color,
];
/**
 * 当前list的总个数
 */
const cakeNumber = ref(getRandomInt(1, 8));
console.log(cakeNumber.value, "cakeNumber");
/**
 * 随机分成2份的数组
 */
const randomArr = randomFigure(cakeNumber.value, 2);
// console.log(randomArr, "randomArr");
/**
 * 获取当前cakeList相同数量的颜色数组
 */
const colorArr = computed(() => {
  let result: string[] = [];
  [...Array(cakeNumber.value)].map((_, index) => {
    if (randomArr[0] === 0) {
      result.push(cakeColorArr[0]);
    } else if (index < randomArr[0]) {
      result.push(cakeColorArr[1]);
    } else {
      result.push(cakeColorArr[0]);
    }
  });
  return result;
});
</script>
<style scoped lang="scss">
.cake_item_wrapper {
  padding: 12px;
  .cake_item {
  }
}
</style>
