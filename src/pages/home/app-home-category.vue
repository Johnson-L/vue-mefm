<template>
    <div class="app-home-category">
            <app-loading v-if="!firstLoading"></app-loading>
            <div v-else>
              <div class="category-list">
                <app-home-category-item v-if="cateList" v-for="item in cateList" v-bind:key="item.id" v-bind:info="item">

                </app-home-category-item>
            </div>
            </div>
            
        
    </div>

</template>

<script>
import AppHomeCategoryItem from "@c/common/app-home/app-home-category-item";
export default {
  beforeCreate() {
    this.axios({
      type: "get",
      url: "/fm/mobileWeb/catalogroot"
    }).then(result => {
      //   console.log(result);
      this.cateList = result.data.info;
      this.firstLoading = true;
    });
  },
  data() {
    return {
      cateList: null,
      firstLoading: false
    };
  },
  components: {
    AppHomeCategoryItem
  }
};
</script>

<style lang="scss">
.app-home-category {
  .category-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 0.4rem;
  }
}
</style>




