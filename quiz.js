const questions = [

{
question:"π est un nombre infini, mais jusqu’à aujourd’hui, combien de chiffres après la virgule ont été calculés par les ordinateurs?",
answers:[
"100 000 000 000 000 (100 trillions)",
"300 000 000 000 000 (300 trillions)",
"500 000 000 000 000 (500 trillions)"
],
correct:1
},

{
question:"Calcule : (10 – 2) × 3² ÷ 6",
answers:["15","12","9"],
correct:1
},

{
question:"Calcule : √16 + √9 × 2",
answers:["10","14","9"],
correct:0
},

{
question:"Combien font 10 ÷ 2 ?",
answers:["2","5","8"],
correct:1
},

{
question:"Ton père gagne 2000 gourdes par mois, ta mère 3 fois plus et ton frère 50 % de ce que gagne ton père. Combien gagnent-ils tous ensemble ?",
answers:["7500","9000","8000"],
correct:1
}

];

let index = 0;

let score = 0;

let answered = false;

const questionEl = document.getElementById("question");

const answersEl = document.getElementById("answers");

const nextBtn = document.getElementById("next-btn");

function loadQuestion(){

answered=false;

let q=questions[index];

questionEl.textContent=q.question;

answersEl.innerHTML="";

q.answers.forEach((answer,i)=>{

let btn=document.createElement("button");

btn.textContent=answer;

btn.classList.add("answer-btn");

btn.onclick=function(){

if(answered) return;

answered=true;

if(i===q.correct){

btn.style.background="green";

score++;

}
else{

btn.style.background="red";

answersEl.children[q.correct].style.background="green";

}

nextBtn.style.display="block";

}

answersEl.appendChild(btn);

});

nextBtn.style.display="none";

}

nextBtn.onclick=function(){

index++;

if(index<questions.length){

loadQuestion();

}
else{

localStorage.setItem("finalScore",score);

window.location.href="result.html";

}

}

loadQuestion();
