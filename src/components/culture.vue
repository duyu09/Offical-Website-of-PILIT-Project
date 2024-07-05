<script>
import { Search } from '@element-plus/icons-vue'
export default
{
  name: "culture",
  data()
  {
    return{
      input1:'',
      Search:Search,
      activeNames:'',
      tableData:[
        {'id':1,'content':'跨越东西方：语言的交流与互鉴'},
        {'id':2,'content':'全球疫情语境下人类交往的跨文化反思：基于巴基斯坦贸易分析'},
        {'id':3,'content':'如何规避谈判陷阱？'},
        {'id':4,'content':'2022年跨文化传播实践评析'},
        {'id':5,'content':'互联网时代的跨文化传播问题——第十届“跨文化传播国际学术会议”综述'},
        {'id':6,'content':'视听、故事与文化——李子柒视频的跨文化理解'},
        {'id':7,'content':'政治冲突语境下网络球迷文化群体的面子修复：NBA辱华事件的讨论'},
        {'id':8,'content':'语言互通对国际贸易交流的影响'},
        {'id':9,'content':'浅析外贸营销文化差异之思维方式与风俗习惯'},
        {'id':10,'content':'客户擅自改变贸易术语怎么办？'},
        {'id':11,'content':'CIF贸易术语下风险转移案例分析'},
        {'id':12,'content':'文化价值观下的品牌翻译'},
        {'id':13,'content':'打破文化交流壁垒——中俄互办“国家年”'},
        {'id':14,'content':'文化差异：怎样避开不同国家的文化敏感点'},
        {'id':15,'content':'数字化平台助力企业出海'},
        {'id':16,'content':'隐形的文化差异：“一次做好”与“多次迭代”'},
        {'id':17,'content':'如何针对不同国家和地区的文化差异，设计出针对性强、具有本土特色的营销方案？'},
        {'id':18,'content':'外贸营销文化差异之语言现象：goat “山羊”or“色鬼”？'},
        {'id':19,'content':'思维差异之数字的爱恨情仇'},
        {'id':20,'content':'一带一路国家语言贸易壁垒与服务贸易自由化'},
        {'id':21,'content':'四大宗教饮食禁忌及其衍生问题'},
        {'id':22,'content':'北京冬奥会传播中华文化独特魅力'},
        {'id':23,'content':'三星堆考古新发现震惊全球'},
        {'id':24,'content':'云南野象迁徙吸引全球媒体和民众目光'},
        {'id':25,'content':'汉服风从中国刮到世界'},
        {'id':26,'content':'“洋网红”成为讲述中国故事新力量'},
        {'id':27,'content':'元宇宙拓展博物馆文物文化传播新空间'},
        {'id':28,'content':'《典籍里的中国》引发海内外观众强烈共鸣'},
        {'id':29,'content':'网络新媒体助力中国各地文化走出去'},
        {'id':30,'content':'咳嗽：谦逊的表现or粗鲁的举止？'},
        {'id':31,'content':'该不该当面拆礼物？'},
      ],
    }
  },
}
</script>

<template>
  <div id="p-mainDiv">
    <div id="p-div01">
      <h2 id="h301">文化案例概览</h2>
      <div id="p-div02">
        <el-table :data="tableData" style="width: 92.5%">
          <el-table-column prop="id" label="" width="100" />
          <el-table-column prop="content" label="" width="800" />
        </el-table>
      </div>
    </div>
  </div>
</template>

<style scoped>
@font-face {
  font-family: DNHYLMXQ;
  src: url("../assets/fonts/DNHYLMXQ.ttf");
}
#h301
{
  text-align: center;font-family: DNHYLMXQ;
}
#p-mainDiv
{
  height:auto;
  width:100%;
  display: flex;
  justify-content: center;
}
#p-div01
{
  width:85%;
  margin-top: 1.75rem;
}
#p-div02
{
  height:calc(0.55 * 100vh);
  margin-top: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 0 9px 0 black;
  display: flex;
  justify-content: center;
  overflow: auto;
  padding-top: 1rem;
  background-color: white;
}

</style>
