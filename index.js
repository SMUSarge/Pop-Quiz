let score;

const question1 = "What is 2 + 2? \n1. 3 \n2. 4 \n3. 5";
const questionOneInput = prompt(question1);
if (questionOneInput === null) {
  return;
}
if (parseInt(questionOneInput) === 2) {
  score = 1;
  alert(`Correct! Your score is: ${score}`);
} else {
  score = 0;
  alert(`Incorrect! The correct answer was 2. Your score is:  ${score}. `);
}

const question2 = "What is 2 / 2? \n1. 1 \n2. 2 \n3. 0";
const answer2 = 1;
const questionTwoInput = prompt(question2);
if (questionTwoInput === null) {
  return;
}

if (parseInt(questionTwoInput) === answer2) {
  score += 1;
  alert(`Correct! Your score is: ${score}`);
} else {
  score += 0;
  alert(
    `Incorrect! The correct answer was ${answer2}. Your score is:  ${score}. `,
  );
}

const question3 = "What is 2 % 2? \n1. 0 \n2. 1 \n3. 2";
const answer3 = 1;
const questionThreeInput = prompt(question3);
if (questionThreeInput === null) {
  return;
}
if (parseInt(questionThreeInput) === answer3) {
  score += 1;
  alert(`Correct! Your final score is: ${score}`);
} else {
  score += 0;
  alert(
    `Incorrect! The correct answer was ${answer3}. Your final score is:  ${score}. `,
  );
}
