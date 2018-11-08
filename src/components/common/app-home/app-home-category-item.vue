<template>
    <router-link class="category-item" v-bind:to="path">
        <span class="category-icon" v-bind:style="{ backgroundImage : imgUrl }"></span>
        <span class="category-text">{{ info.title  }}</span>
    </router-link>
</template>

<style lang="scss">
.category-item {
  width: 2.8rem;
  height: 2.8rem;
  margin: 0.266667rem 0;
  position: relative;

  border-radius: 0.106667rem;
  background-color: #fff;
 
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  .category-icon {
    width: 1.333333rem;
    height: 1.333333rem;
    background-size: 100%;
    background-position: center;
  }
  .category-text {
    font-size: 0.373333rem;
    color: #000;
    padding-bottom: .106667rem;
  }
}
</style>

<script>
export default {
  props: {
    info: Object
  },
  created() {
    // console.log(this.info);
  },
  computed: {
    path() {
      return `/list/${this.info.id}`;
    },
    imgUrl() {
      return `url("//static.missevan.com/app/${this.info.id}.png")`;
    }
  }
};
</script>

