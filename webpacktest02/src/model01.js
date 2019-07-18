//定义add函数
var add = function (x, y) {
    // debugger
    return x + y;
}
var add2 = function (x,y) {
    return x+y+1
}
//导出model01.js
module.exports.add = add;
// module.exports.add2 = add2;
// module.exports = {add,add2};