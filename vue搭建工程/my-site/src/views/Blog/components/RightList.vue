<template>
  <ul class="rightLsit-container">
    <li v-for="(item, i) in list" :key="i">
      <span :class="{ active: item.isSelect }" @click="handleClick(item)">
        {{ item.name }}
      </span>
      <span
        class="aside"
        v-if="item.aside"
        :class="{ active: item.isSelect }"
        @click="handleClick(item)"
        >{{ item.aside }}</span
      >
      <RightList :list="item.children" @select="handleClick" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "RightList",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleClick(item) {
      if (!item.isSelect) {
        this.$emit("select", item);
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.rightLsit-container {
  list-style: none;
  padding: 0;
  .rightLsit-container {
    margin-left: 1em;
  }
  li {
    min-height: 40px;
    line-height: 40px;
    span {
      cursor: pointer;
      font-size: .7em;
      color: @gray;
    }
    .active {
      color: @warn;
      font-weight: bold;
      cursor: text;
    }
  }
}
</style>