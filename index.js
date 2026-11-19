// Initialize the score variable to keep track of the user's score
let score = 0;
// Ask the user the first question about taste buds
// The user will input their choice as 1, 2, or 3

const choice1 = prompt(
  "About how many taste buds does the average human tongue have? (in the thousands)\n" +
    "Pick an option (enter 1, 2, or 3):\n" +
    "1. 25\n" +
    "2. 15\n" +
    "3. 10",
);
// alert(typeof choice1);

const answ1 = "3";

if (choice1 === answ1) {
  score += 1;
  alert("You chose 10k");
  alert("Correct!");
} else if (choice1 === "2") {
  alert("You chose 15k");
  alert("Incorrect!");
  score = 0;
} else if (choice1 === "1") {
  alert("You chose 25k");
  alert("Incorrect!");
  score = 0;
} else {
  alert("Invalid or canceled");
}

const choice2 = prompt(
  "Which is the world’s most ancient forest? :\n" +
    "1. Amazon Rainforest\n" +
    "2. Taiga\n" +
    "3. Daintree Forest",
);
const answ2 = "3";

if (choice2 === answ2) {
  score += 1;
  alert("You chose Daintree Forest");
  alert("Correct!");
} else if (choice2 === "2") {
  alert("You chose Taiga");
  alert("Incorrect!");
  score += 0;
} else if (choice2 === "1") {
  alert("You chose Amazon Rainforest");
  alert("Incorrect!");
  score += 0;
} else {
  alert("Invalid  choice");
}
alert(`Your final score is: ${score}`);

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
  alert("You chose Snow White and the Seven Dwarfs ");
  alert("Correct!");
} else if (choice3 === "2") {
  alert("You chose Pinocchio");
  alert("Incorrect!");
  score += 0;
} else if (choice3 === "3") {
  alert("You chose Fantasia");
  alert("Incorrect!");
  score += 0;
} else {
  alert("Invalid or canceled");
}

alert(`Your final score is: ${score}`);
