const questions = [

{
question:"Quelle est la valeur de Pi (approx)?",
answers:["3.12","3.14","3.18"],
correct:1
},

{
question:"Combien font 5×5 ?",
answers:["10","25","30"],
correct:1
},

{
question:"Racine de 9 ?",
answers:["3","6","9"],
correct:0
},

{
question:"10/2 ?",
answers:["2","5","8"],
correct:1
},

{
question:"7+3 ?",
answers:["9","10","11"],
correct:1
}

];

let index=0;

let score=0;

const questionEl=document.getElementById("question");

const answersEl=document.getElementById("answers");

const nextBtn=document.getElementById("next-btn");

function loadQuestion(){

let q=questions[index];

questionEl.textContent=q.question;

answersEl.innerHTML="";

q.answers.forEach((answer,i)=>{

let btn=document.createElement("button");

btn.textContent=answer;

btn.onclick=function(){

if(i===q.correct){

score++;

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
