/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/

let score = 0;

// 2. Store the rank of a player

let rank = "Unknown";

// 3. Select the <main> HTML element



/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/

answer1 = prompt('Name a programming language that you are learning?')
if (answer1.toUpperCase() == 'JAVASCRIPT') {
  score += 1;
}

answer2 = prompt('What is the programming language for web content creation?')
if (answer2.toUpperCase() == 'HTML') {
  score += 1;
}

answer3 = prompt('What language we use for styling web?')
if (answer3.toUpperCase() == 'CSS') {
  score += 1;
}

answer4 = prompt('What is the name of the college you study?')
if (answer4.toUpperCase() == 'DOUGLAS') {
  score += 1;
}

answer5 = prompt('What is the name of the city where your college is?')
if (answer5.toUpperCase() == 'NEW WESTMINSTER') {
  score += 1;
}

/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/

if (score == 5){
  rank = 'Gold'
}

else if (score > 2){
  rank = 'Silver'
}

else if (score > 0 ){
  rank = 'Bronze'
}

else 
  rank = 'No crown'


// 6. Output results to the <main> element

document.querySelector('main').innerHTML = 'Your score is '+ score +' out of 5 <br>'+ 'Your crown is ' + rank;