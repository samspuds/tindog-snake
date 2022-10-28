import dogs from "./data.js";
import Dog from "./Dog.js";

let dogArray = [
  "Rex",
  "Bella",
  "Teddy",
  "Snake1",
  "Snake2",
  "Snake3",
  "Snake4",
];
let isWaiting = false;

function getDog() {
  const nextDogData = dogs[dogArray.shift()];
  return nextDogData ? new Dog(nextDogData) : {};
}

function decide() {
  if (!isWaiting) {
    render();

    dirtyWork();
  }
}

function dirtyWork() {
  if (dogArray.length > 0) {
    setTimeout(() => {
      dogg = getDog();
      render();
      isWaiting = false;
    }, 1500);
  } else {
    endGame();
  }
}

function liiked() {
  if (!isWaiting) {
    liked();
    // render();
    dirtyWork();
  }
}

function nooped() {
  if (!isWaiting) {
    noped();
    // render();

    dirtyWork();
  }
}

function endGame() {
  // isWaiting = true;
  const endMessage =
    dogArray.length >= 0 ? "Check back later for more snakes" : "ddewd";

  const endEmoji = dogArray.length <= 0 ? "😎" : "☠️";
  setTimeout(() => {
    document.getElementById("MAIN-default-state").innerHTML = `
              <div class="end-game">
                  <h2>Game Over. </h2> 
                  <h3>${endMessage} </h3>
                  <p class="end-emoji">${endEmoji}</p>
              </div>
              `;
  }, 1500);
}

document.getElementById("accept-button").addEventListener("click", liiked);
document.getElementById("reject-button").addEventListener("click", nooped);

function liked() {
  document.getElementById("MAIN-default-state").innerHTML = dogg.likedPic();
}

function noped() {
  document.getElementById("MAIN-default-state").innerHTML = dogg.nopedPic();
}

function render() {
  document.getElementById("MAIN-default-state").innerHTML = dogg.getDogHtml();
}

let dogg = getDog();
render();
