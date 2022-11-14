/* Most of the question logic and switching between questions
   ... probably a changeQuestion function and checkAnswer function*/

/* what should the punishment be for an incorrect question? */

/* we can also mess around with different audio clips throughout 
   and maybe a video clip at the end (voldemort killing harry for a loss
   and harry killing voldemort for a win) */


// shoved into a method to be collapsed for ease of working
// **click arrow to left of function to collapse 200 lines
function genQuestions() {
   /* possible format to store questions as objects
      we would pop the variables in and out of the 
      respective htlm divs to change them 
   
      let the answers be 0-3, so when div 'c' is clicked,
      2 is submitted as an answer...makes logic for checking
      for correctness easier (checking two integers for equality*/

   Question0 = {
      question: "How much does LVC cost",
      a: "a little",
      b: "not enough",
      c: "enough",
      d: "way too much",
      answer: 3 ,
      asked: false // keep track to not duplicate questions in a game
   }
   /* get access to the object variables by 
      Question0.answer 
      this returns 3 */
   
   Question1 = {
      question: "",
      a: "",
      b: "",
      c: "",
      d: "",
      answer: 2, //change
      asked: false
   }
   
   Question2 = {
      question: "",
      a: "",
      b: "",
      c: "",
      d: "",
      answer: 2, //change
      asked: false
   }
   
   Question3 = {
      question: "",
      a: "",
      b: "",
      c: "",
      d: "",
      answer: 2, //change
      asked: false
   }
   
   Question4 = {
      question: "",
      a: "",
      b: "",
      c: "",
      d: "",
      answer: 2, //change
      asked: false
   }
   
   Question5 = {
      question: "",
      a: "",
      b: "",
      c: "",
      d: "",
      answer: 2, //change
      asked: false
   }
   
   Question6 = {
      question: "",
      a: "",
      b: "",
      c: "",
      d: "",
      answer: 2, //change
      asked: false
   }
   
   Question7 = {
      question: "",
      a: "",
      b: "",
      c: "",
      d: "",
      answer: 2, //change
      asked: false
   }
   
   Question8 = {
      question: "",
      a: "",
      b: "",
      c: "",
      d: "",
      answer: 2, //change
      asked: false
   }
   
   Question9 = {
      question: "",
      a: "",
      b: "",
      c: "",
      d: "",
      answer: 2, //change
      asked: false
   }
   
   Question10 = {
      question: "",
      a: "",
      b: "",
      c: "",
      d: "",
      answer: 2, //change
      asked: false
   }
   
   Question11 = {
      question: "",
      a: "",
      b: "",
      c: "",
      d: "",
      answer: 2, //change
      asked: false
   }
   
   Question12 = {
      question: "",
      a: "",
      b: "",
      c: "",
      d: "",
      answer: 2, //change
      asked: false
   }
   
   Question13 = {
      question: "",
      a: "",
      b: "",
      c: "",
      d: "",
      answer: 2, //change
      asked: false
   }
   
   Question14 = {
      question: "",
      a: "",
      b: "",
      c: "",
      d: "",
      answer: 2, //change
      asked: false
   }
   
   Question15 = {
      question: "",
      a: "",
      b: "",
      c: "",
      d: "",
      answer: 2, //change
      asked: false
   }
   
   Question16 = {
      question: "",
      a: "",
      b: "",
      c: "",
      d: "",
      answer: 2, //change
      asked: false
   }
   
   Question17 = {
      question: "",
      a: "",
      b: "",
      c: "",
      d: "",
      answer: 2, //change
      asked: false
   }
   
   Question18 = {
      question: "",
      a: "",
      b: "",
      c: "",
      d: "",
      answer: 2, //change
      asked: false
   }
   
   Question19 = {
      question: "",
      a: "",
      b: "",
      c: "",
      d: "",
      answer: 2, //change
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

   qasked++; // increment because we asked a new question
}

/* check if the answer was correct by comparing the answer with 
   the question Object's answer value */
function checkAnswer(answer) {
   if(true) { // answer is correct
      qcorrect++;
      answerCorrect();
   } else { // answer is wrong
      // make them cry
      answerIncorrect();
   }
   changeQuestion(); // change question after checking answer
}

// change healthbar & anything else
function answerCorrect() {

}

// what happens here?
function answerIncorrect() {

}


var questions = genQuestions(); // array of 20 questions

// keep track of how many answers were correct
var qasked = 0;
var qcorrect = 0;
var shown = 0; // current question shown...useful in checking answer
/* click functionality in here, show first random question */
$(document).ready(function() {

   changeQuestion();

   // click functionality for the 4 different answers
   $("#answerA").click(checkAnswer(0));

   $("#answerB").click(checkAnswer(1));

   $("#answerC").click(checkAnswer(2));

   $("#answerD").click(checkAnswer(3));


}); // end document.ready()