//Cycling through the questions

var questions = document.getElementById("question-title"); //style
var choices = document.getElementById("questions");//style
var index = 0 //this will start everything at 0, and you can add to it depending on how you need it in the function
var countdown = document.querySelector("#count")
var count = 60;

function getQuestion() {
   const currentQ = question [index]
   questions.textContent = currentQ.title // getting the text of the current question from the var array title
   choices.innerHTML = "" //empties out addtional answers
   currentQ.choices.forEach (function(choice,i) {
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
      count -= 10 //this is taking 10 seconds away, when the wrong answer is pressed
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

   //timer
   interval = setInterval(function() {
   document.querySelector('#count').innerHTML = count;
   count--;
   if(count === 0) {
      clearInterval(interval);
      document.querySelector('#count').innerHTML = 'Done';
      alert("Times up!");
      clearTimeout(count);
   }
}, 1000);
   
};

//End Screen

function quizOver() {
   var endScreen = document.querySelector(".endBox")
   endScreen.removeAttribute("class")
   //endScreen.style.display = endScreen.style.display === "none"?"":"block"
   var qSection = document.querySelector(".qSection")
   qSection.setAttribute("class", "hide")
   var qBox = document.querySelector(".questionBox");
   qBox.setAttribute("class", "hide");
   qBox.setAttribute("style", "display:none");
   //qSection.addClass("display", "none")
 }

 //restart

 var restart = document.querySelector('.restart')

 restart.addEventListener('click', function() {
    window.location.reload();
 })

//local storage

/* var input = document.getElementById('saveServer').value;
localStorage.setItem('server', input);

document.getElementById('saveServer').value = localStorage.getItem('server');
 */


var user = document.getElementById("saveServer");
var submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener("click", function(event) {
   event.preventDefault();

   var userInput = document.getElementById("saveServer").value;
 
localStorage.setItem("userInput", JSON.stringify(userInput));
renderMessage();
});

function renderMessage() {
   var lastScore = JSON.parse(localStorage.getItem("userInput"));
   if (lastScore !== null) {
     document.querySelector("#enteredName").textContent = lastScore
   }
 }


/*

function submitScore(event) {
   var initials = formInput.value;
   localStorage.setItem(initials, timeLeft);
 
   renderHighScores();
 } */




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
