<template>
  <div class="blog-category-container" v-loading="isLoading">
    <h2>文章分类</h2>
    <RightList :list="list" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "./RightList";
import fetchData from "@/mixins/fetchData.js";
import { getBlogTypes } from "@/api/blog.js";
export default {
  mixins: [fetchData([])],
  components: {
    RightList,
  },
  computed: {
    categoryId() {
      return +this.$route.params.categoryid || -1;
    }, 
    limit() {
      return +this.$route.query.limit || 10;
    },
    list(){
      
      let totalArticleCount = 0
      for(let i = 0;i<this.data.length;i++){
        totalArticleCount+=this.data[i].articleCount
      }
      const result = [
        { name: "全部", id: -1, articleCount: totalArticleCount },
        ...this.data,
      ];
      return result.map((item) => ({
        ...item,
        isSelect: item.id === this.categoryId,
        aside:`${item.articleCount}篇`
      }));
    }
  },
  methods: {
    async fetchData() {
      return await getBlogTypes();
    },
    handleSelect(item){
      const query = {
        page: 1,
        limit: this.limit,
      };
      if (item.id === -1) {
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            categoryid: item.id,
          },
        }).catch(()=>{});
      }
    }
  },
};
</script>

<style lang="less" scoped>
.blog-category-container {
  width: 200px;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  overflow-y: auto;
  height: 100%;
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>