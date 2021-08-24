function setBG(value) {
    console.log(value);
    if (parseInt(value) === 1) {
        document.querySelector("body").style.cssText = "background-color:#fff;color: hsl(0, 0%, 100%);";
        document.querySelector(".top-background").style.cssText = "background-color:hsl(225, 100%, 98%);color: hsl(0, 0%, 100%);";
        document.querySelector(".dashboard-heading > h1").style.cssText = "color:#000";
        document.querySelector(".overview-2 > h1").style.cssText = "color:hsl(228, 12%, 44%)";
        let cols = document.querySelectorAll(".col-1,.col-2,.col-3,.col-4")
        for (let i = 0; i < cols.length; i++) {
            cols[i].style.cssText = "background-color: hsl(227, 47%, 96%);";
        }
        let followerCount = document.querySelectorAll(".followers-count");
        for (let i = 0; i < followerCount.length; i++) {
            followerCount[i].style.cssText = "color: #000;";
        }
        let todayCount = document.querySelectorAll(".today-count");
        for (let i = 0; i < todayCount.length; i++) {
            todayCount[i].style.cssText = "color: #000;";
        }
        document.querySelector(".slider").style.cssText = "background-color: hsl(230, 22%, 74%) !important;background-image:none;";
        let rules = document.styleSheets[0].rules;
        document.styleSheets[0].insertRule("input[type='range']::-webkit-slider-thumb {background-color: hsl(225, 100%, 98%);}", rules.length);
    } else {
        document.querySelector("body").style.cssText = "background-color: hsl(230, 17%, 14%);";
        document.querySelector(".top-background").style.cssText = "background-color:hsl(232, 19%, 15%);color:hsl(230, 17%, 14%)";
        document.querySelector(".dashboard-heading > h1").style.cssText = "";
        document.querySelector(".overview-2 > h1").style.cssText = "";
        let cols = document.querySelectorAll(".col-1,.col-2,.col-3,.col-4")
        for (let i = 0; i < cols.length; i++) {
            cols[i].style.cssText = "background-color: hsl(228, 28%, 20%);";
        }
        let followerCount = document.querySelectorAll(".followers-count");
        for (let i = 0; i < followerCount.length; i++) {
            followerCount[i].style.cssText = "";
        }
        let todayCount = document.querySelectorAll(".today-count");
        for (let i = 0; i < todayCount.length; i++) {
            todayCount[i].style.cssText = "";
        }
        document.querySelector(".slider").style.cssText = "background-image: linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%));";
        let rules = document.styleSheets[0].rules;
        document.styleSheets[0].insertRule("input[type='range']::-webkit-slider-thumb {background-color: #261C2C;}", rules.length);
    }
};