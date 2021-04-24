<template>
  <div class="pager-container" v-if="fullPagerNumbers > 1">
    <a @click="handleClick(1)" :class="{ disabled: current === 1 }"
      >|&lt;&lt;</a
    >
    <a @click="handleClick(current-1)" :class="{ disabled: current === 1 }"
      >&lt;&lt;</a
    >
    <a
      @click="handleClick(n)"
      v-for="(n, i) in numbers"
      :key="i"
      :class="{ active: n === current }"
      >{{ n }}</a
    >

    <a
      @click="handleClick(current+1)"
      :class="{ disabled: current === fullPagerNumbers }"
      >&gt;&gt;</a
    >
    <a
      @click="handleClick(fullPagerNumbers)"
      :class="{ disabled: current === fullPagerNumbers }"
      >&gt;&gt;|</a
    >
  </div>
</template>

<script>
export default {
  props: {
    //当前页码
    current: {
      type: Number,
      default: 1,
    },
    //总数据量
    total: {
      type: Number,
      default: 0,
    },
    //页容量
    limit: {
      type: Number,
      default: 10,
    },
    //可见页码数
    visableNumber: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    fullPagerNumbers() {
      return Math.ceil(this.total / this.limit);
    },
    maxPageNumber() {
      let max = this.minPageNumber + (this.visableNumber - 1);
      if (max > this.fullPagerNumbers) {
        max = this.fullPagerNumbers;
      }
      return max;
    },
    minPageNumber() {
      let min = this.current - Math.floor(this.visableNumber / 2);
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    numbers() {
      let nums = [];
      for (let i = this.minPageNumber; i <= this.maxPageNumber; i++) {
        nums.push(i);
      }
      return nums;
    },
  },
  methods: {
      handleClick(newPage) {
        if (newPage < 1) {
        newPage = 1;
      }
      if (newPage > this.fullPagerNumbers) {
        newPage = this.fullPagerNumbers;
      }
      if (newPage === this.current) {
        return;
      }
        this.$emit("pageChange",newPage);
      },
    },
};
</script>
<style lang="less" scoped>
@import "~@/styles/var.less";
.pager-container {
  display: flex;
  justify-content: center;
  margin: 10px 0;
  a {
    color: @primary;
    margin: 0 5px;
    cursor: pointer;
    &.disabled {
      color: @lightWords;
      cursor: not-allowed;
    }
    &.active {
      color: @words;
      cursor: text;
    }
  }
}
</style>