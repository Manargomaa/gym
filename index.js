function formValidate(){
    var Name =document.getElementById("username").value;
    var Email =document.getElementById("email").value;
    var Phone =document.getElementById("Phone").value;
    var Password=document.getElementById("password").value;
    var Confirm=document.getElementById("confirm").value;
    var error =document.getElementById("error");
    var text= "";


    if(Name.length <5){
        text= "please enter valid username ";
        error.innerHTML=text;
        return false;
    }
    else if(Email.length <10  && Email.indexOf("@") == -1 ) {
        text= "please enter valid Email ";
        error.innerHTML=text;
        return false;
    }
     if(Phone.length <11 || isNaN(Phone)) {
        text= "please enter valid Phone ";
        error.innerHTML=text;
        return false;
    }
    else if(Password.length <8) {
        text= "please enter valid Password ";
        error.innerHTML=text;
        return false;
    }
    else if( Confirm != Password) {
        text= "Password does not match ";
        error.innerHTML=text;
        return false;
    }
    else{
        alert("Form Submitted Successfully");
        return true;
    }
}