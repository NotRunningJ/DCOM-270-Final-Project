/* Most of the question logic and switching between questions
   ... probably a changeQuestion function and checkAnswer function*/

/* what should the punishment be for an incorrect question? */

/* we can also mess around with different audio clips throughout 
   and maybe a video clip at the end (voldemort killing harry for a loss
   and harry killing voldemort for a win) */

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

/* go all the way to 19 because we start at 0 */

/* would be helpful (and easier) to then store these questions in an array
   then idx 5 of the array would correlate with question 5 */

/* keep track of the questions we have already shown to not duplicate */
function changeQuestion() {

}

/* store the answers to each question somehow - not sure how data structures work
   in js, but a hashMap / dictionary would work well 
   We could then pass in the question number to check it. */
function checkAnswer(questionNumber) {
   changeQuestion(); // change question after checking answer..or only change if correct
}

/* click functionality in here? */
$(document).ready(function() {
   // Returns a random integer from 0 to 19: *20 questions
   qNum = Math.floor(Math.random() * 20);


}); // end document.ready()