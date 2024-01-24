<!-- v-for -->
<script>

export default{
  data : () => ({
    subject : [
      {id : 1, name :'vue'},
      {id : 2, name :'java'},
      {id : 3, name :'Ui'},
      {id : 4, name :'php'}

    ],
    student :{
      styNum: '007',
      name :'Jack',
      age:18
    }
  }),
  methods:{
    addSubject: function(){
      this.subject.unshift({id : 5, name :'golang'})
    }
  }
}

</script>

<template>
 
 <ul>
  <!-- v-for="item in items" -->
  <li v-for=" sub in subject">编号:{{ sub.id }}--- 名称:{{ sub.name }}</li>
 </ul>

<hr>
<ul>
  <!-- v-for="{key1,key2} in items" -->
  <!-- 解构对象 -->
  <li v-for=" {id, name} in subject">编号:{{ id }}--- 名称:{{ name }}</li>
 </ul>


 <hr>
<ul>
  <!-- v-for="(item,key) in items" -->
  <li v-for=" (item, index) in subject">index: {{index}} 编号:{{ item.id }}--- 名称:{{ item.name }}</li>
 </ul>


 <hr>
<ul>
  <!-- v-for="({subkey1,subkey2},key) in items" -->
  <!-- 解构对象 带key -->
  <li v-for=" ({name,id}, index) in subject">index: {{index}} 编号:{{ id }}--- 名称:{{ name }}</li>
 </ul>

 <hr>

 <ul>
  <!-- v-for="value in object" -->
  <li v-for=" value in student">{{ value }}</li>
 </ul>


 <hr>

 <ul>
  <!-- v-for="(value,key) in object" -->
  <li v-for=" (value,key) in student">{{ key }} -- {{ value }}</li>
 </ul>


 <hr>

 <ul>
  <!-- v-for="(value,key,index) in object" -->
  <li v-for=" (value,key, index) in student">{{ index }} --  {{ key }} -- {{ value }}</li>
 </ul>


<hr>
<!-- 原因是性能优化策略 导致的有状态列表更新错误 -->
<h3>勾选checkbox后点按钮发现按钮选中错误</h3>
<button @click.once="addSubject">添加课程</button>
<ul>
  <!-- v-for="item in items" -->
  <li v-for=" sub in subject"> 
     <input type="checkbox">
编号:{{ sub.id }}--- 名称:{{ sub.name }}</li>
 </ul>

 <hr>

 <h3>使用索引当key值</h3>
<button @click.once="addSubject">添加课程</button>
<ul>
<!-- key 具有唯一行 类型只能number/string ,不建议索引当key, 建议用其他属性当作key -->
  <li v-for=" (sub,index) in subject" :key="index"> 
     <input type="checkbox">
编号:{{ sub.id }}--- 名称:{{ sub.name }}</li>
 </ul>


 <hr>

 <h3>使用id作为key, 解决渲染错误问题</h3>
<button @click.once="addSubject">添加课程</button>
<ul>
<!-- key 具有唯一行 类型只能number/string ,不建议索引当key, 建议用其他属性当作key -->
  <li v-for=" (sub,index) in subject" :key="sub.id"> 
     <input type="checkbox">
编号:{{ sub.id }}--- 名称:{{ sub.name }}</li>
 </ul>
</template>
