<template>
    <div class="app-home-musiclist-list">
       <app-home-musiclist-item v-for="item in listData" v-bind:info="item" v-bind:key="item.id"></app-home-musiclist-item>
    </div>    
</template>

<script>
import AppHomeMusiclistItem from '@c/common/app-home/app-home-musiclist-item'
export default {
    props: ['list-data'],
    created () {
        
    },
    components : {
        AppHomeMusiclistItem
    }
}
</script>

<style lang="scss">
.app-home-musiclist-list{

    padding: .266667rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin: 0 .373333rem;
}
</style>
