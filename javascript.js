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


//Cycling through the questions

var questions = document.getElementById("question-title"); //style
var choices = document.getElementById("questions");//style
var index = 0 //this will start everything at 0, and you can add to it depending on how you need it in the function
var countdown = document.querySelector(".timer")

function getQuestion() {
   const currentQ = question [index]
   questions.textContent = currentQ.title // getting the text of the current question from the var array title
   choices.innerHTML = "" //empties out addtional answers
   currentQ.choices.forEach (function(choice,i){
      const choiceBtn = document.createElement("button")
      choiceBtn.setAttribute("class", "choice") //assigning class of choice to the button
      choiceBtn.setAttribute("value", choice) //value coming from below (choices section in each question)
      choiceBtn.textContent = i + 1 + ". " + choice
      choices.append(choiceBtn)//putting text on the buttons
      choiceBtn.onclick = answerSelect
   })
}

function answerSelect() { 
   if(this.value !== question[index].answer) { //this is talking about question var
      countdown -= 10 //this is taking 10 seconds away, when the wrong answer is pressed
      alert ("Oops, looks like that was the wrong answer partner.")
   }
   else if (this.value === question[index].answer) { //this is grabbing the below
      alert ("It's like you're some kind of post-punk magician!")
   }

   index++ //This will cycle to the next question
   if(index === question.length) { //once the length of all the questions have been cycled through it will end.
      quizOver()
   }
   else { //if all of the questions have not been cycled through, then the get the next object in te array of questions (above)
      getQuestion()
   }
}



var question = [
   {
      title:"What is Bauhaus' best known song?", 
      choices: ["Bela Lugoshi's Dead", "In The Flat Field", "All We Ever Wanted Was Everything"],
      answer: "Bela Lugoshi's Dead"
   },

   {
      title:"Which below is a song by The Cure?", 
      choices: ["I'm Shy", "Just Like Heaven", "Friday's"],
      answer: "Just Like Heaven"
   },

   {
      title:"HIM is from which country?", 
      choices: ["England", "Finland", "Norway"],
      answer: "Finland"
   },

   {
      title:"Who is considered a pioneer in the post punk/goth genre?", 
      choices: ["Siouxsie Sioux and the Banshees", "Type O Negative", "ACDC"],
      answer: "Siouxsie Sioux and the Banshees"
   },

   {
      title:"Joy Divison is known for which song?", 
      choices: ["Isolation", "Decades", "Love will Tear Us Apart "],
      answer: "Love will Tear Us Apart "
   },
]


//Start Button to get questions

var startBtn = document.querySelector("#startBtn");
var startContainer = document.querySelector(".start_container");
var questionBox = document.querySelector(".questionBox");

startBtn.addEventListener('click', start); //start button to work

function start() {
   startContainer.style.display = "none";
   questionBox.style.display = "block"; //will override CSS and display questionBox
   getQuestion();
};

//End Screen

function quizOver() {
   console.log("test")
   var endScreen = document.querySelector(".endBox")
   endScreen.removeAttribute("class")
   //endScreen.style.display = endScreen.style.display === "none"?"":"block"
   var qSection = document.querySelector(".qSection")
   qSection.setAttribute("class", "hide")
   //qSection.addClass("display", "none")
}




//high score area WIP
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
