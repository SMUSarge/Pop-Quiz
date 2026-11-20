// Initialize the score variable to keep track of the user's score

let score = 0;

// Ask the user the first question about taste buds
// The user will input their choice as 1, 2, or 3

const option1 = "25";
const option2 = "15";
const option3 = "10";
const choice1 = prompt(
  "About how many taste buds does the average human tongue have? (in the thousands)\n" +
    "Pick an option (enter 1, 2, or 3):\n" +
    `1. ${option1}\n` +
    `2. ${option2}\n` +
    `3. ${option3}`,
);

const answ1 = "3";

if (choice1 === answ1) {
  score += 1;
  alert(`You chose 10k. Correct!`);
} else if (choice1 === "2") {
  alert(`You chose ${option2}. Incorrect! The answer is ${option3}.`);

  score = 0;
} else if (choice1 === "1") {
  alert(`You chose ${option1}. Incorrect! The answer is ${option3}.`);
  score = 0;
} else {
  alert("Invalid response. Please enter 1, 2, or 3.");
}

// Ask the user the second question about ancient forests
// The user will input their choice as 1, 2, or 3

const option4 = "Amazon Rainforest";
const option5 = "Taiga";
const option6 = "Daintree Forest";
const choice2 = prompt(
  "Which is the world’s most ancient forest? :\n" +
    `1. ${option4}\n` +
    `2. ${option5}\n` +
    `3. ${option6}`,
);

const answ2 = "3";

if (choice2 === answ2) {
  score += 1;
  alert("You chose Daintree Forest. Correct!");
} else if (choice2 === "2") {
  alert(`You chose ${option5}. Incorrect! The answer is ${option6}.`);
  score += 0;
} else if (choice2 === "1") {
  alert(`You chose ${option4}. Incorrect! The answer is ${option6}.`);
  score += 0;
} else {
  alert("Invalid response. Please enter 1, 2, or 3.");
}

// Ask the user the third question about Disney movies
// The user will input their choice as 1, 2, or 3

const choice3 = prompt(
  "What was the first feature-length animated movie ever released by Disney?)\n" +
    "Pick an option (enter 1, 2, or 3):\n" +
    "1. Snow White and the Seven Dwarfs\n" +
    "2. Pinocchio\n" +
    "3. Fantasia",
);

const answ3 = "1";

if (choice3 === answ3) {
  score += 1;
  alert("You chose Snow White and the Seven Dwarfs. Correct!");
} else if (choice3 === "2") {
  alert(
    `You chose Pinocchio. Incorrect! The answer is Snow White and the Seven Dwarfs.`,
  );
  score += 0;
} else if (choice3 === "3") {
  alert(
    `You chose Fantasia. Incorrect! The answer is Snow White and the Seven Dwarfs.`,
  );
  score += 0;
} else {
  alert("Invalid response. Please enter 1, 2, or 3.");
}

// Add a conditional statement to display the final score and a message based on the user's performanceq

if (score === 3) {
  alert(`Your final score is: ${score}. You are a trivia savant!`);
} else if (score === 2) {
  alert(`Your final score is: ${score}. Well done!`);
} else if (score === 1) {
  alert(`Your final score is: ${score}. Keep practicing!`);
} else {
  alert(`Your final score is: ${score}. Better luck next time!`);
}

// End of quiz script. To further this project, you could add more questions, track high scores, or create a more interactive user interface,and add css styling to improve the visual presentation of the quiz.
