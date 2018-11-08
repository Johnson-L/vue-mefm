<template>
    <div class="app-nav">
        <!-- <transition enter-active-class="fadeIn" leave-active-class="fadeOut">
            <div class="mask animated" v-if="show" v-on:click="$emit('update:show', false)">

        </div>
        </transition> -->
        <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
        <div class="nav-content animated" v-if="show">
            <div class="item user">
                <div class="user-headimg" style="background-image: url(http://static.missevan.com/assets/images/home/default-icon.jpg);">
                    
                </div>
                <div class="user-details">
                    <span>点击登录</span>
                </div>

            </div>
            <div class="nav-list" >
                <router-link v-for ="item in navs" v-bind:key="item.id" class="item nav-item"  @click.native = "$emit('update:show',false)" tag = "div" v-bind:to="item.path">
                    {{ item.title }}
                </router-link>
                
            </div>
        </div>
        </transition>
    </div>
</template>

<script>
export default {
  data() {
    return {
      navs: [
        { id: 1, title: "M-主站", path: "/" },
        { id: 2, title: "M-直播", path: "/liveshow" },
        { id: 3, title: "M-钱包", path: "/wallet" }
      ]
    };
  },
  props : {
      show : Boolean
  }
};
</script>

<style lang="scss">
.app-nav {
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  width: 100%;
  //   height: 100vh;
    .animated{
        animation-duration: 0.5s;
    }
  .mask {
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100vh;
  }
  .nav-content {
    // width: 8.533333rem;
    width: 100%;
    background-color: #000;
    height: 100vh;
    box-sizing: border-box;
    padding-top: 1.066667rem;
    .item {
      display: block;
      position: relative;
      height: 1.013333rem;
      width: 100%;
      background-color: #3d3d3d;
      margin-bottom: 1px;
      color: #fff;
      &::after {
        -moz-background-size: 365px 339px;
        -o-background-size: 365px 339px;
        background-size: 365px 339px;
        background-size: 9.733333rem 9.04rem;
        background-position: -353px -235px;
        background-position: -9.413333rem -6.266667rem;
        position: absolute;
        content: "";
        display: block;
        position: absolute;
        right: 0.266667rem;

        height: 0.373333rem;
        width: 0.213333rem;
        background-image: url(https://static.missevan.com/assets/m/images/build/sprite-icons@2x.02953e71.png);
      }
    }
    .item.user {
      height: 2.933333rem;
      padding: 0.533333rem 0.8rem;
      margin-bottom: 0.533333rem;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      .user-headimg {
        width: 1.866667rem;
        height: 1.866667rem;
        position: relative;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        background-position: 50%;
        background-repeat: no-repeat;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
      }
      .user-details {
        width: 3.333333rem;
        height: 1.333333rem;
        padding-left: 0.533333rem;
        display: flex;
        align-items: center;
      }
    }

    .nav-list {
      .nav-item {
        padding-left: 0.96rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        &::before {
          content: "";
          display: block;
          position: absolute;
          left: 0.266667rem;
          height: 0.426667rem;
          width: 0.426667rem;

          background: url(https://static.missevan.com/assets/m/images/build/sprite-svg.5a1b2953.svg)
            no-repeat -0.053333rem -1.12rem/1.946667rem 1.6rem;
        }
      }
    }
  }
}
</style>
