const refresh = document.querySelector("#refresh");
const iframe = document.querySelector("#information");
const backBtn = document.querySelector("#back");

const li = [];
const artists = ["Raja Ravi Varma","Vincent van Gogh", "Johannes Vermeer", "Edvard Munch", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo","Amrita Sher-Gil","S. H. Raza","M. F. Husain","Jamini Roy","Salvador Dali","Caravaggio","Sandro Botticelli","Rembrandt","Frida Kahlo","Paul Cezanne"];

let id = 0;

iframe.setAttribute("src", `https://en.wikipedia.org/wiki/${artists[0]}`);
for (let i = 0; i < artists.length; i++) {
    const li1 = document.createElement("li");
    const a1 = document.createElement("a");
    li1.setAttribute("id", `li${i}`);
    if (i === 0) { li1.classList.add("active"); }
    li1.append(a1);
    li1.style.padding = "14px 16px";
    li1.style.borderBottom = "0.1px solid rgb(167, 157, 144)";
    list.append(li1);
    li.push(li1);
    li[i].innerText = artists[i];
}

for (let i = 0; i < artists.length; i++) {
    li[i].addEventListener("click", function (e) {
        for (let j = 0; j < artists.length; j++) {
            li[j].classList.remove("active");
        }
        iframe.setAttribute("src", `https://en.wikipedia.org/wiki/${artists[i]}`);
        id = i;
        li[i].classList.add("active");
    })
}

refresh.addEventListener("click", function (e) {
    iframe.setAttribute("src", `https://en.wikipedia.org/wiki/${artists[id]}`);
});

backBtn.addEventListener("click", function (e) {
    window.location.assign("ArtHome.html");
})
