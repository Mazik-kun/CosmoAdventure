let achnames = []
let titlenames = []
let photonames = []
let pnames = []
const hes = document.querySelector(".ht")
const galera = document.querySelector(".galera")
const peshki = document.querySelectorAll(".hfour")
const langstate = localStorage.getItem("langState") || 1
const timepassed = localStorage.getItem("timepassed") || 0
const askers = localStorage.getItem("askers") || 0
const anusa = localStorage.getItem("anusa") || 4
const nick = localStorage.getItem("UserName") || "admin"
const skip = localStorage.getItem("Skip") || false
const continents = 1
let achievementstates = []
if(langstate == 1){
    titlenames = ["Первопроходец"]
    achnames = ["Первый шаг","Мастер вопросов","Знаток континентов","Скорострел","Гуру","Легенда","Инопланетяни нанин","Человекоподный"]
    photonames = ["Фото1","Фото2","Фото3","Фото4","Фото5","Фото6","Фото7","Фото8","Фото9","Фото10","Фото11","Фото12","Фото13","Фото14","Фото15","Фото16","Гланый девелопер",]
    hes.innerHTML = "Статистика"
    galera.innerHTML = "Галерея"
    pnames = ["Время потраченное на прохождение:","Задано вопросов:","Процент правильных ответов:","Изученных континентов:"]

}else{
    titlenames = ["Pioneer"]
    achnames = ["First Step", "Master of Questions", "Expert of Continents", "Quick Shooter", "Guru", "Legend", "Alien","Human a like"]
    photonames = ["Photo1", "Photo2", "Photo3", "Photo4", "Photo5", "Photo6", "Photo7", "Photo8", "Photo9", "Photo10", "Photo11", "Photo12", "Photo13", "Photo14", "Photo15","Photo16", "Main Developer",]
    hes.innerText = "Statistics"
    galera.innerHTML = "Gallery"
    pnames = ["Time spent on completion:", "Questions asked:", "Percentage of correct answers:", "Studied continents:"]
}
let answersAsked = localStorage.getItem("answersAsked") || 4
let howmany = answersAsked / anusa * 100
if(howmany > 101){
    howmany = "0"
}
for(let i = 0; i < pnames.length; i++){
    peshki[i].innerHTML = pnames[i]
}
if(skip == true){
    achievementstates[0] = true
}else{
    achievementstates[0] = false
}
if(askers >= 10){
    achievementstates[1] = true
}else{
    achievementstates[1] = false
}
if(continents >= 1){
    achievementstates[2] = true
}else{
    achievementstates[2] = false
}
if(timepassed <= 60){
    achievementstates[3] = true
}else{
    achievementstates[3] = false
}
if(anusa == 4){
    achievementstates[4] = true
}else{
    achievementstates[4] = false
}
if(nick == "Chicken Jackey"){
    achievementstates[5] = true
}else{
    achievementstates[5] = false
}
if(nick == "Human"){
    achievementstates[6] = true
}else{
    achievementstates[6] = false
}
if(askers >= 4 && timepassed >= 120){
    achievementstates[7] = true
}else{
    achievementstates[7] = false
}

const profileData = {
    nickname: nick,
    avatar: "../Images/Guide.png",
    titles: titlenames,
    achievements: [
        { name: achnames[0], unlocked: achievementstates[0] },
        { name: achnames[1], unlocked: achievementstates[1] },
        { name: achnames[2], unlocked: achievementstates[2] },
        { name: achnames[3], unlocked: achievementstates[3] },
        { name: achnames[4], unlocked: achievementstates[4] },
        { name: achnames[5], unlocked: achievementstates[5] },
        { name: achnames[6], unlocked: achievementstates[6] },
        { name: achnames[7], unlocked: achievementstates[7] }
    ],
    statistics: {
        timeSpent: timepassed + `sec`,
        questionsAsked: askers + `/12`,
        correctAnswers: howmany + `%`,
        learnedContinents: 1
    },
    photos: [
        { src: "../Images/back.png", caption: photonames[0] },
        { src: "../Images/hand.png", caption: photonames[1] },
        { src: "../Images/RightBack.png", caption: photonames[2] },
        { src: "../Images/FromMoon.png", caption: photonames[3] },
        { src: "../Images/SolarSystem.png", caption: photonames[4] },
        { src: "../Images/VoidBack.png", caption: photonames[5] },
        { src: "../Images/place1.jpg", caption: photonames[6] },
        { src: "../Images/place2.jpg", caption: photonames[7] },
        { src: "../Images/place3.jpg", caption: photonames[8] },
        { src: "../Images/place4.jpg", caption: photonames[9] },
        { src: "../Images/place5.jpg", caption: photonames[10] },
        { src: "../Images/place6.jpg", caption: photonames[11] },
        { src: "../Images/alien1.png", caption: photonames[12] },
        { src: "../Images/alien2.png", caption: photonames[13] },
        { src: "../Images/alien3.png", caption: photonames[14] },
        { src: "../Images/believe.jpg", caption: photonames[15] },
        { src: "../Images/photo.png", caption: photonames[16] },
    ]
};

// Заполнение данных профиля
document.getElementById("nickname").innerText = profileData.nickname;
document.getElementById("avatar").src = profileData.avatar;

// Заполнение титулов
const titlesContainer = document.getElementById("titles");
profileData.titles.forEach(title => {
    const titleElement = document.createElement("p");
    titleElement.innerText = title;
    titlesContainer.appendChild(titleElement);
});

// Заполнение ачивок
const achievementsContainer = document.getElementById("achievements");
profileData.achievements.forEach(achievement => {
    const achievementElement = document.createElement("div");
    achievementElement.className = "achievement" + (achievement.unlocked ? " unlocked" : "");
    achievementElement.innerText = achievement.name;
    achievementsContainer.appendChild(achievementElement);
});

document.getElementById("time-spent").innerText = profileData.statistics.timeSpent;
document.getElementById("questions-asked").innerText = profileData.statistics.questionsAsked;
document.getElementById("correct-answers").innerText = profileData.statistics.correctAnswers;
document.getElementById("learned-continents").innerText = profileData.statistics.learnedContinents;

const photoGallery = document.getElementById("photo-gallery");
profileData.photos.forEach(photo => {
    const photoElement = document.createElement("div");
    photoElement.className = "photo";
    photoElement.scrollSnapAlign = "start";

    const img = document.createElement("img");
    img.src = photo.src;
    img.alt = photo.caption;

    const caption = document.createElement("p");
    caption.innerText = photo.caption;

    photoElement.appendChild(img);
    photoElement.appendChild(caption);
    photoGallery.appendChild(photoElement);
});
