<template>
  <ul class="menu-container">
    <li v-for="item in items" :key="item.link">
      <RouterLink :exact="item.exact" :to="{name:item.name}" active-class="select" exact-active-class="">
        <div class="icon">
          <Icon :type="item.icon" />
        </div>
        <span>{{ item.title }}</span>
      </RouterLink>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      items: [
        {
          name: "Home",
          title: "首页",
          icon: "home",
          exact: true,
        },
        {
          name: "Blog",
          title: "文章",
          icon: "blog",
          exact: false,
        },
        {
          name: "About",
          title: "关于我",
          icon: "about",
          exact: true,
        },
        {
          name: "Project",
          title: "项目&效果",
          icon: "code",
          exact: true,
        },
        {
          name: "Message",
          title: "留言板",
          icon: "chat",
          exact: true,
        },
      ],
    };
  },
  methods: {
    isSelect(item) {
      let link = item.link.toLowerCase();
      let nowPath = location.pathname.toLowerCase();
      if (item.startwith) {
        return nowPath.startsWith(link);
      } else {
        return nowPath === link;
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/global.less";
.menu-container {
  color: @gray;
  margin: 24px 0;
  list-style: none;
  padding: 0px;
  a {
    padding: 0 50px;
    display: flex;
    align-items: center;
    height: 45px;
    font-size: 14px;
    .icon {
      width: 24px;
    }
    &:hover {
      color: #fff;
    }
    &.select {
      background-color: #2d2d2d;
    }
  }
}
</style>