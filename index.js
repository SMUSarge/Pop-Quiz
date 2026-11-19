let score;
const question1 = "What is 2 + 2?";
const answer1 = 4;
const questionOneInput = prompt(question1);
if (parseInt(questionOneInput) === answer1) {
  score = 1;
  alert(`Correct! Your score is: ${score}`);
} else {
  score = 0;
  alert(
    `Incorrect! The correct answer was ${answer1}. Your score is:  ${score}. `,
  );
}

const question2 = "What is 2 / 2?";
const answer2 = 1;
const questionTwoInput = prompt(question2);
if (parseInt(questionTwoInput) === answer2) {
  score += 1;
  alert(`Correct! Your score is: ${score}`);
} else {
  score = 0;
  alert(
    `Incorrect! The correct answer was ${answer2}. Your score is:  ${score}. `,
  );
}

const question3 = "What is 2 % 2?";
const answer3 = 0;
const questionThreeInput = prompt(question3);
if (parseInt(questionThreeInput) === answer3) {
  score += 1;
  alert(`Correct! Your score is: ${score}`);
} else {
  score = 0;
  alert(
    `Incorrect! The correct answer was ${answer3}. Your score is:  ${score}. `,
  );
}

alert(`Your final score is: ${score}`);
