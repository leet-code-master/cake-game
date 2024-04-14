<template>
  <div class="cake_grid_wrapper">
    <a-row v-for="item in gridData" :key="item" :gutter="16">
      <a-col :span="6" v-for="itm in item" :key="itm">
        <div class="cake_grid_item">
          <CakeItem :cake-index="itm" />
        </div>
      </a-col>
    </a-row>
    <div class="operation">
      <div class="dispatch btn">
        <div>派发</div>
      </div>
      <div class="synthesize btn">
        <div>合成</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import CakeItem from "@/components/CakeItem/index.vue";
import { useCommonStore } from "@/stores/common.ts";
const commonStore = useCommonStore();
const gridData = computed(() => commonStore.gridData);
</script>
<style scoped lang="scss">
.cake_grid_wrapper {
  width: 100%;
  user-select: none;
  cursor: pointer;
  .cake_grid_item {
    background-color: aliceblue;
    height: 320px;
    margin-bottom: 16px;
    border-radius: 12px;
  }
  .operation {
    display: flex;
    justify-content: space-around;
    width: 100%;
    .btn {
      width: 45%;
      text-align: center;
      line-height: 32px;
      background-color: orange;
      padding: 12px;
      margin-top: 12px;
      color: white;
      font-size: 20px;
      font-weight: bold;
    }
    .dispatch {
      background-color: aqua;
    }
  }
}
</style>
