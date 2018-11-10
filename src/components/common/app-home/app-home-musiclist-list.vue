<template>
    <div ref="root" class="app-home-musiclist-list">
        <div class="wrapper">
       <app-home-musiclist-item v-for="item in listData" v-bind:info="item" v-bind:key="item.id"></app-home-musiclist-item>
            
        </div>
    </div>    
</template>

<script>
import AppHomeMusiclistItem from "@c/common/app-home/app-home-musiclist-item";
import scroll from "@js/util/scroll";
import { Indicator, Toast } from "mint-ui";
console.log(Indicator.open);
export default {
  props: ["tid"],

  data() {
    return {
      listData: [],
      p: 1,
      pagesize: 10,
      hasMore: true
    };
  },
  //mouted中可以获得父组件props传递过来的数据
created() {
    console.log(this.tid)
},
  watch: {
    tid: {
      immediate: true,
      handler() {
        this.listData = [];
        this.hasMore = true;
        this.p = 1;
        this.getData();
      }
    }
  },
  methods: {
    getData() {
      //设置列表请求对象数据
      if (this.hasMore) {
        Indicator.open({
          text: "加载中...",
          spinnerType: "triple-bounce"
        });
        let ajaxObj = {
          order: 0,
          p: this.p,
          pagesize: this.pagesize
        };

        if (this.tid) {
          ajaxObj.tid = parseInt(this.tid);
        }
        return this.axios({
          type: "get",
          url: "/fm/explore/tagalbum",
          params: ajaxObj
        }).then(result => {
          Indicator.close();
          if (result.data.success) {
            this.listData = this.listData.concat(result.data.albums);
            if (result.data.pagination.maxpage <= this.p) {
              this.hasMore = false;
            } else {
              this.p++;
            }
          } else {
            console.log("数据不存在");
          }

          //   this.cateList = result.data.info;
        });
      } else {
        if (this.instance) this.instance.close();
        this.instance = Toast({
          message: "没有更多了...",
          position: "bottom"
        });
        return false;
      }
    }
  },
  beforeDestory() {
    if (this.instance) this.instance.close();
  },
  mounted() {
    this.scroll = scroll({
      el: this.$refs.root,
      handler: this.getData.bind(this),
      onscroll: y => {
        //监测滚动距离
      }
    });
  },
  created() {},
  components: {
    AppHomeMusiclistItem
  }
};
</script>

<style lang="scss">
.app-home-musiclist-list {
  height: calc(100vh - 4.266667rem);
  overflow: hidden;
  padding: 0.266667rem 0;

  margin: 0 0.373333rem;
  .wrapper {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
}
</style>
