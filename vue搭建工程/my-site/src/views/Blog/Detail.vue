<template>
  <Layout>
    <div class="main-container" v-loading="isLoading" ref="mainContainer">
      <BlogDetail :blog="data" v-if="!isLoading" />
      <BlogComment v-if="!isLoading" />
    </div>
    <template #right>
      <div class="right-container" v-loading="isLoading">
        <BlogToc :toc="data.toc" v-if="data.toc" />
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import BlogDetail from "./components/BlogDetail";
import BlogComment from "./components/BlogComment";
import BlogToc from "./components/BlogToc";
import fetchData from "@/mixins/fetchData";
import { getBlog } from "@/api/blog";
import mainScroll from "@/mixins/mainScroll"
export default {
  mixins: [fetchData({}),mainScroll("mainContainer")],
  components: {
    Layout,
    BlogDetail,
    BlogToc,
    BlogComment,
  },
  methods: {
    async fetchData() {
      let resp = await getBlog(this.$route.params.id);
      // resp = null;
      if (!resp) {
        // 文章不存在
        this.$router.push("/404");
        return;
      }
      return resp;
    },
  },
  updated() {
    const hash = location.hash;
    location.hash = "";
    setTimeout(() => {
      location.hash = hash;
    }, 50);
  },
};
</script>

<style lang="less" scoped>
.main-container {
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  scroll-behavior: smooth;
}
.right-container {
  width: 300px;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  position: relative;
  padding: 20px;
}
</style>