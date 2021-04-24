<template>
  <div
    class="home-container"
    ref="container"
    @wheel="handleWheel"
    v-loading="loading"
  >
    <ul
      class="carousel-container"
      :style="{ marginTop }"
      @transitionend="handleTransitionend"
    >
      <li v-for="item in data" :key="item.id">
        <Carouselitem :carousel="item" />
      </li>
    </ul>
    <div
      v-show="index >= 1"
      @click="chageIndex(index - 1)"
      class="icon icon-up"
    >
      <Icon type="arrowUp" />
    </div>
    <div
      v-show="index < this.data.length - 1"
      @click="chageIndex(index + 1)"
      class="icon icon-down"
    >
      <Icon type="arrowDown" />
    </div>
    <ul class="indicator">
      <li
        v-for="(item, i) in data"
        :key="item.id"
        :class="{ active: i === index }"
        @click="chageIndex(i)"
      ></li>
    </ul>
  </div>
</template>

<script>
import Carouselitem from "./Carouselitem";
import Icon from "@/components/Icon";
import { mapState } from "vuex";
export default {
  components: {
    Carouselitem,
    Icon,
  },
  data() {
    return {
      index: 0,
      containerHeight: 0,
      switching: false, //正在切换中
    };
  },
 created() {
    this.$store.dispatch("banner/fetchBanner");
  },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    chageIndex(i) {
      this.index = i;
    },
    handleWheel(e) {
      if (this.switching) {
        return;
      }
      if (e.deltaY < -5 && this.index > 0) {
        this.switching = true;
        this.index--;
      } else if (e.deltaY > 5 && this.index < this.data.length - 1) {
        this.switching = true;
        this.index++;
      }
    },
    handleTransitionend() {
      this.switching = false;
    },
    handleResize() {
      this.containerHeight = this.$refs.container.clientHeight;
    },
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight + "px";
    },
    ...mapState("banner", ["loading", "data"]),
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/mixin.less";
.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .carousel-container {
    width: 100%;
    height: 100%;
    transition: 500ms;
    li {
      width: 100%;
      height: 100%;
    }
  }
  .icon {
    position: absolute;
    left: 50%;
    top: 50%;
    color: @gray;
    font-size: 30px;
    cursor: pointer;
    transform: translate(-50%, -50%);
    &.icon-up {
      top: 25px;
      animation: jump-up 2s infinite;
    }
    &.icon-down {
      bottom: 25px;
      top: auto;
      animation: jump-down 2s infinite;
    }
    @keyframes jump-up {
      0% {
        transform: translate(-50%, 5px);
      }
      50% {
        transform: translate(-50%, -5px);
      }
      100% {
        transform: translate(-50%, 5px);
      }
    }
    @keyframes jump-down {
      0% {
        transform: translate(-50%, -5px);
      }
      50% {
        transform: translate(-50%, 5px);
      }
      100% {
        transform: translate(-50%, -5px);
      }
    }
  }
  .indicator {
    position: absolute;
    left: auto;
    right: 25px;
    top: 50%;
    transform: translateY(-50%);
    li {
      cursor: pointer;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      margin: 4px 0;
      background-color: @words;
      border: 1px solid #fff;
      &.active {
        background-color: #fff;
      }
    }
  }
}
</style>