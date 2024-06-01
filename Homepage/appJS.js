const music = document.querySelector("#music");
const food = document.querySelector("#food");
const sports = document.querySelector("#sports");
const photography = document.querySelector("#photography");
const art = document.querySelector("#art");
const logout = document.querySelector("#logout");

let img=[];
let title=[music,food,sports,photography,art];

for(let i=0;i<5;i++){
	const img1 = document.querySelector(`#img${i+1}`);
	img.push(img1);
	img[i].addEventListener("mouseover",function(e){
		title[i].style.width="32%";
		title[i].style.height="4.5vh";
		title[i].style.fontSize="1.7em";
	})
	img[i].addEventListener("mouseout",function(e){
		title[i].style.width="33.33%";
		title[i].style.height="5.5vh";
		title[i].style.fontSize="2em";
	})
}

logout.addEventListener("click",function(e){
	window.location.href = "login.html";
})
