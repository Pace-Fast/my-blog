<template>
  <div class="text-container">
    <Layout>
      <template #left>
        <div class="left">左边栏区域，宽度适应内容，溢出隐藏</div>
      </template>
      <div class="main">主区域，宽度占满剩余空间，溢出隐藏</div>
      <template #right>
        <div class="right">右边栏区域，宽度适应内容，溢出隐藏</div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./index";
export default {
  components: {
    Layout,
  },
};
</script>

<style scoped>
.layout-container {
  width: 80%;
  height: 500px;
  background-color: red;
  margin: 0 auto;
  white-space: nowrap;
}
.left{
  width: 200px;
  height: 100%;
  background-color: royalblue;
}
.main{
  height: 100%;
  width: 100%;
}
.right{
  width: 200px;
  height: 100%;
  background-color: saddlebrown;
}

</style>