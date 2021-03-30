setInterval(function() {
    var skipBtn = document.getElementsByClassName("ytp-ad-skip-button")
    if (skipBtn != undefined && skipBtn.length > 0){
        console.log("Ad detected");
        skipBtn[0].click(); 
    }
},2000)