<template>
    <router-link tag="div" v-bind:to="path" class="app-home-item">
        <div class="cover" v-bind:style="bgStr">
          <div class="follow">
            <span>{{ itemInfo.follow_num }}</span>
          </div>
        </div>
        <div class="title">
          {{ itemInfo.name }}
        </div>
    </router-link >
</template>

<script>
export default {
  props: ["itemInfo"],

  computed: {
    bgStr() {
      return `background-image: url(${this.itemInfo.smallpic});`;
    },
    path() {
      return `/channel/${this.itemInfo.id}`;
    }
  }
};
</script>
<style lang="scss">
.app-home-item {
  width: 4.266667rem;
  height: 4rem;
  position: relative;
  .cover {
    width: 4.266667rem;
    height: 2.826667rem;
  }
  .title {
    margin-top: 0.08rem;
    width: 100%;
    height: 1.066667rem;
    word-break: break-all;
    overflow: hidden;

    line-height: 0.533333rem;
    font-size: 0.346667rem;
    color: #616161;
  }
  .follow {
    position: absolute;
    top: 0;
    right: 0;
    background-image: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.2));
    width: 2.133333rem;
    height: 0.533333rem;
    padding: 0 0.133333rem;
    text-align: right;

    border-top-right-radius: 0.106667rem;
    span {
      float: right;

      position: relative;

      line-height: 0.533333rem;
      padding-left: 0.48rem;
      color: #fff;
      font-size: 0.32rem;
      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.7);
      &::before {
        background-size: 1.493333rem 1.466667rem;
        background-position: -0.48rem -0.693333rem;
        content: "";
        position: absolute;
        top: .106667rem;
        left: 0;
        width: .4rem;
        height: .346667rem;
        background-image: url(//static.missevan.com/assets/m/images/build/sprite-icons-thumbnails@2x.f1c29abf.png);
      }
    }
  }
}
</style>