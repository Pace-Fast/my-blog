<template>
  <div class="text-container">
    <Menu />
  </div>
</template>

<script>
import Menu from "./index";
import "@/styles/global.less"
export default {
  components: {
    Menu,
  },
};
</script>

<style lang="less" scoped>
  .text-container{
    width: 400px;
    height: 500px;
    border: 2px solid red;
    background-color: black;
    margin: 0 auto;
  }
</style>