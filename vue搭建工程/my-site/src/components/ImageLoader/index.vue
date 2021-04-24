<template>
  <div class="imageLoader-container">
    <img v-if="!everythingDone" :src="placeholder" class="oldPic" />
    <img @load = handleload :src="src" class="newPic" :style="{visibility:originVis,transition:`${duration}ms`}"/>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
  data(){
    return{
      isLoaded:false,
      everythingDone:false
    }
  },
  computed:{
    originVis(){
      return this.isLoaded?"visible":"hidden";
    }
  },
  methods:{
    handleload(){
      console.log("原图加载完成");
      this.isLoaded = true;
      setTimeout(()=>{
        this.everythingDone = true
        this.$emit("load");
      },this.duration)
    }
  }
};
</script>

<style lang="less" scoped>
.imageLoader-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  img{
    position: absolute;
    left: 0%;
    top: 0%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .oldPic{
    filter: blur(2vw);
  }
}
</style>