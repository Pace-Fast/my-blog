<template>
  <div id="app">
    <Pager :total="total"  :current="current" @pageChange="handlePageChange($event)" />
  </div>
</template>
<script>
import Pager from"./index"
export default {
  components:{
    Pager, 
  },
  data(){
    return{
      current:1,
      total:500
    }
  },
  methods:{
    handlePageChange(newPage){
      this.current = newPage;
      console.log("页码改变了");
    }
  }
};
</script>
<style  scoped>

</style>



