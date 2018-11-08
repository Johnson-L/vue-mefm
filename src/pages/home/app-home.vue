<template>
    <section class="app-home">
        <ul class="app-home-nav">
            <!-- <router-link tag="li" class="app-home-nav-item" v-for="tab in tabs" v-bind:class="{ active : tab.active }" v-bind:key="tab.id" :to="tab.path" v-on:click.native="tabChange(tab.mainComponent)">{{ tab.text }}</router-link> -->
            <!-- <keep-alive> -->

           
                <router-link tag="li" active-class="active" class="app-home-nav-item" v-for="tab in tabs" v-bind:key="tab.id" :to="tab.path" >{{ tab.text }}</router-link>
             <!-- </keep-alive> -->
        </ul>
        
            <!-- 缓存， 切换路由不会destory -->
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
           <!-- <component v-bind:is="mainComponent"></component> -->

       
    </section>
    

</template>
<script>
//    import AppHomeSuggest from '@pages/home/app-home-suggest';
//    import AppHomeCategory from '@pages/home/app-home-category';
//    import AppHomeMusiclist from '@pages/home/app-home-musiclist';
export default {
  data() {
    return {
      tabs: [
        {
          id: "1",
          text: "音单",
          mainComponent: "app-home-musiclist",
          active: false,
          path: "/musiclist"
        },
        {
          id: "2",
          text: "推荐",
          mainComponent: "app-home-suggest",
          active: true,
          path: "/suggest"
        },
        {
          id: "3",
          text: "分类",
          // mainComponent : 'app-home-category',
          // active: false,
          path: "/category"
        }
      ],
      mainComponent: "app-home-suggest"
    };
  },
  methods: {
    tabChange(val) {
      console.log(val);
      this.mainComponent = val;
      this.tabs.forEach((item, index) => {
        if (item.mainComponent != val) {
          item.active = false;
        } else {
          item.active = true;
        }
      });
    }
  }
  // components : {
  //    AppHomeSuggest,
  //    AppHomeCategory,
  //    AppHomeMusiclist
  // }
};
</script>

<style lang="scss">
.app-home {
  .app-home-nav {
    width: 100%;
    height: 1.066667rem;
    background-color: #fff;
    display: flex;
    align-items: stretch;
    justify-content: space-around;
    .app-home-nav-item {
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      width: 1.333333rem;
      border-bottom: 2px solid transparent;
      &.active {
        border-bottom: 2px solid #000;
      }
    }
  }
}
</style>