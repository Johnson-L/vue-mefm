<template>

    <section class="app-home-suggest">

        <app-loading v-if="!firstLoading"></app-loading>
        <div v-else>
          <app-home-banner v-if="data" v-bind:banners="data.info.banner">

        </app-home-banner>
        <app-home-section v-if="hotSound" v-bind:info="hotSound"></app-home-section>
        <div class="app-home-section-channel">
            <app-home-head v-if="channelHeadInfo" v-bind:head-info="channelHeadInfo"></app-home-head>
            <div class="app-home-body-channel">
                <app-home-item-channel v-if="channelItems" v-for="item in channelItems" v-bind:key="item.id" v-bind:item-info="item"></app-home-item-channel>
            </div>
        </div>
        <app-home-section v-if="dataArray" v-for="item in dataArray" v-bind:key="item.id" v-bind:info="item">

        </app-home-section>
        </div>
        
    </section>
</template>

<script>
import AppHomeBanner from "@c/common/app-home/app-home-banner";
import AppHomeSection from "@c/common/app-home/app-home-section";
import AppHomeHead from "@c/common/app-home/app-home-head";
import AppHomeItemChannel from "@c/common/app-home/app-home-item-channel";
export default {
  data() {
    return {
      data: null,
      dataArray: null,
      hotSound: null,
      channelHeadInfo: null,
      channelItems: null,
      firstLoading: false
    };
  },
  components: {
    AppHomeBanner,
    AppHomeSection,
    AppHomeHead,
    AppHomeItemChannel
  },
  beforeCreate() {

    

    var promiseRank = this.axios({
      type: "get",
      url: "/fm/mobileWeb/newHomepage3"
    }).then(result => {
      this.data = result.data;

      this.hotSound = {
        title: "人气 M 音",
        target: "rank",
        objects_point: this.data.info.sound.slice(0, 3)
      };
      this.channelHeadInfo = {
        title: "频道",
        target: "channel"
      };

      this.channelItems = this.data.info.channel;
      return ;
      // console.log(this.channelItems)
    });

    var promiseData = this.axios({
      type: "get",
      url: "/fm/sound/newhomepagedata"
    }).then(result => {
      this.dataArray = result.data.music;
      return;
    });
    Promise.all([promiseRank, promiseData]).then(function(){
      console.log('请求完毕');
     
      this.firstLoading = true;
    }.bind(this))
  }
};
</script>

<style lang="scss">
.app-home-suggest {
  min-height: 100vh;
  .app-home-section-channel {
    padding-bottom: 0.426667rem;
    margin: 0.266667rem auto;
    .app-home-body-channel {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      box-sizing: border-box;
      margin: 0 0.373333rem;
    }
  }
}
</style>


