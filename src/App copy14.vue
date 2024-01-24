<!-- 监听器 watchs -->
<!-- 监听器默认浅层的， deep:true 会监听深层的 子属性也会被监听 -->
<!-- immediate 创建监听器时立即执行一次 -->
<!-- flush:post 解决回调函数中访问dom元素是更新前的状态  -->
<script>
export default{
  data : () => ({

    age : 30,

    age2 : 30,
    emp:{
      name :"jack",
      salary : 7000
    },
    emp2:{
      name :"jack",
      salary : 7000
    },
    emp3:{
      name :"jack",
      salary : 7000
    },
    emp4:{
      name :"jack",
      salary : 7000
    },

    account:"Abc",
    account2:"Abc",
    account3:"Abc",
    account4:"Abc",
    stopAccount4Watch:null,


  }),
  watch:{

    // 函数式监听器

    /**
     * 监听age 是否发生变化
     * @param {*} newData  新值
     * @param {*} oldData  旧值
     */
    age(newData, oldData){
      console.log('newdata: '+ newData)
      console.log('olddata: '+ oldData)
    },
    /**
     * emp.name 是否发生变化 (通过采用字符串路径形式监听对象属性)
     * @param {*} newData  新值
     * @param {*} oldData  旧值
     */
    'emp.name'(newData, oldData){
      console.log('newdata: '+ newData)
      console.log('olddata: '+ oldData)
    },

    //对象式监听器
    /**
     * 监听age2 是否发生变化
     * @param {*} newData  新值
     * @param {*} oldData  旧值
     */
    age2:{
      handler(newData, oldData){
        console.log('newdata2: '+ newData)
        console.log('olddata2: '+ oldData)
      }
    },
    'emp2.name':{
      handler(newData, oldData){
        console.log('newdata2: '+ newData)
        console.log('olddata2: '+ oldData)
      },
    },
    /**
     * 对象监听器 监听对象
     */
    emp3:{
      handler(newData, oldData){
        console.log('newdata3: '+ newData.name + ' | ' + newData.salary)
        console.log('olddata3: '+ newData.name +  '| ' + newData.salary)
      },
    },
    emp4:{
      deep:true,
      handler(newData, oldData){
        console.log('newdata4: '+ newData.name + ' | ' + newData.salary)
        console.log('olddata4: '+ newData.name +  '| ' + newData.salary)
      },
    },
    account:{
        immediate:true,
        handler(newData, oldData){
        console.log('newdata: '+ newData)
        console.log('olddata: '+ oldData)
        // console.log(document.getElementById('titleAccount').innerHTML)
      },
    },
    account2:{
        handler(newData, oldData){
        console.log('newdata: '+ newData)
        console.log('olddata: '+ oldData)
        // 监听器 默认情况下回调函数中访问dom元素是更新前的状态
        console.log(document.getElementById('titleAccount').innerHTML)
      },
    },
    account3:{
        flush:'post', //修改回调触发机制
        handler(newData, oldData){
        console.log('newdata: '+ newData)
        console.log('olddata: '+ oldData)
        // 监听器 默认情况下回调函数中访问dom元素是更新前的状态
        console.log(document.getElementById('titleAccount3').innerHTML)
      },
    }
  },
  methods:{
    /**
     * 修改对象本身 会被emp3监听
     */
    changeEmp3(){
      this.emp3 = {
        name:'annie',
        salary: 10000
      }
    }
  },
  //生命周期函数，页面成功渲染后执行
  mounted(){
    // 停止监听数据源是 监听器返回值函数 调用即可停止监听
    this.stopAccount4Watch = this.$watch('account4',(newData,oldData)=>{
        console.log('newdata: '+ newData)
        console.log('olddata: '+ oldData)
    },{immediate:true,deep:true,flus:'post'})
  }
}
</script>

<template>  
<h3>函数式监听</h3>

年龄: <input type="number" v-model="age"><br>
名字: <input type="text" v-model="emp.name"><br>
<hr>
<h3>对象式监听</h3>
年龄: <input type="number" v-model="age2"><br>
名字: <input type="text" v-model="emp2.name"><br>

<hr>
<h3>对象监听 默认浅层监听 属性变更不被监听</h3>
<!-- 修改emp3.name不会触发 -->
名字: <input type="text" v-model="emp3.name"><br>
<hr>
<h3>通过method 修改对象本身</h3>
<button @click="changeEmp3">改变对象emp3</button>


<hr>
<h3>深度监听测试</h3>
名字: <input type="text" v-model="emp4.name"><br>

<hr>
<h3>immediate 监听器创建时即出发一次</h3>
账号: <input type="text" v-model="account"><br>

<hr>
<h3>监听器 默认情况下回调函数中访问dom元素是更新前的状态</h3>
<h4 id="titleAccount">  
最新账号 :<span>{{ account2 }}</span></h4>
账号: <input type="text" v-model="account2"><br>

<hr>
<h3>flush:post 解决回调函数中访问dom元素是更新前的状态</h3>
<h4 id="titleAccount3">  
最新账号 :<span>{{ account3 }}</span></h4>
账号: <input type="text" v-model="account3"><br>


<hr>
<h3>$watch 创建监听函数</h3>
账号: <input type="text" v-model="account4"><br>

<hr>
<h3>停止$watch 创建监听函数 </h3>
<button @click="stopAccount4Watch">停止监听</button>
账号: <input type="text" v-model="account4"><br>

</template>
