<template>
  <RightList :list="list" @select="handleSelect" />
</template>

<script>
import RightList from "./RightList";
export default {
  components: {
    RightList,
  },
  data() {
    return {
      list: [
        { name: "1", isSelect: false },
        {
          name: "2",
          isSelect: true,
          children: [
            { name: "2-1", isSelect: false },
            {
              name: "2-2",
              isSelect: true,
              children: [
                { name: "2-2-1", isSelect: false },
                { name: "2-2-2", isSelect: false },
              ],
            },
          ],
        },
        { name: "3", isSelect: false },
      ],
    };
  },
  methods:{
      handleSelect(item){
          console.log(item);
      }
  }
};
</script>

<style>
</style>