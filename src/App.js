import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './style/home.css';
import Title from './components/title.js'
import Grid from './components/grid.js';
import ScoreBoard from './components/scoreboard.js';
import CurrentMove from './components/currentmove.js';

const idArray = [];

function createArray() {
  for (var i = 1; i <= 100; i++) {
    const num = i.toString();
    idArray.push(num);
 };
};
createArray();

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
};
shuffle(idArray);

const pillArray = idArray.splice(0, 6);
const shroomArray = idArray.splice(0, 6);
const kArray = idArray.splice(0, 4);
const kHoleArray = idArray.splice(0, 2);
const waterArray = idArray.splice(0, 5);
const robotHeartArray = idArray.splice(0, 1);
const mayanWarriorArray = idArray.splice(0, 1);
const dustCityArray = idArray.splice(0, 2);
const templeArray = idArray.splice(0, 1);
const heartWarriorArray = idArray.splice(0, 1);
const oldFriendArray = idArray.splice(0, 2);
const crossRoadsArray = idArray.splice(0, 1);
const cuddlePuddleArray = idArray.splice(0, 2);
const funArray = idArray.splice(0, 1);
const portaPottyArray = idArray.splice(0, 3);
const daftPunkArray = idArray.splice(0, 1);
const lostBikeArray = idArray.splice(0, 1);
const dustPileArray = idArray.splice(0, 2);
const dustStormArray = idArray.splice(0, 2);
const leftFunArray = idArray.splice(0, 1);
const reverseCowgirlArray = idArray.splice(0, 1);
const artPieceArray = idArray.splice(0, 2);
const cleanPortaArray = idArray.splice(0, 2);
const baahsArray = idArray.splice(0, 1);


function App() {

  const [currentScore, setCurrentScore] = useState(0);
  const [soberScore, setSoberScore] = useState(0);

  const [currentMove, setCurrentMove] = useState("");
  const [scoreMove, setScoreMove] = useState("");
  const [moveEmoji, setMoveEmoji] = useState("");
  const [scoreColor, setScoreColor] = useState("");
  const [soberMove, setSoberMove] = useState("");

  const [moveTitle, setMoveTitle] = useState("Current Move:");

  function disableBtn(id) {
    document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById(id).disabled = true;
  });};
  function enableBtn(id) {
    document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById(id).disabled = false;
  });};
  disableBtn("newBtn");


  function handlePill(num) {
    document.getElementById(num).innerHTML = "&#x1F48A";
    setCurrentMove("Good golly miss Molly!");
    setScoreMove("+3");
    setMoveEmoji("💊");
    setScoreColor("green");
    setSoberMove("(F'ed up +1)");
  };
  function handleShroom(num) {
    document.getElementById(num).innerHTML = "&#x1F344";
    setCurrentMove("Some goooood mushrooms babayyy!");
    setScoreMove("+3");
    setMoveEmoji("🍄");
    setScoreColor("green");
    setSoberMove("(F'ed up +1)");
  };
  function handleDefault(num) {
    document.getElementById(num).innerHTML = "&#x1F6B4";
    setCurrentMove("Just Playa cruisin'");
    setMoveEmoji("🚴");
    setScoreMove("");
    setScoreColor("");
    setSoberMove("");
  };
  function handleK(num) {
    document.getElementById(num).innerHTML = "K";
    setCurrentMove("A lil' bump of K!");
    setScoreMove("+3");
    setMoveEmoji("K");
    setScoreColor("green");
    setSoberMove("(F'ed up +1)");
  };
  function handleKHole(num) {
    document.getElementById(num).innerHTML = "ꓘ";
    setCurrentMove("Woah! You're deep in a K Hole now, take it easy!");
    setScoreMove("-5");
    setMoveEmoji("ꓘ");
    setScoreColor("red");
    setSoberMove("(F'ed up +3)");
  };
  function handleRobotHeart(num) {
    document.getElementById(num).innerHTML = "&#x1F496";
    setCurrentMove("You found Robot Heart! Too bad you're too ugly to get on top.");
    setScoreMove("+10");
    setMoveEmoji("💖");
    setScoreColor("green");
    setSoberMove("");
  };
  function handleWater(num) {
    document.getElementById(num).innerHTML = "&#x1F4A7";
    setCurrentMove("A good chug of water to keep you going.");
    setScoreMove("+5");
    setMoveEmoji("💧");
    setScoreColor("green");
    setSoberMove("(F'ed up -1)");
  };
  function handleMayanWarrior(num) {
    document.getElementById(num).innerHTML = "&#x1F941";
    setCurrentMove("You found Mayan Warrior! The beat is flowing through you now!");
    setScoreMove("+10");
    setMoveEmoji("🥁");
    setScoreColor("green");
    setSoberMove("");
  };
  function handleDustCity(num) {
    document.getElementById(num).innerHTML = "&#x1F96A";
    setCurrentMove("Dust City Diner! A perfect grilled cheese to keep you going.");
    setScoreMove("+5");
    setMoveEmoji("🥪");
    setScoreColor("green");
    setSoberMove("(F'ed up -2)");
  };
  function handleTemple(num) {
    document.getElementById(num).innerHTML = "&#x1F64F";
    setCurrentMove("A quick stop in the Temple to center yourself.");
    setScoreMove("+5");
    setMoveEmoji("🙏🏽");
    setScoreColor("green");
    setSoberMove("(F'ed up -1)");
  };
  function handleHeartWarrior(num) {
    document.getElementById(num).innerHTML = "&#x1F92F";
    setCurrentMove("You found the Mayan Warrior and Robot Heart hook up! OONTZ OONTZ!");
    setScoreMove("+15");
    setMoveEmoji("🤯");
    setScoreColor("green");
    setSoberMove("");
  };
  function handleOldFriend(num) {
    document.getElementById(num).innerHTML = "&#x1F91D";
    setCurrentMove("You ran into an old friend!");
    setScoreMove("+5");
    setMoveEmoji("🤝");
    setScoreColor("green");
    setSoberMove("");
  };
  function handleCrossRoads(num) {
    document.getElementById(num).innerHTML = "&#x1F3B8";
    setCurrentMove("You just caught some great live music at Crossroads!");
    setScoreMove("+7");
    setMoveEmoji("🎸");
    setScoreColor("green");
    setSoberMove("");
  };
  function handleCuddlePuddle(num) {
    document.getElementById(num).innerHTML = "&#x1F917";
    setCurrentMove("A cuddle puddle!");
    setScoreMove("+5");
    setMoveEmoji("🤗");
    setScoreColor("green");
    setSoberMove("");
  };
  function handleFun(num) {
    document.getElementById(num).innerHTML = "&#x1F389";
    setCurrentMove("You just realized you're having the most fun you've ever had.");
    setScoreMove("+5");
    setMoveEmoji("🎉 ");
    setScoreColor("green");
    setSoberMove("");
  };
  function handlePortaPotty(num) {
    document.getElementById(num).innerHTML = "&#x1F9FB";
    setCurrentMove("No toilet paper in the porta potty.");
    setScoreMove("-3");
    setMoveEmoji("🧻");
    setScoreColor("red");
    setSoberMove("");
  };
  function handleDaftPunk(num) {
    document.getElementById(num).innerHTML = "&#x1F5D1";
    setCurrentMove("You made it to the trash fence ... and no Daft Punk. Can't believe you fell for it!");
    setScoreMove("-10");
    setMoveEmoji("🗑️");
    setScoreColor("red");
    setSoberMove("");
  };
  function handleLostBike(num) {
    document.getElementById(num).innerHTML = "&#x1F6B6";
    setCurrentMove("You lost your bike! It's a long walk back to camp...");
    setScoreMove("-5");
    setMoveEmoji("🚶🏽");
    setScoreColor("red");
    setSoberMove("");
  };
  function handleDustPile(num) {
    document.getElementById(num).innerHTML = "&#x1F4A5";
    setCurrentMove("Ooof you hit a big dust pile and went over your handle bars.");
    setScoreMove("-4");
    setMoveEmoji("💥");
    setScoreColor("red");
    setSoberMove("");
  };
  function handleDustStorm(num) {
    document.getElementById(num).innerHTML = "&#x26C8";
    setCurrentMove("Caught in a dust storm. Which way is the Man now?");
    setScoreMove("-4");
    setMoveEmoji("⛈️ ");
    setScoreColor("red");
    setSoberMove("");
  };
  function handleLeftFun(num) {
    document.getElementById(num).innerHTML = "&#x1F641";
    setCurrentMove("Your friend convinced you to leave the party to check out a new art car, and now its not where they thought it was. Don't leave fun for fun!");
    setScoreMove("-10");
    setMoveEmoji("🙁");
    setScoreColor("red");
    setSoberMove("");
  };
  function handleReverseCowgirl(num) {
    document.getElementById(num).innerHTML = "&#x1F920";
    setCurrentMove("The Reverse Cowgirl Creamery has been playing techno for the last 4 hours. You love techno.");
    setScoreMove("+10");
    setMoveEmoji("🤠");
    setScoreColor("green");
    setSoberMove("");
  };
  function handleArtPiece(num) {
    document.getElementById(num).innerHTML = "&#x1F5BC";
    setCurrentMove("Woah, that art installation? Speechless...");
    setScoreMove("+5");
    setMoveEmoji("🖼️");
    setScoreColor("green");
    setSoberMove("");
  };
  function handleCleanPorta(num) {
    document.getElementById(num).innerHTML = "&#x1F6BD";
    setCurrentMove("Freshly cleaned porta potty with TP!");
    setScoreMove("+3");
    setMoveEmoji("🚽");
    setScoreColor("green");
    setSoberMove("");
  };
  function handleBaahs(num) {
    document.getElementById(num).innerHTML = "&#x1F411";
    setCurrentMove("Pretty decent set on BAAHS right now.");
    setScoreMove("+7");
    setMoveEmoji("🐑");
    setScoreColor("green");
    setSoberMove("");
  };
  function gameOver() {
  setMoveTitle("GAME OVER!");
  setCurrentMove("You got too f*cked up! Take it easier tomorrow night or you won't catch a sunrise!");
  setMoveEmoji("😵");
  setScoreMove("");
  setScoreColor("");
  setSoberMove("");
  enableBtn("newBtn");
  document.getElementById("newBtn").disabled = false;
  document.querySelectorAll(".box").forEach(elem => {elem.disabled = true});
};
function win() {
setMoveTitle("WINNER!");
setCurrentMove("What a sunrise! Gimme a hug!");
setMoveEmoji("🌅");
setScoreMove("");
setScoreColor("");
setSoberMove("");
enableBtn("newBtn");
document.getElementById("newBtn").disabled = false;
document.querySelectorAll(".box").forEach(elem => {elem.disabled = true});
};
function tie() {
setMoveTitle("WINNER!");
setCurrentMove("Wow, you passed out exactly at sunrise. Good thing it was into a pile of bean bags. We'll call it a win!");
setMoveEmoji("🌅");
setScoreMove("");
setScoreColor("");
setSoberMove("");
enableBtn("newBtn");
document.getElementById("newBtn").disabled = false;
document.querySelectorAll(".box").forEach(elem => {elem.disabled = true});
};

function checkGame() {
  if (moveTitle !== "GAME OVER!" && moveTitle !== "WINNER!") {
  if (soberScore >= 10 && currentScore < 100) {gameOver()}
  else if (currentScore >= 100 && soberScore < 10) {win()}
  else if (currentScore >= 100 && soberScore >= 10) {tie()}
}
};

  function handleClick(event) {
    const currentId = event.target.id;
    if (pillArray.includes(currentId)) {
      if (currentScore >= 97) {setCurrentScore(100)} else {setCurrentScore(currentScore + 3)};
      if (soberScore >= 9) {setSoberScore(10)} else {setSoberScore(soberScore + 1)};
      handlePill(currentId);
      document.getElementById(currentId).disabled = true;
  } else if
    (shroomArray.includes(currentId)) {
      if (currentScore >= 97) {setCurrentScore(100)} else {setCurrentScore(currentScore + 3)};
      if (soberScore >= 9) {setSoberScore(10)} else {setSoberScore(soberScore + 1)};
      handleShroom(currentId);
      document.getElementById(currentId).disabled = true;
  } else if
    (kArray.includes(currentId)) {
      if (currentScore >= 97) {setCurrentScore(100)} else {setCurrentScore(currentScore + 3)};
      if (soberScore >= 9) {setSoberScore(10)} else {setSoberScore(soberScore + 1)};
      handleK(currentId);
      document.getElementById(currentId).disabled = true;
  } else if
    (kHoleArray.includes(currentId)) {
      if (currentScore >= 5) {setCurrentScore(currentScore - 5)} else {setCurrentScore(0)};
      if (soberScore >= 7) {setSoberScore(10)} else {setSoberScore(soberScore + 3)};
      handleKHole(currentId);
      document.getElementById(currentId).disabled = true;
  }
    else if
    (robotHeartArray.includes(currentId)) {
      if (currentScore >= 90) {setCurrentScore(100)} else {setCurrentScore(currentScore + 10)};
      handleRobotHeart(currentId);
      document.getElementById(currentId).disabled = true;
  } else if
    (waterArray.includes(currentId)) {
      if (currentScore >= 95) {setCurrentScore(100)} else {setCurrentScore(currentScore + 5)};
      if (soberScore >= 1) {setSoberScore(soberScore - 1)} else {setSoberScore(0)};
      handleWater(currentId);
      document.getElementById(currentId).disabled = true;
  } else if
  (mayanWarriorArray.includes(currentId)) {
    if (currentScore >= 90) {setCurrentScore(100)} else {setCurrentScore(currentScore + 10)};
    handleMayanWarrior(currentId);
    document.getElementById(currentId).disabled = true;
  } else if
  (dustCityArray.includes(currentId)) {
    if (currentScore >= 95) {setCurrentScore(100)} else {setCurrentScore(currentScore + 5)};
    if (soberScore >= 2) {setSoberScore(soberScore - 2)} else {setSoberScore(0)};
    handleDustCity(currentId);
    document.getElementById(currentId).disabled = true;
  } else if
  (templeArray.includes(currentId)) {
    if (currentScore >= 95) {setCurrentScore(100)} else {setCurrentScore(currentScore + 5)};
    if (soberScore >= 1) {setSoberScore(soberScore - 1)} else {setSoberScore(0)};
    handleTemple(currentId);
    document.getElementById(currentId).disabled = true;
  } else if
  (heartWarriorArray.includes(currentId)) {
    if (currentScore >= 85) {setCurrentScore(100)} else {setCurrentScore(currentScore + 15)};
    handleHeartWarrior(currentId);
    document.getElementById(currentId).disabled = true;
  } else if
  (oldFriendArray.includes(currentId)) {
    if (currentScore >= 95) {setCurrentScore(100)} else {setCurrentScore(currentScore + 5)};
    handleOldFriend(currentId);
    document.getElementById(currentId).disabled = true;
  } else if
  (crossRoadsArray.includes(currentId)) {
    if (currentScore >= 93) {setCurrentScore(100)} else {setCurrentScore(currentScore + 7)};
    handleCrossRoads(currentId);
    document.getElementById(currentId).disabled = true;
  } else if
  (cuddlePuddleArray.includes(currentId)) {
    if (currentScore >= 95) {setCurrentScore(100)} else {setCurrentScore(currentScore + 5)};
    handleCuddlePuddle(currentId);
    document.getElementById(currentId).disabled = true;
  } else if
  (funArray.includes(currentId)) {
    if (currentScore >= 95) {setCurrentScore(100)} else {setCurrentScore(currentScore + 5)};
    handleFun(currentId);
    document.getElementById(currentId).disabled = true;
  } else if
  (portaPottyArray.includes(currentId)) {
    if (currentScore >= 3) {setCurrentScore(currentScore - 3)} else {setCurrentScore(0)};
    handlePortaPotty(currentId);
    document.getElementById(currentId).disabled = true;
  } else if
  (daftPunkArray.includes(currentId)) {
    if (currentScore >= 10) {setCurrentScore(currentScore - 10)} else {setCurrentScore(0)};
    handleDaftPunk(currentId);
    document.getElementById(currentId).disabled = true;
  } else if
  (lostBikeArray.includes(currentId)) {
    if (currentScore >= 5) {setCurrentScore(currentScore - 5)} else {setCurrentScore(0)};
    handleLostBike(currentId);
    document.getElementById(currentId).disabled = true;
  } else if
  (dustPileArray.includes(currentId)) {
    if (currentScore >= 4) {setCurrentScore(currentScore - 4)} else {setCurrentScore(0)};
    handleDustPile(currentId);
    document.getElementById(currentId).disabled = true;
  } else if
  (dustStormArray.includes(currentId)) {
    if (currentScore >= 4) {setCurrentScore(currentScore - 4)} else {setCurrentScore(0)};
    handleDustStorm(currentId);
    document.getElementById(currentId).disabled = true;
  } else if
  (leftFunArray.includes(currentId)) {
    if (currentScore >= 10) {setCurrentScore(currentScore - 10)} else {setCurrentScore(0)};
    handleLeftFun(currentId);
    document.getElementById(currentId).disabled = true;
  } else if
  (reverseCowgirlArray.includes(currentId)) {
    if (currentScore >= 90) {setCurrentScore(100)} else {setCurrentScore(currentScore + 10)};
    handleReverseCowgirl(currentId);
    document.getElementById(currentId).disabled = true;
  } else if
  (artPieceArray.includes(currentId)) {
    if (currentScore >= 95) {setCurrentScore(100)} else {setCurrentScore(currentScore + 5)};
    handleArtPiece(currentId);
    document.getElementById(currentId).disabled = true;
  } else if
  (cleanPortaArray.includes(currentId)) {
    if (currentScore >= 97) {setCurrentScore(100)} else {setCurrentScore(currentScore + 3)};
    handleCleanPorta(currentId);
    document.getElementById(currentId).disabled = true;
  } else if
  (baahsArray.includes(currentId)) {
    if (currentScore >= 93) {setCurrentScore(100)} else {setCurrentScore(currentScore + 7)};
    handleBaahs(currentId);
    document.getElementById(currentId).disabled = true;
  }
  else
  {
    handleDefault(currentId);
    document.getElementById(currentId).disabled = true;
  };
  };

checkGame();

function clickGameBtn() {
  window.location.reload();
};

  return (
      <div className="container">
          <div className="title">
            <Title />
          </div>
          <aside className='left'>
            <ScoreBoard score={currentScore} sober={soberScore}/>
          </aside>
          <main>
            <Grid clicked={handleClick}/>
          </main>
          <aside className='right'>
            <CurrentMove name={moveTitle} value={currentMove} add={scoreMove} emoji={moveEmoji} color={scoreColor} show={clickGameBtn} sober={soberMove}/>
          </aside>
      </div>
    );
};

export default App;
