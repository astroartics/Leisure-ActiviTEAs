const refresh = document.querySelector("#refresh");
const iframe = document.querySelector("#information");
const backBtn = document.querySelector("#back");
const list = document.querySelector("#list");
let id = 0;

let li = [];

const rock = ["Linkin Park","The Beatles","The Rolling Stones","Led Zeppelin","Fleetwood Mac","Pink Floyd","The Doors","The Who","The Beach Boys","Van Halen","Aerosmith","Elvis Presley","Foo Fighters","Prince & The Revolution","Guns N' Roses","The Jimi Hendrix Experience"];

const edm = ["Alan Walker","David Guetta","Avicii","Marshmello","Diplo","Illenium","Galantis","Calvin Harris","The Chainsmokers","DJ Snake","Steve Aoki","Kygo","Major Lazer","Clean Bandit","Zedd","Daft Punk","Skrillex"];

const pop = ["The Weeknd","Katy Perry","Miley Cyrus","Justin Bieber","Selena Gomez","Shakira","Bruno Mars","Dua Lipa","Billie Eilish","Doja Cat","Madonna","Demi Lovato","Taylor Swift","Backstreet Boys","Britney Spears","Lady Gaga"];

const jazz = ["John Coltrane","Duke Ellington","Billie Holiday","Charles Mingus","Ella Fitzgerald","Louis Armstrong","Ornette Coleman","Miles Davis","Thelonious Monk","Keith Jarrett","Nat King Cole","Chet Baker","Charlie Parker","Art Tatum","Dizzy Gillespie","Herbie Hancock"];

const genres = [rock,edm,pop,jazz];
const genreNum = sessionStorage.getItem("clicked");

iframe.setAttribute("src", `https://en.wikipedia.org/wiki/${genres[genreNum][0]}`);
for (let i = 0; i < genres[genreNum].length; i++) {
    const li1 = document.createElement("li");
    const a1 = document.createElement("a");
    li1.setAttribute("id", `li${i}`);
    if (i === 0) { li1.classList.add("active"); }
    li1.append(a1);
    li1.style.padding = "14px 16px";
    li1.style.borderBottom = "0.1px solid rgb(167, 157, 144)";
    list.append(li1);
    li.push(li1);
    li[i].innerText = genres[genreNum][i];
}

function viewArtistDetails() {
    for (let i = 0; i < genres[genreNum].length; i++) {
        li[i].addEventListener("click", function (e) {
            for (let j = 0; j < genres[genreNum].length; j++) {
                li[j].classList.remove("active");
            }

            iframe.setAttribute("src", `https://en.wikipedia.org/wiki/${genres[genreNum][i]}`);

            id = i;
            li[i].classList.add("active");
        })
    }
}

refresh.addEventListener("click", function (e) {
    iframe.setAttribute("src", `https://en.wikipedia.org/wiki/${genres[genreNum][id]}`);
});

backBtn.addEventListener("click", function (e) {
    window.location.assign("MusicArtists1.html");
})

viewArtistDetails();
