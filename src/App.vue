<template>
  <section id="#app">
    <header>
        <app-header></app-header>
    </header>
   
    
    <main>
     
       <router-view></router-view>
      
    </main>
    <footer>
      <app-footer></app-footer>
    </footer>
  </section>
</template>


<script>
import AppHeader from "@c/layout/app-header";
import AppFooter from '@c/layout/app-footer';

export default {
  name: "app",
  components: {
    AppHeader,
    AppFooter

  }
};
</script>


<style lang="scss">
html {
  min-height: 100%;
}
body {
  background-color: #f5f5f5;
  min-height: 100%;
}
header {
  position: fixed;
  z-index: 999;
  width: 100%;
  max-width: 100vw;
}
main {
  display: block;
  padding-top: 1.066667rem;
 
  min-height: calc(100vh - 1.866667rem);
  max-width: 100vw;
}
</style>
