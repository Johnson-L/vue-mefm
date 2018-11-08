<template>
    <div class="app-home-head">
        <div class="head-title">
            <i></i>
            <h3>{{ headInfo.title }}</h3>
        </div>
        <div class="head-nav">
            <router-link tag="div" class="head-nav-link" :to="target">更多</router-link>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    headInfo: Object
  },
  computed: {
    target() {
      return this.headInfo.target ? '/' + this.headInfo.target : `/list/${this.headInfo.id}`;
    }
  },
  created() {
    // console.log(this.headInfo);
  }
};
</script>
<style lang="scss">
.app-home-head {
  height: 1.066667rem;
  display: flex;
  position: relative;
  justify-content: space-between;
  padding: 0 0.373333rem;
  box-sizing: border-box;
  align-items: stretch;
  .head-title {
    display: flex;
    align-items: center;
    font-size: 0.426667rem;
    color: #000;
    i {
      margin-right: 0.133333rem;
      height: 0.533333rem;
      width: 0.533333rem;
      background-size: 2.293333rem 2.293333rem;
      background-image: url(https://static.missevan.com/assets/m/images/build/sprite-icons-catalog@2x.1144a958.png);
      background-position: -0.586667rem 0;
    }
  }
  .head-nav {
    display: flex;
    align-items: stretch;
    .head-nav-link {
      display: flex;
      align-items: center;
      font-size: 0.346667rem;
      color: #9e9e9e;
      &::after {
        background-size: 9.733333rem 9.04rem;
        background-position: -9.253333rem -4.826667rem;
        content: "";
        height: 0.426667rem;
        width: 0.426667rem;

        position: relative;
        // top: .08rem;
        right: -0.08rem;
        background-image: url(https://static.missevan.com/assets/m/images/build/sprite-icons@2x.02953e71.png);
      }
    }
  }
}
</style>