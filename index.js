const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
const fixed = document.querySelector('.fixed');
const closed = document.querySelector('.closed');
const logo = document.querySelector('.logo')

const first = document.querySelector('.first-popup');
const start = document.querySelector('.popup-start');
const main = document.querySelector('.main-popup');
const btn = document.querySelector('.btn');
const message = document.getElementById('message');
const chat = document.querySelector('.chat-container');
const input = document.querySelector('input')

const  url = "https://api.adviceslip.com/advice";

toggle.addEventListener('click',()=>{
        links.classList.toggle('show-links');
});

fixed.addEventListener('click',()=>{
    if(closed.classList.contains('show-close')){
        closed.classList.remove('show-close');
        // closed.classList.remove('normal-hide')
        logo.classList.remove('hide');
        first.classList.remove('show-close');
        main.classList.remove('show-close');

    }
    else{
        closed.classList.add('show-close');
        closed.classList.add('normal-hide');
        logo.classList.add('hide')
        first.classList.add('show-close');
    }
    links.classList.remove('show-links');

})
start.addEventListener('click',()=>{
    first.classList.remove('show-close');
    main.classList.add('show-close');
})


input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
    work();
    }
    else{
        // fixed.classList.add('normal-hide')
    }
    });

btn.addEventListener('click',(e)=>{
    // console.log("value is submitted")
    e.preventDefault();
    work();
})
const work = ()=>{
    const value = message.value;
    console.log(value);
    chat.classList.add('show-chat')
    if(value){
    createElement(value);

    
        getapi(url);
        
    }
   
    message.value =""
}
const createElement = (value)=>{
    const element  = document.createElement('div');
    // element.classList.add('chat');
    element.innerHTML=`<article class="chat-admin">${value}</article>`;
    // console.log("functio n")
    chat.appendChild(element)
}
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    let data = await response.json();
    let reply = data.slip.advice;
    const element  = document.createElement('div');
    element.classList.add('chat-round');
    element.innerHTML=`
    <div class="round"></div>
    <article class="chat-reply">${reply}</article>`;
    // console.log("functio n")
    chat.appendChild(element)
    chat.scrollTop = chat.scrollHeight;
}