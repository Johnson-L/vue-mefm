<template>
    <div class="app-home-section">
        <app-home-head v-bind:head-info="headInfo"></app-home-head>
        <app-home-body v-bind:body-info="bodyInfo"></app-home-body>
    </div>
</template>

<script>
import AppHomeHead from "@c/common/app-home/app-home-head";
import AppHomeBody from "@c/common/app-home/app-home-body";

export default {
  data() {
    return {};
  },
  props: {
    info: Object
  },
  components: {
    AppHomeHead,
    AppHomeBody
  },
  computed: {
    headInfo() {
      return {
        id: this.info.id,
        title: this.info.title,
        target : this.info.target ? this.info.target : null
      };
    },
    bodyInfo() {
      return this.info.objects_point;
    }
  },
  created() {}
};
</script>
<style lang="scss">
.app-home-section {
  display: block;
  position: relative;
  width: 100%;
  //   background-color: #fff;
  padding-bottom: 0.426667rem;
  margin: 0.266667rem auto;
  //   border: 1px solid #eee;
  border-left: none;
  border-right: none;
 
}
</style>

