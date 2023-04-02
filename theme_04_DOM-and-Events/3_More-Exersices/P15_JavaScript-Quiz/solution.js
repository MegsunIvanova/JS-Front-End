function solve() {
  const questionsSections = Array.from(document.getElementsByTagName("section"));
  const answersWrappers = Array.from(document.getElementsByClassName("quiz-answer"));
  const resultContainer = document.getElementById("results");
  const resultH1 = document.querySelector("#results h1");

  let correctAnswers = {
    0: "onclick",
    1: "JSON.stringify()",
    2: "A programming API for HTML and XML documents",
  };

  let rightAnswers = 0;
  answersWrappers.forEach((container) => container.addEventListener("click", nextQuestionHandler));

  function nextQuestionHandler() {
   
    // if (this.className.includes("high-value")) {
    //   rightAnswers++;
    // }
    const currentQuestionContainer = this.parentNode.parentNode;
    let questionIndex = questionsSections.indexOf(currentQuestionContainer);
    let correct = correctAnswers[questionIndex];
    let answer = this.querySelector("p").textContent;
    if (correct === answer) {
      rightAnswers++;
    }

    // currentQuestionContainer.classList.add("hidden");
    currentQuestionContainer.style.display = "none";

    let nextQuestionIndex = questionIndex + 1;

    if (nextQuestionIndex < questionsSections.length) {
      // questionsSections[nextQuestionIndex].classList.remove("hidden");
      questionsSections[nextQuestionIndex].style.display = "block";
    } else {
      getResult();
    }
  }

  function getResult() {
    resultContainer.style.display = "block";
    if (rightAnswers === questionsSections.length) {
      resultH1.textContent = `You are recognized as top JavaScript fan!`
    } else {
      resultH1.textContent = `You have ${rightAnswers} right answers`
    }
  }

}
