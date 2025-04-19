let posts = []
const button = document.getElementById("next")
const langstate = localStorage.getItem("langState") || 1
let h1 = document.querySelector("h1")
let profile = document.querySelector("#next")
if(langstate == 1){
    posts = [
    {
        id: 1,
        image: '../Images/alien1.png',
        caption: 'Где-то в Норвегии',
        comments: [
            { username: 'Believer', text: "Я Создатель форума и конктрено эту фотографию сделал лично я. Я видел своими глазами их. Я поискал в интернете и сегодня много где оказывается видели их. Тут я собрал все фото доказательства того что нас посещали инопланетянинанины. Я создал форум, а не выложил в уже существующих потому что там мне сказали, что настолько очевдную ложь даже они выкладвать не будут. Они ошибаются. Я ВИДЕЛ ИХ СВОИМИ ГЛАЗАМИ ПРАВИТЕЛЬСТВО ВРЁТ ДРУГИЕ ФОРУМЫ ПОД ПРАВИТЕЛЬСТВОМ" },
            { username: 'BadBOOOY', text: "Боже, чел, ты ради того, чтобы выложить очевидный фотошоп создал целую страничку?" },
            { username: 'Постиронист', text: "12 инопланетян/10 не выдуманных историй!" }
        ]
    },
    {
        id: 2,
        image: '../Images/alien2.png',
        caption: 'Словения',
        comments: [
            { username: 'Скептик', text: "Ага, так и поверил" },
            { username: 'На грани безумия', text: "Я бы хотел увидеть это своими глазами." }
        ]
    },
    {
        id: 3,
        image: '../Images/alien3.png',
        caption: 'Исландия',
        comments: [
            { username: 'АУФ', text: "Без комментариев..." }
        ]
    }]

    h1.innerHTML = "ОНИ СРЕДИ НАС"
    profile.innerHTML = "Посмотреть статистику"
}else{
    posts = [
    {
        id: 1,
        image: '../Images/alien1.png',
        caption: 'Somewhere in Norway',
        comments: [
            { username: 'Believer', text: "I am the creator of the forum and I personally took this photo. I saw them with my own eyes. I searched the internet and today it turns out many have seen them. Here I gathered all the photo evidence that aliens have visited us. I created a forum instead of posting in existing ones because they told me that such an obvious lie they wouldn't even post. They are mistaken. I SAW THEM WITH MY OWN EYES, THE GOVERNMENT IS LYING, OTHER FORUMS ARE UNDER THE GOVERNMENT" },
            { username: 'BadBOOOY', text: "God, dude, did you create an entire page just to post obvious Photoshop?" },
            { username: 'Postironic', text: "12 aliens/10 not made-up stories!" }
        ]
    },
    {
        id: 2,
        image: '../Images/alien2.png',
        caption: 'Slovenia',
        comments: [
            { username: 'Skeptic', text: "Yeah, I totally believe that" },
            { username: 'On the brink of madness', text: "I would like to see this with my own eyes." }
        ]
    },
    {
        id: 3,
        image: '../Images/alien3.png',
        caption: 'Iceland',
        comments: [
            { username: 'Pipikakaland', text: "No comments..." }
        ]
    }]

    h1.innerHTML = "THEY WERE HERE"
    profile.innerHTML = "Check stats"
}



// Задаем никнейм
const defaultUsername = localStorage.getItem("UserName") || "Инопланитянинанин";

function loadComments() {
    const savedComments = localStorage.getItem('comments');
    if (savedComments) {
        const parsedComments = JSON.parse(savedComments);
        posts.forEach(post => {
            post.comments = parsedComments[post.id] || post.comments;
        });
    }
}

function saveComments() {
    const commentsToSave = {};
    posts.forEach(post => {
        commentsToSave[post.id] = post.comments;
    });
    localStorage.setItem('comments', JSON.stringify(commentsToSave));
}

function renderPosts() {
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = '';

    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.className = 'post';
        postDiv.innerHTML = `
            <img src="${post.image}" alt="${post.caption}">
            <div class="caption">${post.caption}</div>
            <div class="comments">
                <h3>Комментарии:</h3>
                ${post.comments.map(comment => `<div class="comment"><strong>${comment.username}:</strong> ${comment.text}</div>`).join('')}
                <div class="comment-form">
                    <input type="text" placeholder="Ваш комментарий" id="comment-input-${post.id}">
                    <button onclick="addComment(${post.id})">Отправить</button>
                </div>
            </div>
        `;
        postsContainer.appendChild(postDiv);
    });
}

function addComment(postId) {
    const commentInput = document.getElementById(`comment-input-${postId}`);
    const comment = commentInput.value.trim();
    
    if (comment) {
        const post = posts.find(p => p.id === postId);
        post.comments.push({ username: defaultUsername, text: comment });
        commentInput.value = '';
        saveComments();
        renderPosts();
    }
}

loadComments();
renderPosts();
button.onclick = nextpage
function nextpage(){
    window.location.href = "./lastp.html"
}