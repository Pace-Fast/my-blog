<template>
  <ul class="data-list-container">
    <li v-for="item in list" :key="item.id">
      <Avater
        :url="item.avatar"
        :size="50"
      />
      <div class="data">
        <div class="nickname">{{item.nickname}}</div>
        <div class="content">{{item.content}}</div>
        <div class="time">{{ getGoodDate(item.createDate,true) }}</div>
      </div>
    </li>
  </ul>
</template>

<script>
import Avater from "@/components/Avater";
import getGoodDate from "@/utils/getGoodDate"
export default {
  components: {
    Avater,
  },
  props:{
      list:{
          type:Array,
          default:()=>[]
      }
  },
  methods:{
      getGoodDate,
  }
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.data-list-container {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  display: flex;
  border-bottom: 1px solid lighten(@gray, 20%);
  padding: 15px 0;
}
.avatar-container {
  margin-right: 15px;
}
.nickname {
  color: darken(@success, 10%);
  margin-bottom: 10px;
  margin-left: 10px;
}
.content {
  font-size: 14px;
  margin-left: 10px;
}
.data {
  flex: 1 1 auto;
  position: relative;
}
.time {
  position: absolute;
  right: 0;
  top: 5px;
  font-size: 12px;
  color: @gray;
}
</style>
