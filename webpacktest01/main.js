//导入model01.js
var {add} = require("./model01")
var Vue = require("./vue.min")
var VM = new Vue({
    el:'#app',//接管了app区域的管理
    data:{
        name:'指令测试',//model数据
        num1:0,
        num2:0,
        result:0,
        url:'http://www.baidu.com'
    },
    methods:{
        change:function () {
            this.result = add( Number.parseInt(this.num1),Number.parseInt(this.num2))

            // alert("计算结果："+ this.result )
        }
    }
});