const trim=function(){
    console.log("functionUp")
    
}
module.exports.myfunc=trim


const changetoLowerCase= function(){
    var str = 'FUNCTIONUP'
    console.log('change to lower case :',str.toLowerCase())
}
const changetoUpperCase = function(){
var str2 = "functionup"
console.log("change to upper case",str2.toUpperCase())
}
module.exports.mystr=changetoLowerCase
module.exports.mystr2=changetoUpperCase