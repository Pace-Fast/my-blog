<template>
  <div class="blog-detail-container">
    <div class="aside">
      <h1>{{ blog.title }}</h1>
      <span>日期：{{ getGoodDate(blog.createDate) }}</span>
      <span>浏览：{{ blog.scanNumber }}</span>
      <a href="#data-form-container">评论：{{ blog.commentNumber }}</a>
      <RouterLink
        :to="{
          name: 'CategoryBlog',
          params: {
            categoryid: blog.category.id,
          },
        }"
        v-if="blog.category"
        >{{ blog.category.name }}</RouterLink
      >
    </div>
    <div v-html="blog.htmlContent" class="markdown-body"></div>
  </div>
</template>

<script>
import getGoodDate from "@/utils/getGoodDate";
import "@/styles/markdown.css";
import "highlight.js/styles/github.css";
export default {
  props: {
    blog: {
      type: Object,
      require: true,
    },
  },
  methods: {
    getGoodDate,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.blog-detail-container {
  a,
  span {
    color: @gray;
    font-size: 12px;
    margin: 0 5px;
  }
}
</style>