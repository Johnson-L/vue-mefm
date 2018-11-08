<template>

    <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
    <div v-if="show" class="musiclist-nav animated" >
        <div class="nav-head">
            <div class="nav-close-btn" v-on:click="$emit('update:show', false)">取消</div>
           类型选择
        </div>
        <div class="nav-content">
            <div class="nav-row">
                <span class="nav-item all active">全部音单</span>
            </div>
            
             <div v-for="(items,key) in navData" v-bind:key="key" class="nav-row type">
                 
                     <div class="nav-type">
                         {{key}}
                    </div>
                    <span class="nav-item" v-for="item in items" v-bind:key="item[0]" v-on:click="navChange(item)" >{{ item[1] }}</span>
                    
                
             </div>
             
             
        </div>
    </div>
    </transition>
</template>


<script>
export default {
  props: {
    show: Boolean,
    tid: Number,
    navData : Object,
    title: String
  },
  created () {
      console.log('tid',this.tid);
      console.log('navData',this.navData)
  },
  methods : {
     navChange (item) {
        console.log(item)
        this.$emit('update:tid', item[0]);
        this.$emit('update:show', false)
        this.$emit('update:title', item[1])

     } 
  }
};
</script>

<style lang="scss">
.musiclist-nav {
  &.animate {
    animation-duration: 0.5ss;
  }
  position: absolute;
  width: 100%;
  background-color:#f5f5f5;
  height: calc(100% + 1.333333rem);
  left: 0;
  top: -1.333333rem;

  z-index: 2;

  // background-color: rgba(0,0,0,.6);
  .nav-head {
    position: relative;

    height: 1.066667rem;
    border-bottom: 1px solid #eee;
    text-align: center;
    font-size: 0.426667rem;
    line-height: 1.066667rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background-color: #fff;
    color: #262626;

    .nav-close-btn {
      display: block;
      position: absolute;
      left: 0.266667rem;
      color: #9e9e9e;
    }
  }
  .nav-content {
    .nav-row {
      display: block;
      position: relative;
      margin: 0 0 0.266667rem;
      background-color: #fff;
      color: #3d3d3d;
      font-size: 0.373333rem;
      overflow: hidden;
      &.type {
        padding-left: 2.666667rem;
        box-sizing: border-box;
        &::after {
          content: "";
          border-bottom: 1px solid #fff;
          display: block;
          position: absolute;
          bottom: 0;
          left: 2.693333rem;

          width: calc((100% - 2.666667rem) / 2 - 2px);
        }
        .nav-type {
          display: block;
          position: absolute;
          height: 100%;
          width: 2.666667rem;
          left: 0;
          color: #757575;
          font-size: 0.426667rem;
          text-align: center;
        }
        .nav-item {
          float: left;
          width: 50%;
          border-top: 0;
        }
      }
      .nav-item {
        display: block;
        position: relative;
        height: 1.226667rem;
        line-height: 1.226667rem;
        text-align: center;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        border: 1px solid #e1e1e1;
      }
      .nav-item.all {
        margin: 0.16rem auto;

        width: calc(100% - 0.533333rem);
      }
      .nav-item.all.active {
        border-color: #3d3d3d;
      }
      .nav-item.active {
        font-weight: 700;
      }
    }
  }
}
</style>
