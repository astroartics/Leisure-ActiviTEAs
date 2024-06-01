const search = document.querySelector("#searchCuisine");
const backBtn = document.querySelector("#back");

function handleSelect(elm)
{
    document.getElementById(search.value).scrollIntoView({ behavior: 'smooth' });
    search.value = "";
}

backBtn.addEventListener("click", function (e) {
    window.location.assign("FoodHome.html");
})
