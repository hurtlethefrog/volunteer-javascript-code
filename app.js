const answerGenerator = () => {
  let randNum = math.random(3);
  let ans = "";
  document.getElementById(`button-holder`).style.display = "block";
  switch (randNum) {
    case randNum <= 1:
      ans = "rock";
      break;
    case randNum >= 2:
      ans = "scissors";
      break;
    default:
      ans = "paper";
      break;
  }
  return ans;
};

const answerCheck = (ans, type) => {
  if (ans == type) {
    document.getElementById(`win`).style.display = "block";
  }
  document.getElementById(`loss`).style.display = "block";
};

export { answerCheck, answerGenerator };
