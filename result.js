document.addEventListener("DOMContentLoaded",function(){

const score=localStorage.getItem("finalScore");

const scoreText=document.getElementById("final-score");

const retry=document.getElementById("retry-btn");

const home=document.getElementById("home-btn");

const whatsapp=document.getElementById("whatsapp-btn");

const copy=document.getElementById("copy-btn");

const url="https://victoriaflo.github.io/math-quiz-pi-day/";

scoreText.textContent="Score : "+score+"/5 🎯";

let message=
"🧠 Math Quiz Pi Day\n\n"+
"Score : "+score+"/5 🎯\n\n"+
"Essaie aussi 👇\n"+
url;

retry.onclick=function(){

localStorage.removeItem("finalScore");

window.location.href="quiz.html";

}

home.onclick=function(){

window.location.href="index.html";

}

whatsapp.onclick=function(){

window.open(
"https://wa.me/?text="+encodeURIComponent(message)
);

}

copy.onclick=function(){

navigator.clipboard.writeText(message);

alert("Lien copié 📲");

}

});
