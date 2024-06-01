const backBtn = document.querySelector("#back");
const submit = document.querySelector("#submit");
const feedback = document.querySelector("textarea");
const name = document.querySelector("#name");
const Fakename = document.querySelector("#FakeName");
const edit = document.querySelector("#edit");
const done = document.querySelector("#done");
const user = document.querySelector("#user");
const userTemp = document.querySelector("#userTemp");

Fakename.style.display = "block";
edit.style.display = "block";
done.style.display = "none";

const tempName = sessionStorage.getItem("username");
console.log(tempName);
name.value = tempName;
Fakename.value = "Your feedback will be posted as : "+tempName;

const finalUser = sessionStorage.getItem("constUser");
user.innerText = finalUser;
userTemp.value = finalUser;

const tempFeedback = sessionStorage.getItem("feedback");
feedback.value = tempFeedback;

backBtn.addEventListener("click", function (e) {
    window.location.assign("Homepage.html");
})

submit.addEventListener("click", function (e) {
  	console.log(feedback.value);
  	sessionStorage.setItem("username", name.value);
  	sessionStorage.setItem("feedback", feedback.value);
  	const temp = feedback.value;
	
	if(feedback.value!="" && name.value!=""){
		alert("Thank you, your response has been recorded!");
		//sessionStorage.setItem("name", "");
  		sessionStorage.setItem("feedback", "");
	}else{
		alert("Please enter a feedback first!");
		e.preventDefault();
	}
})

edit.addEventListener("click", function (e) {
  	Fakename.style.display = "none";
  	edit.style.display = "none";
  	done.style.display = "block";
  	console.log(name.value);
  	feedback.setAttribute("disabled",true);
  	submit.setAttribute("disabled",true);
})

done.addEventListener("click", function (e) {
  	feedback.removeAttribute("disabled");
  	submit.removeAttribute("disabled");
  	Fakename.style.display = "block";
  	done.style.display = "none";
  	edit.style.display = "block";
  	sessionStorage.setItem("username", name.value);
  	window.location.reload();
})
