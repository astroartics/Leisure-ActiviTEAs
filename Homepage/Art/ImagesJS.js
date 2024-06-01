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

let iiifStandard;

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
    //document.body.scrollTop = document.documentElement.scrollTop = 0;
}

const getImage = async function (number) {
    try {
        const response = await fetch(`https://api.artic.edu/api/v1/artworks/${number}?fields=id,title,image_id`);
        const json = await response.json();
        console.log(JSON.stringify(json));
        console.log(json.data.image_id);
        console.log(json.data);

        if (json.data.image_id != null) {
            iiifStandard = `https://www.artic.edu/iiif/2/${json.data.image_id}/full/843,/0/default.jpg`;

            const image = document.createElement('img');
            image.setAttribute("src", iiifStandard);
            image.setAttribute("height", "150vh");
            image.setAttribute("onerror", "this.style.display='none'")
            image.setAttribute("alt", `${json.data.title}`)
            image.setAttribute("onClick", "onImgClick(src,alt)")

            div2.append(image);
            pictures.append(div2);
        }
    } catch (e) {
        console.log("ERROR : " + e);
    }
}

for (let i = 27900; i < 28100; i++) {
    getImage(i);
}

backBtn.addEventListener("click", function (e) {
    window.location.assign("ArtHome.html");
})
