<template>
  <div class="text-container">
    <div class="item" v-for="n in types" :key="n">
      <Icon :type="n" />
      <label>{{ n }}</label>
    </div>
  </div>
</template>
<script>
import Icon from "./index";
import { types } from "./index";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      types: types,
    };
  },
};
console.log(types);
</script>

<style  scoped>
.text-container {
  display: flex;
  justify-content: center;
  margin: 30px auto;
  width: 580px;
  flex-wrap: wrap;
}
.item {
  margin: 1em;
  text-align: center;
}
.icon-container {
  display: block;
}
</style>



