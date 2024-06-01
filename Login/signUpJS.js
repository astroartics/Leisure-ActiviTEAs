const sign = document.querySelector("#sign");
const name = document.querySelector("#name");
const pass = document.querySelector("#pass");
const usernameAlert = document.querySelector('#usernameAlert');
const backBtn = document.querySelector("#back");

var finalUsername;

const tempName = sessionStorage.getItem("name");
name.value = tempName;

const tempPass = sessionStorage.getItem("pass");
pass.value = tempPass;

sign.addEventListener("click", function (e) {
  	sessionStorage.setItem("name", name.value);
  	sessionStorage.setItem("pass", pass.value);
  	const temp = pass.value;
	
	if(pass.value!="" && name.value!=""){
		finalUsername = name.value;
		sessionStorage.setItem("name", "");
  		sessionStorage.setItem("pass", "");
	}else{
		alert("Please enter data in both fields first!");
		e.preventDefault();
	}
})

window.addEventListener('beforeunload', function (e) {
    if (name !== '' || pass !== '') {
        //e.preventDefault();
        //e.returnValue = '';
        sessionStorage.setItem("name", '');
  	sessionStorage.setItem("pass", '');
    }
});

backBtn.addEventListener("click", function (e) {
    window.location.assign("index.html");
})
