function getParams() {
  	var idx = document.URL.indexOf('?');
  	var params = new Array();
  	if (idx != -1) {
  		var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
  		for (var i=0; i<pairs.length; i++) {
  			nameVal = pairs[i].split('=');
  			params[nameVal[0]] = nameVal[1];
  		}
 	}
  	return params;
 }

var username; 
var password;

window.onload = loginLoad;
function loginLoad(){
	// วิธีใช้ getParams()
	var form = document.getElementById("myLogin")
	var parameter = getParams();
	form.onsubmit = checkLogin;
	username = parameter["username"];
	password = parameter["password"];
	console.log(parameter["username"]);
	console.log(parameter["password"]);
}

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	var user = document.forms["myLogin"]["username"]
	var pass = document.forms["myLogin"]["password"]

	if(user != username && pass != password){
		alert("A AH~~~");
		return false
	}
	else{
		alert("OK");
		return true
	}


}

			