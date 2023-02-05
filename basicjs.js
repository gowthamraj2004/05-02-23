function msg()
{
    alert("Battery low plug the charger");
}
var date = new Date();
var day = date.getDate();
var month = date.getMonth()+1;
var year = date.getFullYear();
document.write("<br>Date is:"+day+"/"+month+"/"+year);

var today= new Date();
var h= today.getHours();
var m = today.getMinutes();
var s = today.getSeconds();
document.write("<br><br>Time is :"+h+";"+m+";"+s);