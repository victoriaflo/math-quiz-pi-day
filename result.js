document.addEventListener("DOMContentLoaded", function() {

    const finalScoreEl = document.getElementById("final-score");
    const whatsappBtn = document.getElementById("whatsapp-btn");
    const copyBtn = document.getElementById("copy-btn");
    const homeBtn = document.getElementById("home-btn");
    const retryBtn = document.getElementById("retry-btn");

    const finalScore = localStorage.getItem("finalScore");

    if (finalScore === null) {
        finalScoreEl.textContent = "Aucun résultat trouvé.";
        return;
    }

    finalScoreEl.textContent = "Tu as obtenu " + finalScore + " / 5 🎯";

    // 🔗 IMPORTANT : ton vrai lien
    const siteURL = "https://victoriaflo.github.io/math-quiz-pi-day/";

    const message =
    "🧠 Math Quiz Pi Day\n\n" +
    "Score : " + finalScore + "/5 🎯\n\n" +
    "Teste tes connaissances ici 👇\n" +
    siteURL;

    // WhatsApp
    if(whatsappBtn){
        whatsappBtn.addEventListener("click", function(){

            const shareURL =
            "https://wa.me/?text=" +
            encodeURIComponent(message);

            window.open(shareURL,"_blank");

        });
    }

    // Copier
    if(copyBtn){
        copyBtn.addEventListener("click", function(){

            navigator.clipboard.writeText(message);

            alert("Lien copié ! Partage maintenant 📲");

        });
    }

    // Accueil
    if(homeBtn){
        homeBtn.addEventListener("click", function(){

            window.location.href="index.html";

        });
    }

    // Recommencer FIX
    if(retryBtn){
        retryBtn.addEventListener("click", function(){

            localStorage.removeItem("finalScore");

            window.location.href="quiz.html";

        });
    }

});
