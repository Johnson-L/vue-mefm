<template>
    <div class="app-home-musiclist">
        
          <app-home-musiclist-nav v-if="navData" v-bind:tid="parseInt(id)" v-bind:show.sync = "cateShow" v-bind:navData = "navData"></app-home-musiclist-nav>
       
        <div class="musiclist-content">
          
         
          <app-home-musiclist-head v-bind:title="title" v-bind:show.sync = "cateShow"></app-home-musiclist-head>
          <app-home-musiclist-list v-if="listData" v-bind:list-data="listData">

          </app-home-musiclist-list>
          <div v-if="loadingmore" class="btn loading-more">
          
              更多
           
          </div>

          <div v-if="nomore" class="no-more">
            没有更多了
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
      listData: null,
      cateShow: false,
      navData: null,
      tid: 0,
      pagination: {
        p: 1,
        pagesize: 20
      },
      title: "全部音单",
      loadingmore : false,
      nomore : false
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
      for (var i in this.navData) {
        this.navData[i].forEach((item, index) => {
          if (item[0] == this.id) {
            this.title = item[1];
            return;
          }
        });
      }
    });
    this.navChange(this.id);
  },
  watch: {
    id: {
      handler: function() {
        for (var i in this.navData) {
          this.navData[i].forEach((item, index) => {
            if (item[0] == this.id) {
              this.title = item[1];
              return;
            }
          });
        }
        this.pagination.p = 1;
        this.navChange(this.id);
      }
    }
  },
  methods: {
    navChange(tid) {
      //设置列表请求对象数据
      let ajaxObj = {
        order: 0
      };

      if (tid) {
        ajaxObj.tid = parseInt(this.id);
      }
      this.axios({
        type: "get",
        url: "/fm/explore/tagalbum",
        params: ajaxObj
      }).then(result => {
        // console.log(result);
        console.log(result);
        if (result.data.success) {
          this.listData = result.data.albums;
        } else {
          alert("数据不存在");
        }

        //   this.cateList = result.data.info;
      });
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




