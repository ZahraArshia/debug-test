//Get the target element
const duck = document.querySelector("#duck");
//Add the click event listener
duck.addEventListener("click", () => {
  //Dont forget call the functions here 
  increaseScore();
  moveDuck();
});

//Increase score by 1
const increaseScore = () => {
  //Get the content of the target element. The current value for score
  const score = document.querySelector("#score-counter").innerHTML;
  //Get the element to increase the value
  const scoreHTML = document.querySelector("#score-counter");
  //Cast the score value to Number type
  let count = Number(score);
  //Set the new score to the target element
  scoreHTML.innerHTML = count + 1;
};

//Get a random number
const getRandomNum = (num) => {
  return normalize(Math.floor(Math.random() * Math.floor(num)));
}
function normalize(x) {
  return (x) / 2;
}
/*
Move the duck randomly 
*/
const moveDuck = () => {
  const w = window.innerWidth;
  const h = window.innerHeight;
  duck.style.top = getRandomNum(w) + "px";
  duck.style.left = getRandomNum(h) + "px";
};

