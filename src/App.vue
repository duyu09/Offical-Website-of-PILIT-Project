<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MainPage from "./components/MainPage.vue";
import { onMounted } from 'vue'

onMounted(() => {
  document.body.style.setProperty('--el-color-primary', '#4050ff');
  document.body.style.setProperty('--el-color-primary-light-9', '#ecf0ff');
  document.body.style.setProperty('--el-color-primary-light-3', '#7582d4');
  document.body.style.setProperty('--el-menu-active-color', '#4060ff');
  document.body.style.setProperty('--el-menu-hover-bg-color', '#ecefff');
  document.body.style.setProperty('--el-menu-hover-text-color', 'rgba(64,80,255,0.6)');
});

</script>

<template>
  <div id="mainDiv">
    <router-view></router-view>
  </div>
</template>

<style scoped>
#mainDiv
{
  height:100%;
  width:100%;
}
</style>
