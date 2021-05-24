/* const start = document.querySelector(".start button");
const question_box = document.querySelector(".question-box .act .hide");
const rules_list = document.querySelector(".rules-list .act .hide")
const restart = document.querySelector(".restart button");
const next = document.querySelector(".next button");

//start button
start.onclick = () => {
    rules_list.classlist.remove(".hide");
    question_box.classList.add(".act");

// $('.rules-list').css('display','none');
};
 */


//work on button to start the quiz 
//put div around landing, and then onclick hide landing and start quiz


const questions = document.getElementById("question-title"); //style
const choices = document.getElementById("questions");//style
const index = 0


function getQuestion() {
   const currentQ = question [index]
   questions.textContent = currentQ.title // ask what this means????
   choices.innerHTML = "" //empties out addtional answers
   currentQ.choices.forEach (function(choice,i){
      const choiceBtn = document.createElement("button")
      choiceBtn.setAttribute("class", "choice") //assigning class of choice to the button
      choiceBtn.setAttribute("value", choice) //value coming from below (choices section in each question)
      choiceBtn.textContent = i + 1 + "" + choice
      choiceBtn.onclick = answerSelect
   })
}
function answerSelect() { //this is talking about the orange below
   if(this.value !== question[index].answer) {
      countdown -= 10 //this is taking 10 seconds away, when the wrong answer is pressed
   }
   index++ //This will cycle to the next question
}

var question = [
   {
      title:"What is Bauhaus' best known song?", 
      choices: ["Bela Lugoshi's Dead", "In The Flat Field", "All We Ever Wanted Was Everything"],
      answer: "answer 1"
   },

   {
      title:"Which below is a song by The Cure?", 
      choices: ["I'm Shy", "Just Like Heaven", "Friday's"],
      answer: "answer 2"
   },

   {
      title:"HIM is from which country?", 
      choices: ["England", "Finland", "Norway"],
      answer: "answer 2"
   },

   {
      title:"Who is considered a pioneer in the post punk/goth genre?", 
      choices: ["Siouxsie Sioux and the Banshees", "Type O Negative", "ACDC"],
      answer: "answer 1"
   },

   {
      title:"Joy Divison is known for which song?", 
      choices: ["Isolation", "Decades", "Love will Tear Us Apart "],
      answer: "answer 3"
   },
]

var startBtn = document.getElementsByClassName("startBtn");
var startContainer = document.getElementsByClassName("start_Container");
var questionBox = document.getElementsByClassName("questionBox");

function start() {
   startBtn.addeventListener('click', start);
   startContainer.style.display = "none";
   questionBox.style.display = "block"; //will this override the css and display the questions??
   getQuestion();
}


var endBox = document.getElementsByClassName("endBox");
var nextBtn = document.getElementsByClassName("next")


function highScore() {
   next.on("click", endBox);
   endBox.style.display = "block";
   questionBox.style.display = "none";
   startContainer.style.display= "none";

   for (var i = 0; i < localStorage.storage.length; i++) {
      var userName = localStorage.key(i);
      var userScore = localStorage.getItem(localStorage.key(i));
      var highScoreList = document.createElement(li);
      highScoreList.innerHTML = 
         i + 1 + ". " + userName + " - " + userScore;
         highScoreList.append(highScoreList);
   }
   
}
