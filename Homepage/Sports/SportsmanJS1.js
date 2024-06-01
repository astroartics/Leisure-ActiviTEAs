const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");
const img4 = document.querySelector("#img4");
const img5 = document.querySelector("#img5");
const img6 = document.querySelector("#img6");
const img7 = document.querySelector("#img7");
const img8 = document.querySelector("#img8");
const img9 = document.querySelector("#img9");
const backBtn = document.querySelector("#back");

const img = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

for (let i = 0; i < 9; i++) {
    img[i].addEventListener("click", function (e) {
        window.location.assign("Sportsman2.html");
        sessionStorage.setItem("clicked", i);
    })
}

backBtn.addEventListener("click", function (e) {
    window.location.assign("SportsHome.html");
})
