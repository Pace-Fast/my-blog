<template>
  <div class="text-container">
    <SiteAside />
  </div>
</template>

<script>
import SiteAside from "./index";
import "@/styles/global.less";
export default {
  components: {
    SiteAside,
  },
};
</script>

<style lang="less" scoped>
.text-container {
	width: 250px;
	height: 800px;
	
}
</style>