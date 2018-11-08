<template>

    <section class="app-home-banner">
        <swiper v-bind:options="swiperOption" res="mySwiper">
            <swiper-slide v-for="(banner, index) in banners" v-bind:key="index">
                <img width="100%" v-bind:src="banner.pic">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
         </swiper>
    </section>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true,
        autoplay: true
      },
      
    };
  },
    props : {
        banners : Array
    },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  }
};
</script>
<style lang="scss">
.app-home-banner {
  width: 100%;
  height: 3.333333rem;
  background-color: #000;
}
</style>

