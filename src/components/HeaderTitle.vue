<script>
import {PhoneFilled} from "@element-plus/icons-vue";
export default {
  name: "HeaderTitle.vue",
  components:
      {
        PhoneFilled:PhoneFilled,
      },
}
</script>

<template>
  <div id="h-mainDiv">
    <div id="h-div01">
      <div id="h-div02">
        山东轻译翻译
      </div>
      <div id="h-div03">
        PROFESSIONALIZE IN LIGHT INDUSTRY TRANSLATION
      </div>
    </div>
    <div id="h-div04">
      <el-tag
          key="danger"
          type="plain"
          class="mx-1"
          effect="plain"
          size="large"
          round
      >
        <el-icon><PhoneFilled /></el-icon>
        <span>0531-88249726</span>
      </el-tag>
    </div>
  </div>
</template>

<style scoped>
@font-face {
  font-family: censcbk;
  src: url("../assets/fonts/censcbk.woff");
}
@font-face {
  font-family: DNHYLMXQ;
  src: url("../assets/fonts/DNHYLMXQ.ttf");
}
#h-mainDiv
{
  background-image: linear-gradient(to right, darkblue, darkblue, gold);
  height: 5rem;
  display: flex;
  align-items: center;
}
#h-div01
{
  margin-left: 5rem;
  flex-grow: 1;
}
#h-div02
{
  font-size: 2rem;
  color: white;
  font-family: censcbk, DNHYLMXQ;
  font-weight: bolder;
}
#h-div03
{
  color: white;
  font-size: smaller;
  font-family: censcbk;
  color: rgb(255, 255, 255);
}
#h-div04
{
  flex-grow: 1;
  text-align: right;
  padding-right: 2rem;
}
</style>

