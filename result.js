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

    finalScoreEl.textContent = "Tu as obtenu " + finalScore + " / 5 ";

    const message = "J'ai obtenu " + finalScore + "/5 au Quiz Maths ";

    // 📲 WhatsApp
    whatsappBtn.addEventListener("click", function() {
        const url = "https://wa.me/?text=" + encodeURIComponent(message);
        window.open(url, "_blank");
    });

    // 📸 Instagram (copie texte)
    copyBtn.addEventListener("click", function() {
        navigator.clipboard.writeText(message);
        alert("Résultat copié ! Tu peux le coller sur Instagram ");
    });

    // 🏠 Retour accueil
    homeBtn.addEventListener("click", function() {
        window.location.href = "result.html";
    });

});
