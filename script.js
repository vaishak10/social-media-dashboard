function setBG(value) {
    console.log(value);
    if (parseInt(value) === 1) {
        document.querySelector("body").style.cssText = "background-color:#fff;color: hsl(0, 0%, 100%);";
        document.querySelector(".top-background").style.cssText = "background-color:hsl(227, 47%, 96%);color: hsl(0, 0%, 100%);";
        document.querySelector(".dashboard-heading > h1").style.cssText = "color:#000";
        document.querySelector(".overview-2 > h1").style.cssText = "color:#000";
        let cols = document.querySelectorAll(".col-1,.col-2,.col-3,.col-4")
        for (let i = 0; i < cols.length; i++) {
            cols[i].style.cssText = "background-color: hsl(227, 47%, 96%);";
        }
        let followerCount = document.querySelectorAll(".followers-count");
        console.log(followerCount.length);
        for (let i = 0; i < followerCount.length; i++) {
            followerCount[i].style.cssText = "color: #000;";
        }
        let todayCount = document.querySelectorAll(".today-count");
        console.log(todayCount);
        for (let i = 0; i < todayCount.length; i++) {
            todayCount[i].style.cssText = "color: #000;";
        }
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
    }
};