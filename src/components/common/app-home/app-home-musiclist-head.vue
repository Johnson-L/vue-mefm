<template>
    <div class="app-home-musiclist-head">
        <div class="head-title">
            {{title}}
        </div>
        <div class="head-nav" v-on:click="$emit('update:show', true)">
            类型
        </div>
    </div>
</template>
<script>
export default {
  props: {
    title: String
  }
};
</script>
<style lang="scss">
.app-home-musiclist-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.373333rem;
  height: 0.64rem;
  margin: 0.266667rem 0;
  .head-title {
    font-size: 0.426667rem;
    padding-left: 0.266667rem;
    position: relative;
    &::before {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      top: 10%;
      height: 80%;
      background-color: #000;
      width: 0.106667rem;
      border-radius: 0.106667rem;
    }
  }
  .head-nav {
    display: block;
    position: relative;

    background-color: #fff;
    border: 1px solid #e0e0e0;

    border-radius: 0.533333rem;
    width: 1.706667rem;
    height: 0.64rem;
    line-height: 0.64rem;
    font-size: 0.346667rem;
    text-align: center;
    color: #757575;
    &::after {
      content: "";
      display: block;
      position: absolute;
      
      top: .186667rem;
      right: .32rem;
      width: .213333rem;
      height: .213333rem;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      border: 1px solid #757575;
      border-bottom: none;
      border-left: none;
      
      transform: rotate(45deg);
    }
  }
}
</style>


