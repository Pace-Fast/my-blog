<template>
  <div class="empty-container">
    <Icon type="empty" />
    <p class="content">{{ text }}</p>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
  props: {
    text: {
      type: String,
      default: "无数据",
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/mixin.less";
.empty-container {
  .self-center();
  text-align: center;
  color: @gray;
}
.icon-container {
  font-size: 70px;
}
</style>