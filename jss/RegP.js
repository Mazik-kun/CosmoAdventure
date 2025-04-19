const input = document.querySelector("input");
const rusbutt = document.querySelectorAll("button")[0]
const engbutt = document.querySelectorAll("button")[1]
const conf = document.querySelectorAll("button")[2]
const start = document.querySelectorAll("button")[3]
const text = ["Как к вам обращаться?","How to call you","Начать Путешествие", "Start Journey","Подтвердить","Confirm"]
conf.onclick = saveName
input.addEventListener('keydown', (event) => {
    if (event.code == "Enter") {
        saveName();
    }
});
rusbutt.onclick = chooselang
engbutt.onclick = chooselang
start.onclick = Redirect;
function saveName() {
    const name = input.value;
    localStorage.setItem('UserName', name);
    input.style.display = 'none';
    conf.style.display = "none"
    start.style.display = 'block'
}
function Redirect(){
    window.location.assign("./Htmls/mainp.html");
}
function chooselang(){
    const status = this.dataset.state
    rusbutt.style.display = "none"
    engbutt.style.display = "none"
    input.style.display = "block"
    conf.style.display = "block"
    localStorage.setItem('langState', status);
    input.placeholder = text[parseInt(status) - 1]
    start.textContent = text[parseInt(status) + 1]
    conf.innerHTML = text[parseInt(status) + 3]
}
