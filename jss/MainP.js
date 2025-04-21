let MesGreet = []
let MesGreet2 = []
let MesGreet3 = []
let MesGreet4 = []
let questions= []
let questions2= []
let questions3 = []
let questions4 = []
let answers= []
let answers2= []
let answers3 = []
let answers4 = []
let afterquest= []
let afterquest2= []
let ansans= []
let ansans2 = []
let anotherquest = []
let anotherans = []
let langstate = localStorage.getItem("langState") || 1
if(langstate == 2){
    MesGreet = [ 
        "Greetings, galactic traveler", 
        "I am your AI guide on this journey",
        "Feel free to ask me about interesting points",
        "Your journey begins here, near the wormhole leading to the Solar system",
        "Do not confuse this with a black hole, the journey is 100% safe and approved by the Galactic Confederation of Intelligent Beings",
        "Commercial break",
        "Insure yourself against the attack of wild glypglop, from an unexpected fall from a spaceship with DTNT!",
        "The end of the commercial break",
        "We are approaching the wormhole. We'll be in the Solar System soon.", 
        "Do you have any questions?" 
            ];
        
    questions = [
        "What is a black hole? What is the difference between a black hole and wormholes?",
        "Where is the solar system? Why is she the destination of the trip?",
        "What does DTNT mean?",
        "What is AI?",
        "No questions",
        ];
        
    answers= [
        "A black hole is an area in space with such strong gravity that nothing can escape from it, which is formed when a massive star collapses. On the other hand, a wormhole is the shortest path through space-time. In short, black holes hold matter and energy, while wormholes are bridges in the universe.",
        "The solar system is located in sector 562009 of non-confederated domains. This is interesting because the only semi-intelligent creatures there have evolved to 0.002 race development coefficient, without ceasing to kill each other. Usually, such hostile primitive creatures do not even live to 0.0007",
        "This is the company's slogan. Die tommorow - not today",
        "AI is an artificial intelligence",
        ];
    afterquest = [
        "Since we're out of questions, I suggest we dive into the blackhole. I menat wormhole of course!"
    ]
    MesGreet2 = [
        "OOOPSIE DOOPSIE",
        "I think we're in the wrong wormhole",
        "It's not a problem, haha. I hope so!",
        "We are still close enough to reach the Ground",
        "So that it won't be boring, let me do a little quiz",
        ]
    questions2 = [
        "What is a black hole and how does it form?",
        "What are comets and what are they made of?",
        "What is a galaxy and how many galaxies do scientists estimate exist in the universe?",
        "How do you rate your guide?"
    ]
    answers2 = [
        "This is a region of space where gravity is so strong that even light cannot escape from it. It forms when a massive star collapses under its own gravity.",
        "It's just a black hole in space where there is no light",
        "It's a place where all the lost socks gather",
        "It's an area where gravity is so strong that stars and planets start to collapse",
        "It's big snowballs, flying in space and consisting of frozen stars",
        "These are icy bodies made up of ice, dust and gases that form in the cold parts of the Solar system and create a tail as they approach the Sun",
        "These are meteoroids made of rocks and metals, but sometimes they can be made of light",
        "These are icy objects that form from gases when the stars are starting to explode",
        "This is a place where aliens live, and scientists think there are only 10 of them",
        "This is a system of stars and planets, and scientists think there are many of them because they are constantly being lost in space",
        "It's a vast system of stars, gas and dust, bound together by gravity. Scientists estimate that there are about 2 trillion galaxies in the observable universe.",
        "This place is somewhere between elephants and turtles. Since there are three turtles, there are 3 galaxies.",
        "An assistant with artificial intelligence is very useful and does not let me get bored",
        "Quite normal",
        "I'm not interested in tests, I just wanted to look at the under-civilization",
        "Almighty Rick, when will you let me enjoy the silence?",
    ]
    afterquest2 = ["Since you have run out of questions, I suggest we head to the planet."]
    ansans = [
        "Congratulations! This is true because it accurately describes black holes and their formation.",
        "Is incorrect because a black hole is defined not by the absence of light, but by its strong gravitational pull. It is formed as a result of the collapse of a massive star, and not just because of a lack of light",
        "An interesting analogy, but incorrect. Black holes are astronomical objects formed from collapsing stars, not bizarre collections of lost objects.",
        "Wrong, because it distorts the way black holes work. Stars and planets do not collapse; rather, they can be sucked into a black hole if they get too close, and their matter is compressed into an infinitely dense point called a singularity.",
        "The statement is false because comets are not made of stars; they are made of ice, dust, and rocky materials. The analogy with big snowballs is too simplistic and misleading",
        "You're really right",
        "Wrong, because comets are not made of light; they are made of ice, dust, and rocky materials. Meteoroids are different from comets and do not have the same composition.",
        "The statement is incorrect because comets are not formed as a result of the explosion of stars. They occur in cold regions of the Solar System, such as the Kuiper Belt and the Oort cloud, and are not directly related to stellar explosions.",
        "The statement is incorrect because it simplifies the concept of galaxies. Galaxies are vast systems of stars, gas, and dust, and it is estimated that there are about 2 trillion galaxies in the observable universe, not just 10.",
        "The statement is misleading because galaxies are not lost in space; they are stable structures held together by gravity. A huge number of galaxies are related to the large-scale structure of the universe, and not to the fact that they are located out of place.",
        "Wow, you even know that, I think you will answer the following question correctly!",
        "The statement is meaningless and incorrect, because it mixes unrelated concepts and does not correspond to reality. This is an inaccurate description of what a galaxy is. Galaxies are not defined by arbitrary comparisons with animals or numbers",
        "Of course I am. Now let's speed up!",
        "Okay, got it",
        "Hey, I'm trying here!",
        "HAHA. BY the way, did you know that sound doesn't travel in space? No one will bother you, just like you won't bother anyone with your screams.",
        ]
    MesGreet3 = [
        "The quiz is over, but our journey is not. Before landing on Earth, I suggest you visit its satellite",
        "So, we are on the moon, the only natural satellite of the earth. It's a beautiful view, isn't it?",
        "Life on earth cannot exist without it. Its gravity creates tidal waves, the light reflected by it helps to navigate at night",
        "The advanced theory of the appearance of life on earth suggests that the moon appeared as a result of the collision of the earth with an object so huge that it broke off part of the earth and the fragment turned into the moon",
        "The moon has accompanied the earth for 4.5 billion years and changed its shape",
        "Now the earth is slightly convex from the equator, the diameter of the equator is 0.33% larger than the poles",
        "It is interesting that the moon is gradually moving away from the earth due to this small difference in the size of the diameters",
        "It sounds scary, but they are afraid here There's nothing to worry about - after 50 billion years, it will finally stabilize and stop changing its location in any way",
        "Perhaps you have questions about the moon or life on earth. I will be happy to answer them"
    ]
    questions3 = [
        "How many years has life existed on earth? What is its history?",
        "What happens to the earth if the moon disappears?",
        "When we get to earth, people won't attack us?",
        "Was this civilization and a species of intelligent beings the only ones who reached this level of development?",
        "No questions"
    ]
    answers3 = [
        "Life on Earth has existed for about 3.5 billion years. The first protozoa appeared in the oceans. Multicellular organisms appeared 600 million years ago. 360 million years ago, the first plants and animals began to appear on land. Evolution continued, eventually leading to the appearance of the naked ape (humans).",
        "If the moon suddenly disappears, catastrophic changes will occur on Earth. Giant tsunamis will start first, as the tides will be disrupted. The climate will change, which will lead to sudden temperature fluctuations. Many species of animals that depend on the moon may become extinct. Eventually, the Earth will become more vulnerable to meteorites and space threats.",
        "Do not be afraid, our scientists already visited earth a couple of glor years ago and people did not notice them at all. They simply can't see our ships while the disguise is activated.",
        "They're the first, yes. After them, we believe that dolphins, for example, or other equally intelligent creatures, crows, can reach the same development."
    ]
    MesGreet4 = [
        "I will prepare you for what awaits you",
        "We will visit one of the parts of the world of the earth - Europe",
        "We will stop to look at several attractions and on this tour will it end",
        "Do you have any questions?"
    ]
    questions4 = [
        "What kind of tour is this where we spent more time traveling than on the tour itself????",
        "What kind of sights are waiting for us? Are we going to look at the great buildings of human civilization?",
        "Hey, you promised the opportunity to visit any point of the world in the newsletter! Return the money, I didn't sign up for this!",
        "Can I take an animal from earth as a souvenir?",
        "No questions"
    ]
    answers4 = [
        "Korblock doesn't have a tour, just a path. The bulletin also clearly states how much time we will spend and where",
        "What great buildings? Such a civilization has nothing interesting to build, but their planet creates impressive places.",
        "According to the 42nd amendment of the Law 23 on tourism on unintelligent planets of the Confederation of Intelligent Beings, our company has the right to change the route by notifying the client in advance. And we did it, you signed a consent form before the tour.",
        "No, there are many reasons for this, but the fact that you can contract an earth disease should be enough."
]

}else if(langstate == 1){
    MesGreet = [
        "Приветствую вас, галактический путешественник",
        "Я ваш ИИ гид в этом путешествии",
        "Не стесняйтесь спрашивать меня об интересных моментах.",
        "Ваше путешествие начинается здесь, возле червоточины, ведущей в Солнечную систему.",
        "Не путайте это с черной дырой, путешествие на 100% безопасно и одобрено галактической конфедерацией разумных существ ",
        "Рекламная пауза",
        "Застрахуйте себя от нападения диких глипглоп, от неожиданного падении из космического корабля с DTNT!",
        "Конец рекламной паузы",
        "Мы приближаемся к червоточине. Скоро мы будем в Солнечной системе",
        "У вас есть какие-нибудь вопросы?",
        ];
        
    questions = [
        "Что такое черная дыра? В чем разница между черной дырой и червоточинами?",
        "Где находится Солнечная система? Почему именно она пункт назначения путешествия?",
        "Что означает DTNT?",
        "Что такое ИИ?",
        "Вопросов нет",
        ];
        
    answers= [
        "Черная дыра - это область в космосе с такой сильной гравитацией, что ничто не может вырваться из нее, которая образуется при коллапсе массивной звезды. С другой стороны, червоточина - это кратчайший путь через пространство-время. Короче говоря, черные дыры удерживают материю и энергию, в то время как червоточины являются мостами во Вселенной",
        "Солнечная система расположена в секторе 562009 из неконфедеративных доменов. Это интересно тем, что единственные полуразумные существа там развились до 0,002 коэффициента развития расы, не переставая убивать друг друга. Обычно такие враждебно настроенные примитивные существа не доживают даже до 0,0007",
        "Это слоган компании. Die tommorow - not today",
        "ИИ это искуственный интелект",
        ];
    afterquest = [
        "Поскольку у нас закончились вопросы, я предлагаю нырнуть с головой в черную дыру. Чертовоточину я имел ввиду!"
        ]

    MesGreet2 = [
        "ОООЙ ЕЕЕЙ",
        "Я думаю, мы попали не в ту червоточину",
        "Это не проблема, ха-ха. Я надеюсь на это!",
        "Мы все еще достаточно близко, чтобы долететь до Земли",
        "Чтобы не было скучно, позвольте мне провести небольшую викторину",
        ]
    questions2 = [
        "Что такое черная дыра и как она образуется?",
        "Что такое кометы и из чего они сделаны?",
        "Что такое галактика и сколько галактик, по оценкам ученых, существует во Вселенной?",
        "Как вы оцениваете своего гида?"
        ]
    answers2 = [
        "Это область пространства, где гравитация настолько сильна, что даже свет, не может вырваться из нее. Она образуется, когда массивная звезда коллапсирует под действием собственной гравитации.",
        "Это просто черная дыра в космосе, где нет света",
        "Это место, где собираются все потерянные носки",
        "Это область, где гравитация настолько сильна, что звезды и планеты начинают сжиматься",
        "Это большие снежки, летающие в космосе и состоящие из замерзших звезд",
        "Это ледяные тела, состоящие изо льда, пыли и газов, которые образуются в холодные части Солнечной системы и создают хвост при приближении к Солнцу",
        "Это метеороиды, состоящие из камней и металлов, но иногда они могут быть сделаны из света",
        "Это ледяные объекты, которые образуются из газов, когда звезды начинают взрываться",
        "Это место, где живут инопланетяне, и ученые думают, что их всего 10",
        "Это система звезд и планет, и ученые думают, что их много, потому что они постоянно теряются в космосе",
        "Это обширная система звезд, газовых, и пыль, связанная вместе силой тяжести. По оценкам ученых, в обозримой Вселенной насчитывается около 2 триллионов галактик.",
        "Это место где-то между слонами и черепахами. Поскольку черепах три, то и галактик 3.",
        "Помощник с искусственным интеллектом очень полезен и не дает мне заскучать",
        "Вполне нормальный",
        "Меня не интересуют тесты, я просто хотел посмотреть на недоцивилизацию",
        "Всемогущий Рик, когда же ты позволишь мне насладиться тишиной?",
        ]
    afterquest2= ["Раз уж у вас вопросы кончились предалгаю отправиться на планету"]
    ansans = [
        "Поздравляю! Это верно, поскольку точно описывает черные дыры и их образование.",
        "Неверно, потому что черная дыра определяется не отсутствием света, а ее сильным гравитационным притяжением. Она образуется в результате коллапса массивной звезды, а не просто из-за недостатка света",
        "Интересная аналогия, но неверная. Черные дыры - это астрономические объекты, образовавшиеся из коллапсирующих звезд, а не причудливые коллекции потерянных предметов",
        "Неверно, потому что искажает принцип работы черных дыр. Звезды и планеты не сжимаются; скорее, их может затянуть в черную дыру, если они подойдут слишком близко, и их материя сжимается в бесконечно плотную точку, называемую сингулярностью.",
        "Утверждение ложно, потому что кометы состоят не из звезд; они состоят изо льда, пыли и скалистых материалов. Аналогия с большими снежками слишком упрощена и вводит в заблуждение",
        "Вы действительно правы",
        "Неверно, потому что кометы не состоят из света; они состоят изо льда, пыли и каменистых материалов. Метеороиды отличаются от комет и не имеют одинакового состава.",
        "Утверждение неверно, потому что кометы образуются не в результате взрыва звезд. Они возникают в холодных областях Солнечной системы, таких как пояс Койпера и облако Оорта, и не имеют прямого отношения к звездным взрывам",
        "Утверждение неверно, поскольку оно упрощает концепцию галактик. Галактики - это обширные системы из звезд, газа и пыли, и, по оценкам, в наблюдаемой Вселенной насчитывается около 2 триллионов галактик, а не только 10.",
        "Утверждение вводит в заблуждение, потому что галактики не теряются в космосе; они представляют собой стабильные структуры, удерживаемые вместе гравитацией. Огромное количество галактик связано с крупномасштабной структурой Вселенной, а не с тем, что они расположены не на своем месте.",
        "Ого, вы даже это знаете, я думаю, вы правильно ответите и на следующий вопрос!",
        "Утверждение бессмысленно и некорректно, поскольку оно смешивает несвязанные понятия и не соответствует действительности. это неточное описание того, что такое галактика. Галактики не определяются произвольными сравнениями с животными или числами.",
        "Конечно, я такой. А теперь давайте ускоримся! ",
        "Хорошо, понял",
        "Эй, я тут пытаюсь!",
        "ХА-ХА. КСТАТИ, ты знал, что звук не распространяется в космосе? Никто тебя не побеспокоит, так же как и ты никого не побеспокоишь своими криками",
        ]
    MesGreet3 = ["Викторина закончилась, а наше путешествие нет. Перед тем как приземлиться на Землю предлагаю побывать на её спутнике",
        "Итак, мы находимся на луне - единственном естественном спутнике земли. Красивый вид, не так ли?",
        "Жизнь на земле не может существовать без неё. Её гравитация создаёт приливные волны, свет отражаемый ею помогает ориентироваться ночью",
        "Передовая теория появления жизни на земле предполгагает, что луна появилась в результате столкновения земли с объектом столь огромным, что тот отколол часть земли и осколок превратился в луну",
        "Луна сопровождала землю на протяжении 4,5 миллиардов лет и меняла её форму",
        "Сейчас земля немного выпукла с экватора, диаметр экватора на 0.33% больше полюсов",
        "Интересно то, что луна из-за этой небольшой разницы в размерах диаметров постепенно удаляется от земли",
        "Звучит страшно, но боятся тут нечего - через 50 миллиардов лет она наконец стабилизируется и перестанет как либо менять свое расположение",
        "Возможно у вас появились вопросы по поводу луны или жизни на земле. Я с радостью на них отвечу"
    ]
    questions3 = [
        "Сколько лет жизнь существует на земле? Какова её история?",
        "Что случится с землей если луна пропадет?",
        "Когда мы попадём на землю люди нас не атакуют?",
        "Это цивилизация и вид разумных существ были единственными, кто дошешл до такого уровня развития?",
        "Вопросов нет"
    ]
    answers3 = [
        "Жизнь на Земле существует примерно 3,5 миллиарда лет. Первые простейшие организмы появились в океанах. 600 миллионов лет назад появились многоклеточные организмы. 360 миллионов лет назад на суше начали появляться первые растения и животные. Эволюция продолжалась, приводя в конечном итоге к появлению голой обезьяны (людей).",
        "Если Луна внезапно исчезнет, на Земле произойдут катастрофические изменения. Сначала начнутся гигантские цунами, так как приливы и отливы будут нарушены. Изменится климат, что приведет к резким колебаниям температуры. Многие виды животных, зависящие от Луны, могут вымереть. В конечном итоге Земля станет более уязвимой к метеоритам и космическим угрозам.",
        "Не бойтесь, наши ученые уже бывали на земле пару глорков лет назад и люди совершенно не заметили их. Они попросту не видят наши корабли пока активирована маскировка",
        "Они первые, да. После них мы полагаем до такого же развития могут дойти например дельфины, или другие не менее умные существа - вороны."
    ]
    MesGreet4 = [
        "Подготовлю вас к тому что вас ждёт",
        "Мы посетим одну из частей света земли - Европу",
        "Мы отсановимся посмотреть на несколько достопримечательностей и на этом тур окончится",
        "Возможно у вас есть вопросы?"
    ]
    questions4 = [
        "Это что за тур такой, где мы больше времени провели в путешествии нежели на самом туре????",
        "Что за достопримечательности нас ждут? Мы будем смотреть на великие постройки человеческой цивилизации?",
        "Эй, вы обещали возможность посетить любую точку света в бюллетене! Верните деньги, я на такое не подписывался!",
        "Я могу взять себе в качестве сувенира животное с земли?",
        "Вопросов нет"
    ]
    answers4 = [
        "У корблока нет тура только путь ☝️. А ещё в бюллетене ясно сказано, сколько времени мы проведем и где ☝️☝️☝️",
        "Какие великие постройки? У такой цивилизации нету ничего интересного из построек, зато вот их планета создаёт впечатляющие места",
        "Согласно 42 поправке закона 23 о туризме на неразумных планетах Конфедерации Разумных существ наша компания имеет права менять маршрут заранее уведомив клиента. И мы это сделали, вы подписали согласие на это перед туром",
        "Нет, есть много причин на это, но того факта, что вы можете заразиться земной болезнью должно быть достаточно"
    ]
}

const correctanswers = [0,5,10,12]

let messages = document.querySelector(".messages");
let questionsbox = document.querySelector(".questions");
let messageID = 0;
let isMessageAnimating = false; // Flag to track message animation
let leftside = document.querySelector(".leftside")
let interact = document.querySelector(".interact")
const vidos = document.querySelector("video")
const img = document.querySelector("img")
let nowmess = MesGreet;
let nowans = answers;
let nowquest = questions;
let nowafter = afterquest;
let state = 0
let indexquest = 0
let intervalID 
let anusa = 0
let askers = 0
let howmany = 0
const skip = document.querySelector("#skip")
const nick = localStorage.getItem("UserName") || "Admin"
if(nick != "admin"){
    skip.style.display = "block"
}else{
    skip.style.display = "none"
}

function messme() {
    if (messageID < nowmess.length && !isMessageAnimating) { // Check animation flag
        addMessage(nowmess[messageID], messme);
        messageID++;
    } else if (messageID == nowmess.length){
        quest();
        document.querySelectorAll(".messtext")[document.querySelectorAll(".messtext").length - 1].onclick = function(){}
    }
}

function addMessage(text, clickHandler) {
    if (isMessageAnimating) return; // If a message is animating, do not add a new one
    removeVoidSpace();
    const messageDiv = `<div class="messtext" onclick="${clickHandler ? clickHandler.name + '()' : ''}"></div>`;
    messages.insertAdjacentHTML('beforeend', messageDiv);
    const messageElement = messages.lastChild;
    isMessageAnimating = true; // Set animation flag
    texteffect(text, messageElement, clickHandler); // Pass clickHandler to texteffect
    messages.scrollTop = messages.scrollHeight;
}

function quest() {
    if (state == 0 || state == 2 || state == 3) {
        nowquest.forEach((element, index) => {
            const questionP = `<p data-count="${index}" onclick="ans(this)">${element}</p>`;
            questionsbox.insertAdjacentHTML('beforeend', questionP);
            const questionElement = questionsbox.lastChild;
            texteffect(element, questionElement); // Add animation for questions

        });
    } else if (state == 1) {
        // Display the current question
        const currentQuestion = nowquest[indexquest];
        addMessage(currentQuestion);
        for (let i = 0; i < 4; i++) {
            const answerIndex = indexquest * 4 + i;
            if (answerIndex < nowans.length) {
                const questionP = `<p data-count="${answerIndex}" onclick="ans(this)">${nowans[answerIndex]}</p>`;
                questionsbox.insertAdjacentHTML('beforeend', questionP);
                const questionElement = questionsbox.lastChild;
                texteffect(nowans[answerIndex], questionElement); // Add animation for answers
            }
        }
    }
    addVoidSpace();
}

function ans(element) {
    const answerIndex = element.dataset.count;
    if (state == 0 || state == 2  || state == 3) {
        element.remove();
        if (answerIndex != questions.length - 1) {
            askers++
            removeVoidSpace();
            messages.insertAdjacentHTML("beforeend", `
            <div class="yours">${nowquest[answerIndex]}</div>
            <div class="messtext"></div>`);
            texteffect(nowans[answerIndex], document.querySelectorAll(".messtext")[document.querySelectorAll(".messtext").length - 1])
            addVoidSpace();
        } else {
            questionsbox.innerHTML = "";
            removeVoidSpace();
            addMessage(nowafter[0]);
            if(state == 0){
                changeloc(0);
            }else if(state == 2){
                changeloc(2)
            }else if(state == 3){
                localStorage.setItem("timepassed",sec)
                localStorage.setItem("askers", askers)
                localStorage.setItem("anusa", anusa)
                window.location.assign("./places.html");
            }
        }
    } else if (state == 1) {
        anusa++
        removeVoidSpace()
        const answerText = nowans[answerIndex];
        const commentText = ansans[answerIndex];
        // Check if the answer is correct
        const correctAnswerIndex = correctanswers[indexquest];
        if (answerIndex == correctAnswerIndex) {
            howmany++
            messages.insertAdjacentHTML("beforeend", `
                <div class="yours">${answerText}</div>
                <div class="messtext" onclick="nextQuestion()"></div>`);
                texteffect(commentText, document.querySelectorAll(".messtext")[document.querySelectorAll(".messtext").length - 1])
            questionsbox.innerHTML = ""
            if(correctAnswerIndex == 12 || correctAnswerIndex == 13 || correctAnswerIndex == 14){
                nowmess = afterquest2;
                messageID = 0
                document.querySelector(".messtext:last-of-type").onclick = false
                setTimeout(()=>{
                    changeloc(1)
                },37 * ansans[12].length)
            }
        }else {
            const commentText = ansans[answerIndex];
            messages.insertAdjacentHTML("beforeend", `
                <div class = "yours">${element.innerHTML}</div>
                <div class="messtext"></div>`);
                texteffect(commentText, document.querySelectorAll(".messtext")[document.querySelectorAll(".messtext").length - 1])
            element.remove();
            addVoidSpace() // Remove the incorrect answer
        }
    }
}

function nextQuestion() {
    // Increment the index for the next question
    indexquest++;
    addMessage(nowquest[indexquest])
        for (let i = 0; i < 4; i++) {
            const answerIndex = indexquest * 4 + i;
            if (answerIndex < nowans.length) {
                const questionP = `<p data-count="${answerIndex}" onclick="ans(this)">${nowans[answerIndex]}</p>`;
                questionsbox.insertAdjacentHTML('beforeend', questionP);
                const questionElement = questionsbox.lastChild;
                texteffect(nowans[answerIndex], questionElement); // Add animation for answers
            }
        }
    addVoidSpace()
    }

function addVoidSpace() {
    const voidSpace = '<div class="voidspace"></div>';
    messages.insertAdjacentHTML('beforeend', voidSpace);
    intervalID = setInterval(()=>{document.querySelector(".voidspace").style.cssText = `
        padding:${questionsbox.clientHeight}px 0 0 0;
        width:0% !important;`
        messages.scrollTop = messages.scrollHeight;
        console.log(questionsbox.clientHeight)
    }
    ,300)
}

function removeVoidSpace() {
    clearInterval(intervalID)
    const voidSpace = document.querySelector(".voidspace");
    if (voidSpace) {
        voidSpace.remove();
    }
}

function texteffect(phrase, targetElement, clickHandler) {
    targetElement.innerHTML = ''; // Clear the target element
    for (let i = 0; i < phrase.length; i++) {
        setTimeout(() => costyl(i, phrase, targetElement), i * 10);
    }
    // Set the click handler after the animation is done
    setTimeout(() => {
        // Remove click event from the second last message
        const messagesList = document.querySelectorAll('.messtext');
        if (messagesList.length > 1) {
            messagesList[messagesList.length - 2].onclick = null; // Remove click event
        }
        isMessageAnimating = false; // Reset animation flag
        if (clickHandler) {
            targetElement.onclick = clickHandler; // Set click handler for the current message
        }
        
        // Set the innerHTML to the full phrase after the animation
        targetElement.innerHTML = phrase; // Change spans to innerHTML
    }, phrase.length * 10); // Set time for animation completion
}

function costyl(i, phrase, targetElement) {
    if (phrase[i] !== " " && phrase[i] !== "|") {
        targetElement.insertAdjacentHTML("beforeend", `<span>${phrase[i]}</span>`);
    } else if (phrase[i] === " ") {
        targetElement.insertAdjacentHTML("beforeend", `<span class="space"> - </span>`);
    }
}

messme();
function changeloc(a){
    if(a == 0){
        vidos.loop = false;
        vidos.playbackRate = 2.25
        vidos.addEventListener("ended",changecostyl)        
    }else if(a == 1){
        vidos.loop = false;
        vidos.playbackRate = 2.25
        vidos.addEventListener("ended",changecostyl)
    }else if(a == 2){
        changecostyl()
    }
}
function changecostyl(){
    vidos.removeEventListener("ended",changecostyl)
    if(state == 0){
    vidos.src = "../Images/tosun.mp4"
    leftside.style.cssText = "margin-top:0vh;"
    vidos.play();
    vidos.loop = true
    nowmess = MesGreet2
    nowquest = questions2
    nowans = answers2
    nowafter = afterquest2
    state = 1
    }else if(state == 1){
    vidos.style.cssText = `display:none;`
    img.style.cssText  = `display:block`
    img.src = "../Images/FromMoon.png" 
    nowmess = MesGreet3
    nowquest = questions3
    nowans = answers3
    state = 2
    }else if(state == 2){
    img.style.cssText = `display:none;`
    vidos.style.cssText = `display:block`
    vidos.src = "../Images/toearth.mp4"
    vidos.play();
    vidos.playbackRate = 3
    nowmess = MesGreet4
    nowquest = questions4
    nowans = answers4
    state = 3
    vidos.addEventListener("ended",changecostyl)
    }else if(state == 3){
        vidos.style.display = "none"
    }
    messageID = 0
    messme()
    
}
vidos.muted = true;
vidos.playbackRate = 1.5
vidos.loop = true
vidos.play()
let sec = 0
setInterval(Timersecos,1000)
function Timersecos(){
    sec += 1
    console.log(sec)
}
function skipscene(){
    localStorage.setItem("Skip", true)
    localStorage.setItem("answersAsked", howmany)
    localStorage.setItem("timepassed",sec)
    localStorage.setItem("askers", askers)
    localStorage.setItem("anusa", anusa)
    window.location.assign("./places.html");
}
skip.onclick = skipscene
