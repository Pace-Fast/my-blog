<template>
  <div class="text-container">
    <Empty />
  </div>
</template>

<script>
import Empty from "./index";
export default {
  components: {
    Empty,
  },
};
</script>

<style>
.text-container{
  width: 500px ;
  height: 500px;
  border: 1px solid;
  margin: 0 auto;
  position: relative;
}
</style>