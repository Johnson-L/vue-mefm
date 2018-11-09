<template>
    <footer class="app-footer">
        <div class="content">
            <button>客户端</button>
            <i class="logo-cat"></i>
            <button>返回顶部</button>
        </div>
        <div class="bottom">MissEvan弹幕音频网 京ICP备:14055174号-1</div>
    </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
.app-footer {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 1.866667rem;
  padding: 0.266667rem 0.533333rem;
  color: #9e9e9e;
  font-size: 0.373333rem;
  .content {
    display: flex;
    justify-content: space-around;
    width: 100%;
    button {
      background: transparent;
      color: #9e9e9e;
      border: none;
      width: 1.6rem;
    }
    .logo-cat {
      background-size: 9.733333rem 9.04rem;
      background-position: -6.64rem -6.986667rem;
      height: 0.426667rem;
      width: 0.426667rem;
      background-image: url(https://static.missevan.com/assets/m/images/build/sprite-icons@2x.02953e71.png);
    }
  }
  .bottom {
    text-align: center;
    width: 100%;
    font-size: .32rem;
  }
}
</style>
