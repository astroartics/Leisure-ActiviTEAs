const videos = document.querySelector('#videos');
const backBtn = document.querySelector("#back");
const languages = document.querySelector('#Languages');

function loadPlaylists(playlistID,i){
	const iframe = document.querySelector(`#i${i}`);
	iframe.setAttribute('width', '20%');
	iframe.setAttribute('height', '220px');
	iframe.setAttribute('src', `https://www.youtube.com/embed/videoseries?list=${playlistID}`)
	videos.append(iframe);
}	

languages.addEventListener('change', function (e) {
	if(languages.value==="Hindi"){
		loadPlaylists('PLgneFNebuPpeH8RVvHxVinWTioZCuhMAD',1);	
		loadPlaylists('PLHM4Qas12Eo60v5S4jCBroz47GlBuquIg',2);
		loadPlaylists('PLHRMRQYFhciPBaLtS8yY4hQ8GI_IW3WfZ',3);
		loadPlaylists('PLGb4vbMWyI-10b064S09MgvspGFOGQpBo',4);
		loadPlaylists('PLpART-zVau2bQIycikGpporBJvoVMKSGb',5);
		loadPlaylists('PLpUZ06MlpWaBDomczo6ftjdOAL3KNLk2z',6);
		loadPlaylists('PLGVlK6upy9sjQXAWo8BYCZeAZiuc8Deov',7);
		loadPlaylists('PLR_BHDWcA6CgLEBc8vyIRDQdIh6ZkLwji',8);
	}else if(languages.value==="English"){
		loadPlaylists('PLhsz9CILh357zA1yMT-K5T9ZTNEU6Fl6n',1);	
		loadPlaylists('PL64G6j8ePNureM8YCKy5nRFyzYf8I2noy',2);
		loadPlaylists('PLDIoUOhQQPlWm_njQtKkNIk5RYSGgzomm',3);
		loadPlaylists('PL-68F4DJR3dAVFjtKM1aReGzwFruaLodU',4);
		loadPlaylists('PLfWTbASpwTDiVOkVmOU2QA97pFtR0fXj6',5);
		loadPlaylists('PLrxXqHDadmdcBen3zGdAWiGSVOcS0JfMK',6);
		loadPlaylists('PLK2zhq9oy0K6rjySCH1nARTssbv8m2Kfm',7);
		loadPlaylists('PLMp5rDgAZPCi51aybeg5YZwvTPbBDT3a8',8);
	}
});

backBtn.addEventListener("click", function (e) {
    window.location.assign("MusicHome.html");
})
