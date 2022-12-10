const printDate = function(){
    var dateNew = new Date();
    console.log(`the current date is:${dateNew}` ) 
}
const printMonth = function(){

    var monthNew = new Date();
    console.log(`the current month is:${monthNew}`)
}
const getBatchinfo = function(batch){
   console.log(`batch name is ${batch}`) 
}

module.exports.mydate=printDate
module.exports.mymonth=printMonth
module.exports.mybatch=getBatchinfo