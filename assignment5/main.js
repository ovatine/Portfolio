var count = 0;
var temp ;
function postFunction(){
 
 var temp1 = document.getElementById("text1").value;
 var click = true;
 
   

    
     count++;
     console.log(temp1);
     //console.log(count);
     if(count==1){
        if(temp1 == ""){
            count--;
           
        }
        else{
            var temp = document.getElementById("text1").value;
            document.getElementById("post1").innerHTML = temp;
        }
    
         }
      if(count ==2){
        if(temp1 == ""){
            count--;
        }
        else{
            var temp = document.getElementById("text1").value;
            document.getElementById("reply1").innerHTML = temp;
        }
           
         }
         if(count == 3){
            if(temp1 == ""){
                count--;
            }
            else{
                var temp = document.getElementById("text1").value;
                document.getElementById("reply2").innerHTML = temp;
            }
           
         }
     
     text1.value="";
     
}

 

    


function clearFunction(){
    document.getElementById("post1").innerHTML = "";
    document.getElementById("reply1").innerHTML = "";
    document.getElementById("reply2").innerHTML = "";
    count = 0;
    console.log(count);
}


window.onload = nigga;
function nigga(){
    var link = document.getElementById("result1");
    
    link.innerHTML = parseInt("55")+66;
}
   
