const body = document.querySelector("body");
const closeImage = document.querySelector("#closeImage");
const mainImage = document.querySelector("#mainImage");
const title = document.querySelector("#title");
const imageOnDisplay = document.querySelector("#imageOnDisplay");
const pictures = document.querySelector("#pictures");
const div2 = document.querySelector("#allImages");
const backBtn = document.querySelector("#back");

closeImage.style.display = "none";
mainImage.style.visibility = "hidden";
imageOnDisplay.style.display = "none";
title.style.color = "white";

const collections = [928423,10538333,9665072,1593161,1361883,647,228444,3439998,"D8EBqLZTRNU",589987,88122253,1699287];

closeImage.addEventListener("click", function (e) {
    imageOnDisplay.style.display = "none";
    mainImage.style.visibility = "hidden";
    imageOnDisplay.style.display = "none";
    pictures.setAttribute("class", "col-12");
});

function onImgClick(source, caption) {
    mainImage.setAttribute("src", source);
    mainImage.style.visibility = "visible";
    imageOnDisplay.style.display = "block";
    closeImage.style.display = "block";
    title.innerText = caption;
    pictures.setAttribute("class", "col-6");
}

const getImage = async function (number) {
    try {
        const url = `https://source.unsplash.com/collection/${collections[Math.floor(Math.random() * collections.length)]}/?sig=${number}`;

	const image = document.createElement('img');
        image.setAttribute("src", url);
        image.setAttribute("height", "150vh");
        image.setAttribute("onerror", "this.style.display='none'")
        image.setAttribute("onClick", "onImgClick(src,alt)")

        div2.append(image);
        pictures.append(div2);
    } catch (e) {
        console.log("ERROR : " + e);
    }
}

for (let i = 0; i < 55; i++) {
    getImage(i);
}

backBtn.addEventListener("click", function (e) {
    window.location.assign("PhotographyHome.html");
})
