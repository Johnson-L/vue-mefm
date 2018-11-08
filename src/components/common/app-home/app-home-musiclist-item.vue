<template>
    <router-link class="app-home-musiclist-item" v-bind:to="'/albums/' + info.id">
        <div class="item-cover" v-bind:style="imgurl">
            <div class="sound-num">
                <span class="play-times">
                {{ info.music_count }}
                </span>
            </div>
            
        </div>
        <div class="item-text">
            {{ info.title }}
        </div>
    </router-link>
</template>


<style lang="scss">
.app-home-musiclist-item {
  width: calc((100vw - 0.746667rem) / 2 - 0.266667rem);

  margin-bottom: 0.266667rem;
  .item-cover {
    position: relative;
    width: 100%;
    height: calc((100vw - 0.746667rem) / 2 - 0.266667rem);
    border-radius: 0.106667rem;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    .sound-num {
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      height: 0.96rem;
      line-height: 0.64rem;

      background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.26));

      border-bottom-right-radius: 0.106667rem;
      .play-times {
        position: absolute;
        right: 0.133333rem;
        bottom: 0;
        text-shadow: 0.5px 0 1px #000;
        padding-left: 0.373333rem;
        font-size: 0.32rem;
        color: #fff;
        &::before {
          background-size: 1.493333rem 1.466667rem;
          background-position: 0 -1.173333rem;
         
          content: "";
          display: block;
          position: absolute;
          margin: 0.106667rem 0 0.08rem;
           margin-top: 0.213333rem;
          left: 0;
          height: 0.293333rem;
          width: 0.346667rem;
          background-image: url(//static.missevan.com/assets/m/images/build/sprite-icons-thumbnails@2x.f1c29abf.png);
        }
      }
    }
  }
  .item-text {
    margin: 0;
    white-space: normal;

    height: 1.066667rem;
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
    line-height: 0.533333rem;
    color: #616161;
    font-size: 0.346667rem;
    margin-top: 0.266667rem;
  }
}
</style>

<script>
export default {
  props: {
    info: Object
  },
  computed: {
    imgurl() {
      return `background-image: url(${this.info.front_cover})`;
    }
  }
};
</script>
