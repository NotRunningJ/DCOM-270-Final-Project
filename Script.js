/* Most of the question logic and switching between questions
   ... probably a changeQuestion function and checkAnswer function*/

/* what should the punishment be for an incorrect question? */

/* we can also mess around with different audio clips throughout 
   and maybe a video clip at the end (voldemort killing harry for a loss
   and harry killing voldemort for a win) */

//to hide the questions until the start button is selected
// Alyssa
function HideQuestions() {
   var start = document.getElementById("HideforStart");
   start.style.display = "block";
}

// shoved into a method to be collapsed for ease of working
// **click arrow to left of function to collapse 200 lines
// all of us worked on this
function genQuestions() {
   /* possible format to store questions as objects
      we would pop the variables in and out of the 
      respective htlm divs to change them 
   
      let the answers be 0-3, so when div 'c' is clicked,
      2 is submitted as an answer...makes logic for checking
      for correctness easier (checking two integers for equality*/

   Question0 = {
      question: "What is the name of the pub at the entrance to Diagon Alley?",
      a: "Ollivander's Wand Shop",
      b: "Gringotts",
      c: "The Leaky Cauldron",
      d: "Hogwarts",
      answer: 2,
      asked: false // keep track to not duplicate questions in a game
   }
   /* get access to the object variables by 
      Question0.answer 
      this returns 2 */
   
   Question1 = {
      question: "What is the name of Harry's owl?",
      a: "Crookshanks",
      b: "Hedwig",
      c: "Scabbers",
      d: "Trevor",
      answer: 1,
      asked: false
   }
   
   Question2 = {
      question: "What is the government called in the magical world?",
      a: "The Law of Magic",
      b: "Congress of Hogwarts",
      c: "The House of Magic",
      d: "The Ministry of Magic",
      answer: 3,
      asked: false
   }
   
   Question3 = {
      question: "What is the name of the road Harry Potter grew up on?",
      a: "Private Drive",
      b: "Secret Street",
      c: "Private Avenue",
      d: "Wizard Drive",
      answer: 0,
      asked: false
   }
   
   Question4 = {
      question: "Who is the headmaster of Hogwarts?",
      a: "Salazar Slytherin",
      b: "Albus Dumbledore",
      c: "Sirius Black",
      d: "Cornelius Fudge",
      answer: 1,
      asked: false
   }
   
   Question5 = {
      question: "What is the tournament called in the fourth movie?",
      a: "The Quadwizard Tournament",
      b: "The Interscholastic Tournament",
      c: "The Triwizard Tournament",
      d: "The Tournament of Champions",
      answer: 2,
      asked: false
   }
   
   Question6 = {
      question: "Who's code name was Padfoot?",
      a: "Remus Lupin",
      b: "Peter Pettigrew",
      c: "James Potter",
      d: "Sirius Black",
      answer: 3,
      asked: false
   }
   
   Question7 = {
      question: "What is Lord Voldemort's full name?",
      a: "Tom Marvolo Riddle",
      b: "Tom Riddle Voldemort",
      c: "Jason Keen Riddling",
      d: "Voldemort Riddle",
      answer: 0,
      asked: false
   }
   
   Question8 = {
      question: "What is Professor McGonagall's animagus?",
      a: "Rat",
      b: "Cat",
      c: "Black Dog",
      d: "Werewolf",
      answer: 1,
      asked: false
   }
   
   Question9 = {
      question: "What does the seeker chase after in Quidditch?",
      a: "The Bludger",
      b: "The Quaffle",
      c: "The Snitch",
      d: "The Goblet",
      answer: 2,
      asked: false
   }
   
   Question10 = {
      question: "What is the most powerful wand?",
      a: "Harry's Wand",
      b: "The Wand of Gryffindor",
      c: "Ron's Broken Wand",
      d: "The Elder Wand",
      answer: 3,
      asked: false
   }
   
   Question11 = {
      question: "Which of the following is NOT a curse?",
      a: "Expelliarmus",
      b: "Imperius",
      c: "Cruciatis",
      d: "Avada Kedavra",
      answer: 0,
      asked: false
   }
   
   Question12 = {
      question: "When is Harry Potter's birthday?",
      a: "June 28th",
      b: "July 31st",
      c: "May 14th",
      d: "March 30th",
      answer: 1,
      asked: false
   }
   
   Question13 = {
      question: "What is Harry's mom's name?",
      a: "Rose",
      b: "Violet",
      c: "Lily",
      d: "Daisy",
      answer: 2,
      asked: false
   }
   
   Question14 = {
      question: "What house is Harry Potter sorted into?",
      a: "Slytherin",
      b: "Hufflepuff",
      c: "Ravenclaw",
      d: "Gryffindor",
      answer: 3,
      asked: false
   }
   
   Question15 = {
      question: "Which platform in the King's Cross Station was Harry supposed to ride the train to Hogwarts?",
      a: "Platform 9 3/4",
      b: "Platform 9 1/4",
      c: "Platform 8 3/4",
      d: "Platform 9 1/2",
      answer: 0,
      asked: false
   }
   
   Question16 = {
      question: "What animal can Harry speak to?",
      a: "Mouse",
      b: "Dragon",
      c: "Snake",
      d: "Dog",
      answer: 2,
      asked: false
   }
   
   Question17 = {
      question: "Ron Weasley has a fear of:",
      a: "Bees",
      b: "Beetles",
      c: "Crickets",
      d: "Spiders",
      answer: 3,
      asked: false
   }
   
   Question18 = {
      question: "How much does a ticket for the Knight Bus cost if you include a cup of hot chocolate?",
      a: "16 sickles",
      b: "14 sickles",
      c: "15 sickles",
      d: "13 sickles",
      answer: 1,
      asked: false
   }
   
   Question19 = {
      question: "What color did Hermione turn the leaves of the Weasley’s crabapple tree into for Harry’s 17th birthday?",
      a: "Gold",
      b: "Red",
      c: "Blue",
      d: "Silver",
      answer: 0,
      asked: false
   }

   // create an array of all the questions to make indexing easy
   var questions = [Question0, Question1, Question2, Question3, Question4, Question5,
         Question6, Question7, Question8, Question9, Question10, Question11,
         Question12, Question13, Question14, Question15, Question16, Question17,
         Question18, Question19];
   
   return questions;
} // end genQuestions


/* change to show the next question
   keep track of the questions we have already shown to not duplicate 
   
   make this just set html fields and not show/hide divs..makes out job easier
   
   it should be an error to run out of questions to ask - 
   design in a way to MAKE the game end in less than 20 questions */
// Jordan
function changeQuestion() {
   var ask = true;
   var qNum = 0; // initialize outside so it is in scope after the loop
   while(ask == true) {
      // Returns a random integer from 0 to 19: *20 questions
      qNum = Math.floor(Math.random() * 20);
      ask = questions[qNum].asked; // calls implied getter method
   }
   // set question here since it has not been shown yet
   shown = qNum;
   questions[qNum].asked = true; // calls an implied setter method

   /* call questions[question].____
      to get values associated with the question to push to html */
   $("#Question").html(questions[qNum].question);
   $("#AnswerA").html(questions[qNum].a);
   $("#AnswerB").html(questions[qNum].b);
   $("#AnswerC").html(questions[qNum].c);
   $("#AnswerD").html(questions[qNum].d);

   qasked++; // increment because we asked a new question
}

/* check if the answer was correct by comparing the answer with 
   the question Object's answer value */
// Jordan
function checkAnswer(answer) {
   if(answer == (questions[shown].answer)) { // answer is correct
      qcorrect++;
      answerCorrect();
   } else { // answer is wrong
      // make them cry
      // steal their dog (sorry kenzie had to slip a joke in somewhere)
      answerIncorrect();
   }
   // moved changing answer into the click function 
}

var health = 100;

// Jordan
function answerCorrect() {
   // shirnk green and grow red by...10%?
   health -= 10;
   $('#Health').width(health + '%');
   $('#Damage').width((100-health) + '%');
}

// what happens here?
function answerIncorrect() {
   // changing health just to see if logic is working
   health += 5;
   $('#Health').width(health + '%');
   $('#Damage').width((100-health) + '%');
}


var questions = genQuestions(); // array of 20 questions

// keep track of how many answers were correct
var qasked = 0;
var qcorrect = 0;
var shown = 0; // current question shown...useful in checking answer

/* click functionality in here, show first random question */
$(document).ready(function() {

   // Jordan
   changeQuestion();

   // click functionality for the 4 different answers
   // Jordan
   $("#AnswerA").click(function(){ 
      checkAnswer(0);
      changeQuestion();   
   });

   // Alyssa
   $("#AnswerA").hover(function(){
      $(this).css("background-color", "#336699");
   });

   // Alyssa, Makenzie
   // Alyssa - I changed your mouseout color to fit 
   // the background while affording for some transparancy
   // But if you hate it we can chnage it back!
   $("#AnswerA").mouseout(function(){
      $(this).css("background-color", "rgba(4, 59, 92, 0.5)");
   });

   // Jordan
   $("#AnswerB").click(function(){ 
      checkAnswer(1);   
      changeQuestion(); 
   });

   // Alyssa
   $("#AnswerB").hover(function(){
      $(this).css("background-color", "#336699");
   });

   // Alyssa, Makenzie
   $("#AnswerB").mouseout(function(){
      $(this).css("background-color", "rgba(4, 59, 92, 0.5)");
   });

   // Jordan
   $("#AnswerC").click(function(){ 
      checkAnswer(2);  
      changeQuestion();
   });

   // Alyssa
   $("#AnswerC").hover(function(){
      $(this).css("background-color", "#336699");
   });

   // Alyssa, Makenzie
   $("#AnswerC").mouseout(function(){
      $(this).css("background-color", "rgba(4, 59, 92, 0.5)");
   });

   // Jordan
   $("#AnswerD").click(function(){ 
      checkAnswer(3);  
      changeQuestion(); 
   });

   // Alyssa
   $("#AnswerD").hover(function(){
      $(this).css("background-color", "#336699");
   });

   // Alyssa, Makenzie
   $("#AnswerD").mouseout(function(){
      $(this).css("background-color", "rgba(4, 59, 92, 0.5)");
   });

   // Alyssa
   $("button").click(function(){
      $("button").hide();
      $("#intro").hide();
   });
  
   // Alyssa
   $("button").hover(function(){
        $(this).css("background-color", "darkgrey");
   });
  
   // Alyssa
   $("button").mouseout(function(){
        $(this).css("background-color", "white");
   });



}); // end document.ready()