document.addEventListener("DOMContentLoaded", function() {

    const finalScoreEl = document.getElementById("final-score");
    const whatsappBtn = document.getElementById("whatsapp-btn");
    const copyBtn = document.getElementById("copy-btn");
    const homeBtn = document.getElementById("home-btn");

    const finalScore = localStorage.getItem("finalScore");

    // 🔎 Vérification si score existe
    if (finalScore === null) {
        finalScoreEl.textContent = "Aucun résultat trouvé.";
        return;
    }

    finalScoreEl.textContent = "Tu as obtenu " + finalScore + " / 5 🎯";

    // 🌐 Lien du jeu
    const siteURL = "https://victoriaflo.github.io/math-quiz-pi-day/";

    // 🧠 Message partage amélioré
    const message = "🧠 Math Quiz Pi Day\n\nScore : " 
    + finalScore + "/5 🎯\n\nTeste tes connaissances ici 👇\n" 
    + siteURL;

    // 📲 WhatsApp
    whatsappBtn.addEventListener("click", function() {

        const url = "https://wa.me/?text=" + encodeURIComponent(message);

        window.open(url, "_blank");

    });

    // 📸 Copier message complet
    copyBtn.addEventListener("click", function() {

        navigator.clipboard.writeText(message);

        alert("Résultat copié ! Tu peux maintenant le partager 📲");

    });

    // 🏠 Retour accueil FIX
    homeBtn.addEventListener("click", function() {

        window.location.href = "index.html";

    });

});
