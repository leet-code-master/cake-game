import { defineStore } from "pinia";

export const useCommonStore = defineStore("common", {
  state: () => {
    return {
      gridData: [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
      ],
    };
  },
  actions: {
    // caozuo
  },
});
