const answers = { q1: "a", q2: "a", q3: "a", q4: "b", q5: "b" };

document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let score = 0;
  let total = Object.keys(answers).length;
  let feedback = "";

  for (let q in answers) {
    const selected = document.querySelector(`input[name="${q}"]:checked`);
    if (selected) {
      if (selected.value === answers[q]) {
        score++;
        feedback += `<p class="correct">✔ Question ${q.substring(1)} correct</p>`;
      } else {
        feedback += `<p class="incorrect">✘ Question ${q.substring(1)} incorrect (Correct: ${answers[q].toUpperCase()})</p>`;
      }
    } else {
      feedback += `<p class="unanswered">⚠ Question ${q.substring(1)} not answered (Correct: ${answers[q].toUpperCase()})</p>`;
    }
  }

  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = `
    <h2>You scored ${score} out of ${total}!</h2>
    ${feedback}
  `;
  resultsDiv.classList.remove("hidden");
  resultsDiv.scrollIntoView({ behavior: "smooth" });
});