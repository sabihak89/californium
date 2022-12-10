const express = require('express');
const router = express.Router();
var lodash= require('lodash')
const intro = require('./introduction')
const employee = require('./employee')
const _ = require('underscore')
// const myname2 = require("../logger/logger.js")
 const date=require("../util/helper")
 const month=require("../util/helper")
 const batch=require("../util/helper")
 const myfan=require("../validator/formatter")
 const tolower=require("../validator/formatter")
 const toupper=require("../validator/formatter")
router.get('/test-me', function (req, res) {
    console.log("email from introduction module", intro.myEmail)
    intro.myFunction('Sabiha')
    console.log("email from employee module", employee.myEmail)

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let result = _.first(days, 4)
    console.log(`Result from underscore function is ${result}`)
    // myname2.myname("syed")
    date.mydate()
    month.mymonth()
    batch.mybatch("californium,w3d4,the topic for today is node js module system ")
    myfan.myfunc()
    tolower.mystr()
    toupper.mystr2()
    const months=["jan","fab","mar","apr","may","june","july","aug","sep","oct","nov","dec"]
    console.log(lodash.chunk(months,3))
    const oddnum=[1,3,5,7,9,11,13,15,17,19]
    console.log(lodash.tail(oddnum))
    const arr1=[1,2,3,4]
    const arr2=[2,3,4,5]
    const arr3=[3,4,5,6]
    const arr4=[6,7,8,9]
    const arr5=[3,2,1,4]
    console.log(lodash.union(arr1,arr2,arr3,arr4,arr5))
    const myobject=lodash.fromPairs([["horror","the shining"],["drama","titanic"],["thriller","shutter island"],["fantacy","pans labyrinth"]])
    
   console.log(myobject)
   router.get('/movies',function(req , res){
    const arr=['rang de basanti','the shining','lords of the rings','batman begins']
     res.send(arr)
   })



    res.send('any dummy text')
});


router.get('/test-you', function(req, res){
    console.log("I am here")
    res.send("very important text")
})


module.exports = router;