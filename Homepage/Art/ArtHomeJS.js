const Home = document.querySelector("#Home");
const imageBack = document.querySelector("#ImageBack");

const li = [li1, li2, li3, li4, li5];

for(let i=1;i<=19;i++){
	let img = document.createElement("img");
	img.setAttribute("src",`Images/Img${i}.jpg`);
	img.setAttribute("id",`Images/Img${i}`);
	imageBack.append(img);
}


Home.addEventListener("click", function (e) {
     window.location.assign("../Homepage.html");
})
