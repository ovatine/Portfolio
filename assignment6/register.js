window.onload = pageLoad;

function pageLoad(){
    var form = document.getElementById("myForm")
    form.onsubmit = bore;
}

function bore(){
    var password1 = document.forms["myForm"]["password1"]
    var password2 = document.forms["myForm"]["password2"]
    
    return validateForm(password1.value,password2.value)
}

function validateForm(password1,password2) {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    if(password1 != password2){
        
        return false;
    }
    else{
        return true;
    }

}