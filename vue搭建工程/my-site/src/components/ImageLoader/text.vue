<template>
  <div class="text-container">
    <ImageLoader
      src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
      placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
      @load="finshLoad()"
    />
  </div>
</template>

<script>
import ImageLoader from "./index";
export default {
  components: {
    ImageLoader,
  },
  methods: {
    finshLoad() {
      console.log("一切都已经完成");
    },
  },
};
</script>
  
<style scoped>
.text-container {
  width: 500px;
  height: 500px;
  border: 2px solid;
  margin: 0 auto;
}
</style>