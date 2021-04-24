<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList :list="tocAddSelect" @select="handleClick" />
  </div>
</template>

<script>
import RightList from "./RightList";
import debounce from "@/utils/debounce";
export default {
  components: {
    RightList,
  },
  props: {
    toc: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      activeAnchor: "",
    };
  },
  computed: {
    tocAddSelect() {
      const getToc = (toc = []) => {
        return toc.map((t) => ({
          ...t,
          isSelect: t.anchor === this.activeAnchor,
          children: getToc(t.children),
        }));
      };
      return getToc(this.toc);
    },
    doms() {
      const doms = [];
      const addToDoms = (toc) => {
        for (const t of toc) {
          doms.push(document.getElementById(t.anchor));
          if (t.children && t.children.length) {
            addToDoms(t.children);
          }
        }
      };
      addToDoms(this.toc);
      return doms;
    },
  },
  created() {
    this.setSelectDebounce = debounce(this.setSelect, 50);
    this.$bus.$on("mainScroll", this.setSelectDebounce);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.setSelectDebounce);
  },
  methods: {
    handleClick(item) {
      location.hash = item.anchor;
    },
    setSelect(scrollDom) {
      if (!scrollDom) {
        return;
      }
      this.activeAnchor = "";
      const range = 200;
      for (const dom of this.doms) {
        if (!dom) {
          continue;
        }
        const top = dom.getBoundingClientRect().top;
        if (top >= -5 && top <= range) {
          this.activeAnchor = dom.id;
          return;
        } else if (top > range) {
          return;
        } else {
          this.activeAnchor = dom.id;
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
.blog-toc-container {
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