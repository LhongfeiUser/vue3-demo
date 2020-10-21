<template>
  <div>
    <router-view />
    <van-tabbar route>
      <van-tabbar-item replace to="/" icon="home-o">
        首页
      </van-tabbar-item>
      <van-tabbar-item replace to="/about" icon="smile-o">
        关于我们
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
