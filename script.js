const gradeForm = document.getElementById("grade-form");
const resultsSection = document.getElementById("results");
const errorMessage = document.getElementById("error-message");
const totalResult = document.getElementById("total-result");
const averageResult = document.getElementById("average-result");
const gradeResult = document.getElementById("grade-result");
const feedbackResult = document.getElementById("feedback-result");

function getGrade(average) {
  if (average >= 90) return "A";
  if (average >= 80) return "B";
  if (average >= 70) return "C";
  if (average >= 60) return "D";
  if (average >= 50) return "E";
  return "F";
}

function getFeedback(grade) {
  if (grade === "A") return "Excellent work! Keep it up.";
  if (grade === "B") return "Great job! Keep improving.";
  if (grade === "C") return "Good effort. There is room to grow.";
  if (grade === "D") return "Keep practising and strengthen your understanding.";
  if (grade === "E") return "Review your subjects and keep practising.";
  return "Keep going. Review the topics and try again.";
}

gradeForm.addEventListener("submit", function (event) {
  event.preventDefault();

  errorMessage.textContent = "";
  const inputs = [
    document.getElementById("subject1"),
    document.getElementById("subject2"),
    document.getElementById("subject3"),
    document.getElementById("subject4"),
    document.getElementById("subject5")
  ];
  const marks = inputs.map(input => Number(input.value));

  const hasInvalidMark = inputs.some((input, index) =>
    input.value.trim() === "" ||
    !Number.isFinite(marks[index]) ||
    marks[index] < 0 ||
    marks[index] > 100
  );

  if (hasInvalidMark) {
    errorMessage.textContent = "Please enter a valid mark between 0 and 100 for every subject.";
    resultsSection.hidden = true;
    return;
  }

  const total = marks.reduce((sum, mark) => sum + mark, 0);
  const average = total / marks.length;
  const grade = getGrade(average);

  totalResult.textContent = `${Number(total.toFixed(2))} / 500`;
  averageResult.textContent = `${average.toFixed(2)}%`;
  gradeResult.textContent = grade;
  feedbackResult.textContent = getFeedback(grade);
  resultsSection.hidden = false;
  resultsSection.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

gradeForm.addEventListener("reset", function () {
  errorMessage.textContent = "";
  resultsSection.hidden = true;
});
