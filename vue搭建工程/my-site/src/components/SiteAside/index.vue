<template>
  <div class="siteaside-container" v-if="data">
    <Avater
      :url="data.avatar"
    />
	<h1 class="title">{{data.siteTitle}}</h1>
    <Menu />
    <Contact />
	<p class="footer">
		{{data.icp}}
	</p>
  </div>
</template>

<script>
import Avater from "@/components/Avater";
import Contact from "./Contact";
import Menu from "./Menu";
import { mapState } from "vuex";
export default {
  components: {
    Avater,
    Contact,
    Menu,
  },
  computed: mapState("setting", ["data"]),
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/global.less";
.siteaside-container {
	width: 100%;
	height: 100%;
	background-color: @dark;
	padding: 20px 0;
	box-sizing: border-box;
	overflow-x: hidden;
	overflow-y: scroll;
}
::-webkit-scrollbar {
	width: 0px;
}
.avater-container{
	margin: 0 auto;
}
.footer{
	text-align: center;
	font-size: 12px;
}
.title{
	text-align: center;
	color: #fff;
}
</style>