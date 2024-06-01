const body = document.querySelector('body');
const div = document.querySelector('div');
const citiesList = document.querySelector('#citiesList');
const refreshButton = document.querySelector('#refresh');
const IFrameBackground = document.querySelector('#iframeBackground');
const IFrame = document.createElement('iframe');
const backBtn = document.querySelector("#back");
IFrameBackground.append(IFrame);

let str1 = "https://www.bing.com/search?q=famous+restaurants+and+cafes+in+";
let str2 = citiesList.value;
let source = str1.concat(str2);
IFrame.setAttribute("src", source);

//let tempVar = 0;

citiesList.addEventListener('change', function (e) {
	let str1 = "https://www.bing.com/search?q=famous+restaurants+and+cafes+in+";
	let str2 = citiesList.value;
	let source = str1.concat(str2);
	IFrame.setAttribute("src", source);
});

refreshButton.addEventListener('click', function (e) {
	let str1 = "https://www.bing.com/search?q=famous+restaurants+and+cafes+in+";
	let str2 = citiesList.value;
	let source = str1.concat(str2);
	IFrame.setAttribute("src", source);
});

backBtn.addEventListener("click", function (e) {
    window.location.assign("FoodHome.html");
})
