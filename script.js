/**
 * JS API FUNCTION TO USE ARE:
 * alert(); standard text for read only
 *let answer =  confirm(); - yes or no questions
 * let otherAnswer = prompt(); - open ended questions
 */
let playerName;
let playerAge;
let wantsToPlay;
let chooseLocation;
let playerAnswer;

const startAdventure = () => {
  alert("Let's go on an adventure!");
  playerName = prompt("What's your name?");
  alert(`Hello ${playerName}, it's nice to meet you.`);
  playerAge = prompt("Do you mind if I ask you how old you are?");

  if (playerAge <= 18) {
    alert("Sorry you aint old enough");
  }

  wantsToPlay = confirm("Do you want to play a game with me?");

  if (wantsToPlay) {
    playerAnswer = prompt(
      "Thanks for playing! Humankind has been threated by the undead. Head to safety...Abandoned Costco or The Woods?"
    );
  }

  if (playerAnswer != "costco") {
    playerAnswer = prompt(
      "Welcome to the woods👣🌲 Your next decision may be your last...Shelter or Food?"
    );
  } else {
    playerAnswer = prompt(
      "Welcome to Costco🛒 Your next decision may be your last..Shelter or Food?"
    );
  }

  if (playerAnswer != "shelter") {
    alert("Oh no! No food there, just zombies. ❌GAME OVER❌ 🫥");
  } else {
    playerAnswer = prompt(
      "Good Idea. Which material will work best? Ti Leaf🌱 or Bamboo🎍?"
    );
  }
  if (playerAnswer != "bamboo") {
    playerAnswer = prompt(
      "Ti Leaf will work great. What task will you do next? Build or eat?"
    );
  } else {
    playerAnswer = prompt(
      "Bamboo will work great. What task will you do next? Build or eat?"
    );
  }

  if (playerAnswer != "eat") {
    alert("Nice choice. You have completed Level One.");
  } else {
    playerAnswer = prompt("There's two fruit trees! Noni or Mountainapple? ");
  }

  if (playerAnswer != "noni") {
    playerAnswer = alert("Oh no! Bad apple! ❌GAME OVER❌");
  } else {
    playerAnswer = alert("Nice choice. You have completed Level One.");
  }
};
const btn = document.querySelector("button");
btn.addEventListener("click", startAdventure, false);
