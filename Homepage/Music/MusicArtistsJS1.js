const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");
const img4 = document.querySelector("#img4");
const backBtn = document.querySelector("#back");

const img = [img1, img2, img3, img4];

for (let i = 0; i < 4; i++) {
    img[i].addEventListener("click", function (e) {
        window.location.assign("MusicArtists2.html");
        sessionStorage.setItem("clicked", i);
    })
}

backBtn.addEventListener("click", function (e) {
    window.location.assign("MusicHome.html");
})
