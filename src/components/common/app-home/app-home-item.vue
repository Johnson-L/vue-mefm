<template>
    <router-link tag="div" v-bind:to="path" class="app-home-item">
        <div class="item-cover"  v-bind:style="bgStr">

        </div>
        <div class="item-text">
            {{itemInfo.soundstr}}
        </div>
        <div class="item-info">
           
            <span class="item play-times">{{itemInfo.view_count}}</span>
            <span class="item comments">{{itemInfo.comment_count}}</span>
            
        </div>
    </router-link >
</template>

<script>
export default {
  props: ["itemInfo"],

  computed: {
    bgStr() {
      return `background-image: url("https://static.missevan.com/coversmini/${
        this.itemInfo.cover_image
      }");`;
    },
    path() {
      return `/detail/${this.itemInfo.id}`;
    }
  }
};
</script>
<style lang="scss">
.app-home-item {
  width: 2.826667rem;
  height: 4.346667rem;
  margin: 0.133333rem 0;

  .item-cover {
    width: 2.826667rem;
    height: 2.826667rem;
    display: block;
    overflow: hidden;
    position: relative;
    border-radius: 0.106667rem;
    background-repeat: no-repeat;
    background-position: 50%;
    -moz-background-size: 100%;
    -o-background-size: 100%;
    background-size: 100%;
    &::after {
      background-size: 1.493333rem 1.466667rem;
      background-position: 0 0;
      content: "";
      display: block;
      position: absolute;
      right: 0.213333rem;
      bottom: 0.213333rem;
      height: 0.64rem;
      width: 0.64rem;
      background-image: url(https://static.missevan.com/assets/m/images/build/sprite-icons-thumbnails@2x.f1c29abf.png);
    }
  }
  .item-text {
    width: 100%;
    height: 0.96rem;
    word-break: break-all;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -moz-box;
    -moz-box-orient: vertical;
    -moz-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    box-orient: vertical;
    line-clamp: 2;
    line-height: 0.48rem;
    margin: 0.106667rem 0;
    color: #616161;
    font-size: 0.346667rem;
  }
  .item-info {
    display: flex;
    justify-content: space-between;
    font-size: 0.293333rem;
    color: #bdbdbd;
    span {
      position: relative;
      padding-left: .373333rem;
      line-height: .293333rem;
      &::before {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        height: 0.266667rem;
        width: 0.32rem;
        background-size: 1.493333rem 1.466667rem;
        background-image: url(https://static.missevan.com/assets/m/images/build/sprite-icons-thumbnails@2x.f1c29abf.png);
        
      }

      &.play-times{
          &::before{
              background-position: -1.173333rem -0.373333rem;
          }
      }
      &.comments{
          &::before{
              background-position: -1.173333rem -0.693333rem;
          }
      }
    }
  }
}
</style>