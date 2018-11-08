<template>
    <div class="app-home-musiclist">
        
          <app-home-musiclist-nav v-if="navData" class="animated" v-bind:show.sync = "cateShow" v-bind:title.sync="title" v-bind:tid.sync="tid" v-bind:navData = "navData"></app-home-musiclist-nav>
       
        <div class="musiclist-content">
          
         
          <app-home-musiclist-head v-bind:title="title" v-bind:show.sync = "cateShow"></app-home-musiclist-head>
          <app-home-musiclist-list v-if="listData" v-bind:list-data="listData">

          </app-home-musiclist-list>
        </div>
        
        
    </div>

</template>

<script>
import AppHomeMusiclistNav from "@c/common/app-home/app-home-musiclist-nav";
import AppHomeMusiclistHead from "@c/common/app-home/app-home-musiclist-head";
import AppHomeMusiclistList from "@c/common/app-home/app-home-musiclist-list";

export default {
  data() {
    return {
      listData: null,
      cateShow: false,
      navData: null,
      tid: 0,
      title: '全部音单'
    };
  },
  components: {
    AppHomeMusiclistNav,

    AppHomeMusiclistHead,
    AppHomeMusiclistList
  },
  beforeCreate() {
    this.axios({
      type: "get",
      url: "/fm/malbum/recommand"
    }).then(result => {
      console.log(result);
      this.navData = result.data.info;
      // console.log(this.navData);
      //   this.cateList = result.data.info;
    });

    this.axios({
      type: "get",
      url: "/fm/explore/tagalbum",
      params: {
        order: 0
      }
    }).then(result => {
      // console.log(result);
      this.listData = result.data.albums;
      //   this.cateList = result.data.info;
    });
  },
  methods: {
    navUpdate(tid) {
      this.axios({
        type: "get",
        url: "/fm/explore/tagalbum",
        params: {
          order: 0,
          tid: tid                                                                                                            
        }
      }).then(result => {
        // console.log(result);
        this.listData = result.data.albums;
        //   this.cateList = result.data.info;
      });
    }
  },
  watch: {
    tid: {
      handler: function(newValue, oldValue) {
        console.log(newValue, oldValue), this.navUpdate(newValue);
      }
    }
  }
};
</script>

<style lang="scss">
.app-home-musiclist {
  position: relative;

  box-sizing: border-box;

  .musiclist-content {
    overflow: hidden;
    margin: 0.266667rem auto;
    box-sizing: border-box;
  }
}
</style>




