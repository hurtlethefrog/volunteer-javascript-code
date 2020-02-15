let ans = "";
const answerGenerator = () => {
  let randNum = Math.floor(Math.random() * Math.floor(3));
  document.getElementById(`button-holder`).style.display = "block";
  switch (randNum) {
    case 0:
      ans = "rock";
      break;
    case 1:
      ans = "paper";
      break;
    case 2:
      ans = "scissors";
      break;
  }
  return ans;
};
const answerCheck = (ans, type) => {
  if (ans == type) {
    document.getElementById(`win`).style.display = "block";
  } else {
    document.getElementById(`loss`).style.display = "block";
  }
};
export { answerCheck, answerGenerator, ans };
