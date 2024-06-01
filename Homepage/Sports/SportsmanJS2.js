const refresh = document.querySelector("#refresh");
const iframe = document.querySelector("#information");
const backBtn = document.querySelector("#back");
const list = document.querySelector("#list");
let id = 0;

let li = [];
const badminton = ["Lin Dan", "PV Sindhu", "Parupalli Kashyap", "Lee Chong Wei", "Taufik Hidayat", "Peter Hoeg Gade", "Saina Nehwal", "Kento Momota", "Viktor Axelsen", "Chen Long","Ashwini Ponnappa","Aparna Popat","Prakash Padukone","Pullela Gopichand","Jwala Gutta","Srikanth Kidambi"];

const cricket = ["Sachin Tendulkar", "Hardik Pandya", "Chris Gayle", " AB De Villiers", "MS Dhoni", "Ben Stokes", "Don Bradman", "Virat Kohli", "Sir Viv Richards", "Shane Warne","Rahul Dravid","Sunil Gavaskar","Virender Sehwag","Sourav Ganguly","Lasith Malinga","Kapil Dev","James Anderson"];

const wrestling = ["Sushil Kumar", "Geeta Phogat", "John Cena", "Yogeshwar Dutt", "Steve Austin", "Shawn Mitchell", "The Rock", "The Undertaker", "Ric Flair", "Roman Reigns","Hulk Hogan","Ric Flair","Roddy Piper","Shawn Michaels","Chris Jericho","Kurt Angle"];

const hockey = ["Dhyan Chand", "Balbir Singh", "Dhanraj Pillay", "Jamie Dwyer", "Alex Ovechkin", "Jacques Plante", "Steve Yzerman", "Terry Sawchuk", "Jean Beliveau", "Maurice Richard","Brett Hull", "Ken Dryden", "Joe Sakic", "Paul Coffey","Martin Brodeur", "Ray Bourque"];

const football = ["Lionel Messi", "Cristiano Ronaldo", "Xavi", "Neymar", "Sergio Ramos", "Andrea Pirlo", "Ramires", "Marcelo Vieira da Silva", "Ezequiel Lavezzi", "Christian Eriksen", "Victor Wanyama", "Vincent Kompany", "Ashley Cole", "Thomas Muller", "Carlos Tevez", "Mario Gomez"];

const tennis = ["Serena Williams", "Roger Federer", "Maria Sharapova", "Naomi Osaka", "Rafael Nadal", "Novac Djokovic", "Steffi Graf", "Chris Evert", "Martina Hingis", "Andre Agassi", "Billie Jean King", "Pete Sampras", "Martina Navratilova", "Venus Williams", "Rod Laver", "Bjorn Borg"];

const volleyball = ["Jimmy George","Karch Kiraly","Kerri Walsh Jennings","Misty May-Treanor","Lorenzo Bernardi","Regla Torres","Sheilla Tavares de Castro","Gilberto Godoy Filho","Kim Yeon-Koung","Ricardo Lucarelli Souza","Saeid Marouf","Facundo Conte","Steve Timmons","Francesca Piccinini","Ivan Zaytsev","Gabrielle Reece"];

const tableTennis = ["Ma Long", "Fan Zhendong", "Xu Xin", "Sharath Kamal", "Jan-Ove Waldner", "Manika Batra", "Wang Liqin", "Liu Guoliang", "Ichiro Ogimura", "Zoran Primorac", "Dimitrij Ovtcharov", "Liang Jingkun", "Lin Gaoyuan", "Lin Yun-ju", "Tomokazu Harimoto"];

const swimming = ["Mark Spitz", "Michael Phelps", "Ian Thorpe", "Aleksandr Popov", "Pieter van den Hoogenband", "Johnny Weissmuller", "Grant Hackett", "Krisztina Egerszegi", "Debbie Meyer", "Kristin Otto", "Richa Mishra", "Katie Ledecky", "Natalie Coughlin", "Janet Evans", "Tracy Caulkins", "Vladimir Valeryevich Salnikov"];

const sports = [badminton, cricket, wrestling, hockey, football, tennis, volleyball, tableTennis, swimming];
const sportNum = sessionStorage.getItem("clicked");

iframe.setAttribute("src", `https://en.wikipedia.org/wiki/${sports[sportNum][0]}`);
for (let i = 0; i < sports[sportNum].length; i++) {
    const li1 = document.createElement("li");
    const a1 = document.createElement("a");
    li1.setAttribute("id", `li${i}`);
    if (i === 0) { li1.classList.add("active"); }
    li1.append(a1);
    li1.style.padding = "14px 16px";
    li1.style.borderBottom = "0.1px solid rgb(167, 157, 144)";
    list.append(li1);
    li.push(li1);
    li[i].innerText = sports[sportNum][i];
}

function viewPlayerDetails() {
    for (let i = 0; i < sports[sportNum].length; i++) {
        li[i].addEventListener("click", function (e) {
            for (let j = 0; j < sports[sportNum].length; j++) {
                li[j].classList.remove("active");
            }

            iframe.setAttribute("src", `https://en.wikipedia.org/wiki/${sports[sportNum][i]}`);

            id = i;
            li[i].classList.add("active");
        })
    }
}

refresh.addEventListener("click", function (e) {
    iframe.setAttribute("src", `https://en.wikipedia.org/wiki/${sports[sportNum][id]}`);
});

backBtn.addEventListener("click", function (e) {
    window.location.assign("Sportsman1.html");
})

viewPlayerDetails();



/*
// const li1 = document.querySelector("#li1");
// const li2 = document.querySelector("#li2");
// const li3 = document.querySelector("#li3");
// const li4 = document.querySelector("#li4");
// const li5 = document.querySelector("#li5");
// const li6 = document.querySelector("#li6");
// const li7 = document.querySelector("#li7");
// const li8 = document.querySelector("#li8");
// const li9 = document.querySelector("#li9");
// const li10 = document.querySelector("#li10");




function viewPlayerDetails() {
    for (let i = 0; i < 10; i++) {
        li[i].addEventListener("click", function (e) {
            for (let j = 0; j < 10; j++) {
                li[j].classList.remove("active");
            }
            if (sportNum === "0") {
                iframe.setAttribute("src", `https://en.wikipedia.org/wiki/${badminton[i]}`);
            } else if (sportNum === "1") {
                iframe.setAttribute("src", `https://en.wikipedia.org/wiki/${cricket[i]}`);
            } else if (sportNum === "2") {
                iframe.setAttribute("src", `https://en.wikipedia.org/wiki/${wrestling[i]}`);
            } else if (sportNum === "3") {
                iframe.setAttribute("src", `https://en.wikipedia.org/wiki/${hockey[i]}`);
            }

            id = i;
            li[i].classList.add("active");
        })
    }
}
*/
