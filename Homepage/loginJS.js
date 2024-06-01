const login = document.querySelector("#login");
const username = document.querySelector("#name");
const pass = document.querySelector("#pass");

//const tempName = sessionStorage.getItem("username");
//username.value = tempName;

//const tempPass = sessionStorage.getItem("pass");
//pass.value = tempPass;

login.addEventListener("click", function (e) {
  	sessionStorage.setItem("username", username.value);
  	sessionStorage.setItem("pass", pass.value);
  	sessionStorage.setItem("constUser", username.value);
  	const temp = pass.value;
	
	//if(pass.value!="" && username.value!=""){
		//sessionStorage.setItem("username", "");
  		sessionStorage.setItem("pass", "");
	//}else{
	//	alert("Please enter data in both fields first!");
	//	e.preventDefault();
	//}
})

window.addEventListener('beforeunload', function (e) {
    if (username !== '' || pass !== '') {
        //e.preventDefault();
        //e.returnValue = '';
       	//sessionStorage.setItem("username", '');
  	sessionStorage.setItem("pass", '');
    }
});
