<template>
    <div class="app-home-musiclist">
          <app-loading v-if="!firstLoading"></app-loading>
          <div v-else>
            <app-home-musiclist-nav v-if="navData" v-bind:tid="parseInt(id)" v-bind:show.sync = "cateShow" v-bind:navData = "navData"></app-home-musiclist-nav>
       
            <div class="musiclist-content">
              
            
              <app-home-musiclist-head v-bind:title="title" v-bind:show.sync = "cateShow"></app-home-musiclist-head>
              <app-home-musiclist-list v-bind:tid="parseInt(id)">
                
              </app-home-musiclist-list>
              
            </div>
            
          </div>
          
        
    </div>

</template>

<script>

import AppHomeMusiclistNav from "@c/common/app-home/app-home-musiclist-nav";
import AppHomeMusiclistHead from "@c/common/app-home/app-home-musiclist-head";
import AppHomeMusiclistList from "@c/common/app-home/app-home-musiclist-list";

export default {
  props: {
    id: {
      default: 0
    }
  },

  data() {
    return {
      cateShow: false,
      navData: null,
      title: "全部音单",
      firstLoading: false
    };
  },

  components: {
    AppHomeMusiclistNav,
    AppHomeMusiclistHead,
    AppHomeMusiclistList
  },
  created() {
    //请求类别数据
    this.axios({
      type: "get",
      url: "/fm/malbum/recommand"
    }).then(result => {
      this.navData = result.data.info;
      this.firstLoading = true;
      for (var i in this.navData) {
        this.navData[i].forEach((item, index) => {
          if (item[0] == this.id) {
            this.title = item[1];
            return;
          }
        });
      }
    });
  },
  watch: {
    id: {
      handler() {
        for (var i in this.navData) {
          this.navData[i].forEach((item, index) => {
            if (item[0] == this.id) {
              this.title = item[1];
              return;
            }
          });
        }
      }
    }
  }
};
</script>

<style lang="scss">
.app-home-musiclist {
  // height: 100vh;
  height: calc(100vh - 4.266667rem);
  overflow: hidden;
  position: relative;

  box-sizing: border-box;

  .musiclist-content {
    overflow: hidden;
    padding: 0.266667rem 0;
    box-sizing: border-box;
    .loading-more {
      display: block;
      width: 80%;
      height: 0.8rem;
      margin: 0.266667rem auto;
      background-color: #e0e0e0;

      border: none;
      font-size: 0.373333rem;
      line-height: 0.8rem;
    }
  }
}
</style>




