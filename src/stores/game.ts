import { defineStore } from "pinia";

export const useGameStore = defineStore("game", {
  state: () => {
    return {
      activedCake: null, //当前选中的cake
      expectCake: null, // 目标cake
    };
  },
  actions: {
    // caozuo
  },
});
