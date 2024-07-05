<script>
export default {
  name: "FooterCom.vue"
}
</script>

<template>
<div id="footer-mainDiv">
  <div id="ft-div01">
    <div id="ft-div02">
      <div>
        Copyright &copy; 2023 School of Foreign Languages <br>
        (School of International Education) <br>
        Group of Professionalize in Light Industry Translation<br><br>
        齐鲁工业大学 外国语学院(国际教育学院) 山东轻译翻译项目小组 保留所有权利。
      </div>
    </div>
    <div id="ft-div03">
      <div>
        联系我们<br>
        <!--qq-->
        <svg class="Zi Zi--QQ Login-socialIcon" fill="#50c8fd" viewBox="0 0 24 24" width="40" height="40"><path d="M12.003 2c-2.265 0-6.29 1.364-6.29 7.325v1.195S3.55 14.96 3.55 17.474c0 .665.17 1.025.281 1.025.114 0 .902-.484 1.748-2.072 0 0-.18 2.197 1.904 3.967 0 0-1.77.495-1.77 1.182 0 .686 4.078.43 6.29 0 2.239.425 6.287.687 6.287 0 0-.688-1.768-1.182-1.768-1.182 2.085-1.77 1.905-3.967 1.905-3.967.845 1.588 1.634 2.072 1.746 2.072.111 0 .283-.36.283-1.025 0-2.514-2.166-6.954-2.166-6.954V9.325C18.29 3.364 14.268 2 12.003 2z" fill-rule="evenodd"></path></svg>
        &nbsp;&nbsp;
        <!--wx-->
        <svg class="Zi Zi--WeChat Login-socialIcon" fill="#60c84d" viewBox="0 0 24 24" width="40" height="40"><path d="M2.224 21.667s4.24-1.825 4.788-2.056C15.029 23.141 22 17.714 22 11.898 22 6.984 17.523 3 12 3S2 6.984 2 11.898c0 1.86.64 3.585 1.737 5.013-.274.833-1.513 4.756-1.513 4.756zm5.943-9.707c.69 0 1.25-.569 1.25-1.271a1.26 1.26 0 0 0-1.25-1.271c-.69 0-1.25.569-1.25 1.27 0 .703.56 1.272 1.25 1.272zm7.583 0c.69 0 1.25-.569 1.25-1.271a1.26 1.26 0 0 0-1.25-1.271c-.69 0-1.25.569-1.25 1.27 0 .703.56 1.272 1.25 1.272z" fill-rule="evenodd"></path></svg>
        &nbsp;&nbsp;
        <!--wb-->
        <svg class="Zi Zi--Weibo Login-socialIcon" fill="#fb6622" viewBox="0 0 24 24" width="40" height="40"><path fill="#FB6622" d="M15.518 3.06c8.834-.854 7.395 7.732 7.394 7.731-.625 1.439-1.673.309-1.673.309.596-7.519-5.692-6.329-5.692-6.329-.898-1.067-.029-1.711-.029-1.711zm4.131 6.985c-.661 1.01-1.377.126-1.376.126.205-3.179-2.396-2.598-2.396-2.598-.719-.765-.091-1.346-.091-1.346 4.882-.551 3.863 3.818 3.863 3.818zM5.317 7.519s4.615-3.86 6.443-1.328c0 0 .662 1.08-.111 2.797.003-.003 3.723-1.96 5.408.159 0 0 .848 1.095-.191 2.649 0 0 2.918-.099 2.918 2.715 0 2.811-4.104 6.44-9.315 6.44-5.214 0-8.026-2.092-8.596-3.102 0 0-3.475-4.495 3.444-10.33zm10.448 7.792s.232-4.411-5.71-4.207c-6.652.231-6.579 4.654-6.579 4.654.021.39.097 3.713 5.842 3.713 5.98 0 6.447-4.16 6.447-4.16zm-9.882.86s-.059-3.632 3.804-3.561c3.412.06 3.206 3.165 3.206 3.165s-.026 2.979-3.684 2.979c-3.288 0-3.326-2.583-3.326-2.583zm2.528 1.037c.672 0 1.212-.447 1.212-.998 0-.551-.543-.998-1.212-.998-.672 0-1.215.447-1.215.998 0 .551.546.998 1.215.998z" fill-rule="evenodd"></path></svg>

      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
@font-face {
  font-family: censcbk;
  src: url("/src/assets/fonts/censcbk.woff");
}
#footer-mainDiv
{
  height: 6.5rem;
  color: white;
  background-image: linear-gradient(to right, darkblue, darkblue, gold);
}
#ft-div01
{
  display: flex;
  height: 100%;
}
#ft-div02
{
  flex: 1;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-family: censcbk;
}
#ft-div03
{
  flex: 1;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}
</style>
