let langstate;
langstate = localStorage.getItem("langState") || 1

let rusnames = ["Национальный парк «Плитвицкие озёра», Хорватия","Курорт Голубая лагуна, Исландия","Скала Троллтунга, Норвегия","Скала Прекестулен, Норвегия","Озеро Блед, Словения","Алечский ледник, Швейцария"]
let engnames = ["Plitvice Lakes National Park, Croatia","Blue Lagoon Resort, Iceland","Trolltunga Rock, Norway","Prekestulen Rock, Norway","Lake Bled, Slovenia","Alets Glacier, Switzerland"]
let actualnames = []
const allslides = document.querySelectorAll(".slidetext")
function putnames(){
    if(langstate == 1){
        actualnames = rusnames;
    }else{
        actualnames = engnames;
        document.querySelector("a").textContent = "HOUMANS DETECTED US"
    }
    for(let i = 0; i <6;i++ ){
        allslides[i].innerHTML = actualnames[i]
    }
}
const slider = document.querySelector(".slider");
let currentIndex = 0;

function positionClick(event) {
    let startX
    let clientX
    if(isMobile()){
        startX = event.touches[0].clientX
    }else{
        clientX = event.clientX;
    }
    console.log(startX);
    if((clientX <= window.innerWidth / 2) || (startX <= window.innerWidth / 2)) {
        if (currentIndex > 0) {
            currentIndex--;
        }
    } else {
        if (currentIndex < slider.children.length - 1) {
            currentIndex++;
        }
    }
    slider.scrollTo({
        left: currentIndex * window.innerWidth,
        behavior: 'smooth'
    });
}
putnames()


function isMobile() {
    return /Mobi|Android/i.test(navigator.userAgent);
}
window.onresize = checkMobility
function checkMobility(){
    if (isMobile()) {
        window.addEventListener("touchstart", positionClick);
    
    } else {
        window.addEventListener("click", positionClick); 
    }
}
checkMobility()

