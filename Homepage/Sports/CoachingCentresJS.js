const body = document.querySelector('body');
const div = document.querySelector('div');
const citiesList = document.querySelector('#citiesList');
const selectSport = document.querySelector('#selectSport');
const refreshButton = document.querySelector('#refresh');
const IFrameBackground = document.querySelector('#iframeBackground');
const IFrame = document.createElement('iframe');
const backBtn = document.querySelector("#back");
IFrameBackground.append(IFrame);

let str1 = "https://www.bing.com/search?q=coaching+centres+for+";
let str2 = selectSport.value;
let str3 = "+in+";
let str4 = citiesList.value;
let source = str1.concat(str2,str3,str4);
IFrame.setAttribute("src", source);

citiesList.addEventListener('change', function (e) {
	let str1 = "https://www.bing.com/search?q=coaching+centres+for+";
	let str2 = selectSport.value;
	let str3 = "+in+";
	let str4 = citiesList.value;
	let source = str1.concat(str2,str3,str4);
	IFrame.setAttribute("src", source);
});

selectSport.addEventListener('change', function (e) {
	let str1 = "https://www.bing.com/search?q=coaching+centres+for+";
	let str2 = selectSport.value;
	let str3 = "+in+";
	let str4 = citiesList.value;
	let source = str1.concat(str2,str3,str4);
	IFrame.setAttribute("src", source);
});

refreshButton.addEventListener('click', function (e) {
	let str1 = "https://www.bing.com/search?q=coaching+centres+for+";
	let str2 = selectSport.value;
	let str3 = "+in+";
	let str4 = citiesList.value;
	let source = str1.concat(str2,str3,str4);
	IFrame.setAttribute("src", source);
});

backBtn.addEventListener("click", function (e) {
    window.location.assign("SportsHome.html");
})
