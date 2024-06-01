const backBtn = document.querySelector("#back");

backBtn.addEventListener("click", function (e) {
    window.location.assign("SportsHome.html");
})

const search = document.querySelector("#Game");

function handleSelect(elm)
{
    document.getElementById(search.value).scrollIntoView({behavior: "smooth", block: "center" });
    select.value="";
}
