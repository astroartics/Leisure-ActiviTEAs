const login = document.querySelector("#login");
const username = document.querySelector("#name");
const pass = document.querySelector("#pass");
const usernameAlert = document.querySelector('#usernameAlert');
const backBtn = document.querySelector("#back");

var finalUsername;

const tempName = sessionStorage.getItem("username");
username.value = tempName;

const tempPass = sessionStorage.getItem("pass");
pass.value = tempPass;

login.addEventListener("click", function (e) {
  	sessionStorage.setItem("username", username.value);
  	sessionStorage.setItem("pass", pass.value);
  	const temp = pass.value;
	
	if(pass.value!="" && username.value!=""){
		finalUsername = username.value;
		sessionStorage.setItem("username", "");
  		sessionStorage.setItem("pass", "");
	}else{
		alert("Please enter data in both fields first!");
		e.preventDefault();
	}
})

window.addEventListener('beforeunload', function (e) {
    if (username !== '' || pass !== '') {
        //e.preventDefault();
        //e.returnValue = '';
        sessionStorage.setItem("username", '');
  	sessionStorage.setItem("pass", '');
    }
});

backBtn.addEventListener("click", function (e) {
    window.location.assign("index.html");
})
