document.addEventListener("DOMContentLoaded", function(){

const score = localStorage.getItem("finalScore");

const scoreText = document.getElementById("final-score");

const whatsapp = document.getElementById("whatsapp-btn");

const copy = document.getElementById("copy-btn");

const url = "https://victoriaflo.github.io/math-quiz-pi-day/";

// Vérification score
if(score === null){

scoreText.textContent="Aucun résultat.";

return;

}

// Affichage score
scoreText.textContent="Score : "+score+"/5 🎯";

// Message partage
let message =
"🧠 Math Quiz Pi Day\n\n"+
"J'ai obtenu "+score+"/5 🎯\n\n"+
"Teste toi aussi 👇\n"+
url;

// WhatsApp share
whatsapp.addEventListener("click", function(){

let shareURL =
"https://wa.me/?text=" +
encodeURIComponent(message);

window.open(shareURL,"_blank");

});

// Copier lien
copy.addEventListener("click", function(){

navigator.clipboard.writeText(message);

alert("Lien copié ! Partage maintenant 📲");

});

});
