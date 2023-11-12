function calculateGrade(percentage) {
  //your code here
	if (percentage >= 90 && percentage <= 100) {
    return "A";
  } else if (percentage >= 80 && percentage <= 89) {
    return "B";
  } else if (percentage >= 70 && percentage <= 79) {
    return "C";
  } else if (percentage >= 60 && percentage <= 69) {
    return "D";
  } else {
    return "F";
  }
}

const percentage = parseInt(prompt("Enter Percentage."));
alert(calculateGrade(percentage));
