<script>
import HeaderTitle from "./HeaderTitle.vue";
import FooterCom from "./FooterCom.vue";

export default
{
  name: "Home.vue",
  components:
      {
        HeaderTitle:HeaderTitle,
        FooterCom:FooterCom,
      }

}
</script>

<template>
  <HeaderTitle></HeaderTitle>
  <div>
    <div>
      <el-menu

          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
      >
        <el-menu-item index="1" style="width:22%;" @click="this.$router.push('/main/prof');">轻工行业术语库</el-menu-item>
        <el-menu-item index="2" style="width:22%;" @click="this.$router.push('/main/lightInt');">轻工行业语料库</el-menu-item>
        <el-menu-item index="3" style="width:22%;" @click="this.$router.push('/main/culture');">文化案例库</el-menu-item>
        <el-menu-item index="4" style="width:22%;" @click="this.$router.push('/main/xyzTrans');">轻工行业词典</el-menu-item>
<!--        <el-menu-item index="5" style="width:15%;" @click="this.$router.push('/main/prof');">产能供需数据库</el-menu-item>-->
      </el-menu>
    </div>
    <el-carousel height="375px">
      <el-carousel-item>
        <div id="home-inner01"></div>
      </el-carousel-item>
      <el-carousel-item>
        <div id="home-inner02"></div>
      </el-carousel-item>
      <el-carousel-item>
        <div id="home-inner03"></div>
      </el-carousel-item>
      <el-carousel-item>
        <div id="home-inner04"></div>
      </el-carousel-item>
    </el-carousel>
    <div id="home-div05">
      <div id="home-div06">
        <div id="home-div09">
          <div id="home-div11"></div>
        </div>
        <div id="home-div10">
          <div id="home-div12">
            <div id="home-div13">
              语料领域
            </div>
            <div id="home-div14">
              &nbsp;&nbsp;&nbsp;&nbsp;
              通常是一定数量和规模的文本资源集合。语料规模可大可小，大至千万，甚至数亿句或更大，小至几百句。互联网本身就是一个巨大庞杂的语料库。语料根据不同标准可以有很多分类。比如，语料可以是单语语料，也可以是多语种语料。
            </div>
            <div>

            </div>
          </div>
        </div>
      </div>

      <div id="home-div07">
        <div id="home-div15">
          <div id="home-div18">
            <div id="home-div19">
              术语领域
            </div>
            <div id="home-div20">
              &nbsp;&nbsp;&nbsp;&nbsp;
              是在特定学科领域用来表示概念的称谓的集合，在我国又称为名词或科技名词（不同于语法学中的名词）。术语是通过语音或文字来表达或限定科学概念的约定性语言符号，是思想和认识交流的工具。术语可以是词，也可以是词组，用来正确标记生产技术、科学、艺术、社会生活等各个专门领域中的事物、现象、特性、关系和过程。
            </div>
            <div>
            </div>
          </div>
        </div>
        <div id="home-div17">
          <div id="home-div16"></div>
        </div>
      </div>
      <div id="home-div08"></div>
    </div>
    <div id="home-footer">
      <FooterCom></FooterCom>
    </div>
  </div>
</template>

<style scoped>
#home-inner01
{
  background-image: url("/src/assets/image/7.jpg");
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}
#home-inner02
{
  background-image: url("/src/assets/image/6.jpg");
  height:100%;
  background-repeat: no-repeat;
  background-size: cover;
}
#home-inner03
{
  background-image: url("/src/assets/image/2.jpg");
  height:100%;
  background-repeat: no-repeat;
  background-size: cover;
}
#home-inner04
{
  background-image: url("/src/assets/image/1.jpg");
  height:100%;
  background-repeat: no-repeat;
  background-size: cover;
}
#home-div06
{
  display: flex;
}
#home-div07
{
  display: flex;
  margin-top: 2.5rem;
}
#home-div09
{
  flex: 1;
}
#home-div10
{
  flex: 1;
  display: flex;
  align-items: center;
}
#home-div11
{
  background-image: url("/src/assets/image/5.png");
  background-size: cover;
  background-repeat: no-repeat;
  width: calc(0.3 * 100vw);
  height: calc(0.3 * 100vw);
  margin-top: 3.5rem;
  margin-left: 3.5rem;
  border-radius: 12px;
}
#home-div12
{
  margin-top: 3.5rem;
  width: calc(0.4 * 100vw);
  height: calc(0.25 * 100vw);
  /*background-color: rgb(214, 223, 255);*/
  background-image: linear-gradient(to right, rgb(214, 223, 255), rgb(214, 223, 255),rgb(214, 223, 255),rgb(255,250,200));
  border-radius: 10px;
  box-shadow: 8px 8px 10px 2px rgb(255, 250, 200);
}
#home-div13
{
  font-weight: normal;
  font-size: 2rem;
  margin-top: 2rem;
  margin-left: 2rem;
}
#home-div14
{
  margin: 2rem;
  font-weight: lighter;
}
#home-div15
{
  flex: 1;
}
#home-div16
{
  background-image: url("/src/assets/image/3.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  width: calc(0.3 * 100vw);
  height: calc(0.3 * 100vw);
  margin-top: 3.5rem;
  margin-left: 3.5rem;
  border-radius: 12px;
}
#home-div17
{
  flex: 1;
  display: flex;
  align-items: center;
  margin-left: 2rem;
}
#home-div18
{
  margin-top: 3.5rem;
  margin-left: 3.5rem;
  width: calc(0.4 * 100vw);
  height: calc(0.25 * 100vw);
  /*background-color: rgb(214, 223, 255);*/
  background-image: linear-gradient(to right, rgb(214, 223, 255), rgb(214, 223, 255),rgb(214, 223, 255),rgb(255,250,200));
  border-radius: 10px;
  box-shadow: 8px 8px 10px 2px rgb(255, 250, 200);
}
#home-div19
{
  font-weight: normal;
  font-size: 2rem;
  padding-top: 2rem;
  margin-left: 2rem;
}
#home-div20
{
  margin: 2rem;
  font-weight: lighter;
}
#home-footer
{
  margin-top: 5rem;
}
</style>
