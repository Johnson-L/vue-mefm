# hello-world

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).




<!-- 嵌套路由 -->

路由守卫， 监听路由跳转的情况



1. 全局守卫

    实现路由切换的时候title切换

    this.$router.beforeEach((to, from, next) => {})

2. 路由独享守卫

    登陆判断

    routes 内路由表中写的

    beforeEnter();

3. 组件内的守卫






