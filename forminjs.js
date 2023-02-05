function validateform()
{
    var name = document.myform.name.value;
    var password = document.myform.password.value;

    if( name === null || name.length == 0 )
    {
        alert("Name cant be blank");
        return false;
    }
    else
    {
        if(password.length < 6)
        {
            alert("pass must be six char long");
            return false;
        }
    }
}