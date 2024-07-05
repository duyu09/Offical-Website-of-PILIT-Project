<script>
export default {
  name: "MainPage",
  components: {
    HeaderTitle,
    FooterCom,
  }
}
import HeaderTitle from "./HeaderTitle.vue";
import FooterCom from "./FooterCom.vue";
</script>

<template>
  <HeaderTitle></HeaderTitle>
  <el-menu
      default-active="1"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
  >
    <el-menu-item index="1" style="width:22%;" @click="this.$router.push('/main/prof');">轻工行业术语库</el-menu-item>
    <el-menu-item index="2" style="width:22%;" @click="this.$router.push('/main/lightInt');">轻工行业语料库</el-menu-item>
    <el-menu-item index="3" style="width:22%;" @click="this.$router.push('/main/culture');">文化案例库</el-menu-item>
    <el-menu-item index="4" style="width:22%;" @click="this.$router.push('/main/xyzTrans');">轻工行业词典</el-menu-item>
<!--    <el-menu-item index="5" style="width:15%;" @click="this.$router.push('/main/prof');">产能供需数据库</el-menu-item>-->
  </el-menu>
  <router-view></router-view>
  <div style="margin-top: 6.5rem;">
    <FooterCom></FooterCom>
  </div>
</template>

<style scoped>

</style>
