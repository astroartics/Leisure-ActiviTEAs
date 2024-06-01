const div = document.querySelector('div');
const backBtn = document.querySelector("#back");

//let i = 0;

function loadDifferentVideos(channelID) {

    const loadVideo = iframe => {
        let channelUrl = encodeURIComponent(`https://www.youtube.com/feeds/videos.xml?channel_id=${channelID}`);
        let requestUrl = `https://api.rss2json.com/v1/api.json?rss_url=${channelUrl}`;

        fetch(requestUrl)
            .then(response => response.json())
            .then(result => {
                let videoNum = iframe.getAttribute('vnum')
                let link = result.items[videoNum].link
                let id = link.substring(link.indexOf('=') + 1)
                iframe.setAttribute('src', `https://youtube.com/embed/${id}?controls=0&autoplay=1`)
            })
            .catch(error => console.log(error))
    }

    for (let i = 0; i < 9; i++) {
        let iframes = document.createElement('iframe')
        iframes.setAttribute('width', '25%')
        iframes.setAttribute('height', '250')
        iframes.setAttribute('vnum', `${i}`)
        iframes.setAttribute('frameborder', '0')
        iframes.setAttribute('class', 'latestVideos')
        div.append(iframes);
        let iframes2 = document.getElementsByClassName('latestVideos')
        loadVideo(iframes2[i]);
    }
}

let random = Math.floor(Math.random() * 5) + 1;
console.log('Random : ', random);
if (random === 1) {
    loadDifferentVideos('UClM2LuQ1q5WEc23462tQzBg');
} else if (random === 2) {
    loadDifferentVideos('UC295-Dw_tDNtZXFeAPAW6Aw');
} else if (random === 3) {
    loadDifferentVideos('UC9CswYtb5rL31CHwyVoyJvQ');
} else {
    loadDifferentVideos('UCePDFpCr78_qmVtpoB1Axaw');
}


backBtn.addEventListener("click", function (e) {
    window.location.assign("ArtHome.html");
})
