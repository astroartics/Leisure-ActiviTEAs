const li1 = document.querySelector("#li1");
const li2 = document.querySelector("#li2");
const li3 = document.querySelector("#li3");
const li4 = document.querySelector("#li4");
const Home = document.querySelector("#Home");
const imageBack = document.querySelector("#ImageBack");

const li = [li1, li2, li3, li4];

for(let i=1;i<=19;i++){
	let img = document.createElement("img");
	img.setAttribute("src",`FoodBack/Img${i}.jpg`);
	img.setAttribute("id",`FoodBack/Img${i}`);
	imageBack.append(img);
}

Home.addEventListener("click", function (e) {
     window.location.assign("../Homepage.html");
})
