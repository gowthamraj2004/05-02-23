function validateemail()
{
    var x = document.myform.email.value;
    var atposit = x.indexOf("@");
    var dotposition = x.lastIndexOf(".");
    if(atposit < 1 || dotposition < atposit+2 || dotposition+2 >= x.length)
    {
     alert("Please enter valid email");
     return false;   
    }
}