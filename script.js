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
      "Ti Leaf will work great. What task will you do next? Build🔨 or eat 🍽?"
    );
  } else {
    playerAnswer = prompt(
      "Bamboo will work great. What task will you do next? Build🔨 or eat 🍽?"
    );
  }

  if (playerAnswer != "eat") {
    playerAnswer = prompt(
      "Nice choice！ Your area looks safe. Now that you have set up a basecamp will you rest💤 or explore🧭?"
    );
  } else {
    playerAnswer = prompt(
      "Yum! You're lucky there was some Mountain apples🍎 in the area. Now will you rest💤 or explore🧭?"
    );
  }

  if (playerAnswer != "rest") {
    playerAnswer = prompt(
      "Explore?! Not for long.. I think I see someone over there! Someone....living. Will you walk over and ask for help?"
    );
  } else {
    playerAnswer = prompt(
      "* YAWN * Much better.. Hmm I think I see someone over there! Someone....living. Will walk over and ask for help?"
    );
  }
  if (playerAnswer != "no") {
    playerAnswer = alert(
      "Haven't you watched any movies?! Taserface has hit you over the head with a shovel and taken your shelter! ❌GAME OVER❌"
    );
  } else {
    playerAnswer = alert(
      "Ahh nice choice. You have made it to the second level!🥳"
    );
  }
};
const btn = document.querySelector("button");
btn.addEventListener("click", startAdventure, false);
