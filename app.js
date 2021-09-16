const questionQuiz = [
    {
        question : "What Does HTML Stand for",
        a : "Hyper Text Markup Language",
        b: "Hydronic Tocin Make Leaders",
        c: "Holder Text Marking Lounched",
        d: "Hynic Towist Mockup list",
        correct: "a"
    },
    {
        question : "What language is most popular in 2021?",
        a: "Python",
        b: "JavaScript",
        c: "Java",
        d: "c++",
        correct: "b"
    },
    {
        question : "How old is Shakib al Hasan?",
        a: "32",
        b: "33",
        c: "34",
        d: "I Not all Like",
        correct: "c",
    },
    {
        question : "Who is the president of BD?",
        a: "Shekh Hasina",
        b: "Khaleda Zia",
        c: "Mirza Fakrul",
        d: "Sekh Mujib",
        correct: "a",
    }
]

const quizResult = document.getElementById("quiz-con")
const allAnswer = document.querySelectorAll(".answer");
const question = document.getElementById('question_text');
const questionOne = document.querySelector(".a-text");
const questionTwo = document.querySelector(".b-text");
const questionThree = document.querySelector(".c-text");
const questionFour = document.querySelector(".d-text")
const submitButton = document.getElementById("submit");

let loadQuizQuestion = 0;
let score = 0;

function loadQuiz(){
    deSelected();
    const currentQuestion = questionQuiz[loadQuizQuestion]
    question.innerText = currentQuestion.question;
    questionOne.innerText = currentQuestion.a;
    questionTwo.innerText = currentQuestion.b;
    questionThree.innerText = currentQuestion.c;
    questionFour.innerText = currentQuestion.d;
}

loadQuiz();

function notSelected(){

    let answer = undefined;

    allAnswer.forEach((answerElem)=>{
        if(answerElem.checked){
            answer  = answerElem.id;
        }
    })

    return answer;
}

function deSelected(){
    allAnswer.forEach((allDeselected)=>{
        allDeselected.checked = false;
    }
)}

submitButton.addEventListener("click", ()=>{

    const currentAnswer = notSelected();

    if(currentAnswer){
        if(currentAnswer === questionQuiz[loadQuizQuestion].correct){
            score++;
        }

        loadQuizQuestion++;

        if(loadQuizQuestion < questionQuiz.length){
            loadQuiz();
        } else{
            quizResult.innerHTML = `

            <h2>You answered correctly at ${score} / ${questionQuiz.length} Question</h2>
            <button onclick = "location.reload()">Reload</button>
            `
        }
    }
})




