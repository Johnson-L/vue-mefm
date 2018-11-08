<template>
    <div class="app-home-body">
        <app-home-item v-for="item in bodyInfo" v-bind:item-info="item" v-bind:key="item.id"></app-home-item>
    </div>
</template>

<script>
import AppHomeItem from '@c/common/app-home/app-home-item';
export default {
    props : {
        bodyInfo : Array
    },
    components : {
        AppHomeItem
    }
}
</script>
<style lang="scss">
    .app-home-body{
        display: flex;
        justify-content: space-around;
         margin: 0 .373333rem;
    }
</style>