//?Bir normal header hazirlayin uzerində logo, Home, About, Contact və.s kimi linklər, body-ə istədiyinizi yaza bilərsiz və bir button, Klik edəndə fərqli bir bir popup açılsın, icində thema seçimləri olsun, məsələn qarlı tema ( hər yer mavi tonlarda, yazılar və.s göy, ya da bahar theması, hər yer yaşıl buttonlar və.s çəhrayı və.s) yazmaqda classlist sizə kömək edəcək.
let a = document.querySelectorAll("a")
a.forEach(elem => {
    elem.classList.add("color-blue")
});
const body = document.querySelector("body");
let themeBtn = document.querySelector(".theme-btn")
const logo = document.querySelector("h4")
let themes = document.querySelector(".themes")
const box = document.querySelectorAll(".box");
themeBtn.classList.add("btn","winter-btn")
body.classList.add("snow-bg")
logo.classList.add("blueLogo")
themes.style.display = "none"

box.forEach(x => {
    x.addEventListener("click", () => {
        body.classList.remove("snow-bg", "spring-bg", "summer-bg", "autumn-bg")
        logo.classList.remove("redLogo","blueLogo","pinkLogo","yellowLogo")
        themeBtn.classList.remove("spring-btn","summer-btn","winter-btn","autumn-btn")
        if (x.classList.contains("snow-bg")) {
            body.classList.add("snow-bg")
            logo.classList.add("blueLogo")
            themeBtn.classList.add("winter-btn")
        } else if (x.classList.contains("spring-bg")) {
            body.classList.add("spring-bg")
            logo.classList.add("pinkLogo")
            themeBtn.classList.add("spring-btn")
        } else if (x.classList.contains("autumn-bg")) {
            body.classList.add("autumn-bg")
            logo.classList.add("redLogo")
            themeBtn.classList.add("autumn-btn")

        } else if (x.classList.contains("summer-bg")) {
            body.classList.add("summer-bg")
            logo.classList.add("yellowLogo")
            themeBtn.classList.add("summer-btn")

        }
    })

})
let isBool = true
themeBtn.addEventListener("click", () => {
    if (isBool == true) {
        themes.style.display = "block"
        isBool = false
    } else {
        themes.style.display = "none"
        isBool = true
    }
})