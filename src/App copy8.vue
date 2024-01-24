<!-- 属性绑定style -->
<script>
export default{
  data : () => ({
  btnTheme :{
    backgroundColor:'#ff0000',
    color:'#000000'
  },
  backColor:'#0000ff',
  textColor: '#000000',
  borderRadius :20,
  btnStyleArr :[
      {
        backgroundColor:"#ff0000",
        color:"#ffffff"
      },
      {
        borderRadius:10
      }
    ]
})
}


</script>

<template>
<!-- 颜色选择器 -->
背景色:<input type="color" v-model="btnTheme.backgroundColor">
文本色:<input type="color" v-model="btnTheme.color">

<br>
<button :style="btnTheme">普通按钮</button>

<hr>
背景色:<input type="color" v-model="backColor">
文本色:<input type="color" v-model="textColor">
边框圆角:<input type="range" min="0" max="20" v-model="bordRadius">
<br>
<button :style="{
  backgroundColor: backColor,color:textColor,borderRadius:bordRadius+'px'
}">普通按钮</button>

<hr>
<!-- 颜色选择器 -->
背景色:<input type="color" v-model="btnStyleArr[0].backgroundColor">
文本色:<input type="color" v-model="btnStyleArr[0].color">

<!-- true-value false-value -->
边框圆角:<input type="checkbox" true-value="10px" false-value="0" v-model="btnStyleArr[1].borderRadius">

<br>
<button :style="btnStyleArr">普通按钮</button>

<hr>


</template> 

<style>
button{
  border : none;
  padding :15px 20px;
}
</style>