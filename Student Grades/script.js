function calculateGrade() {
	const marksInput = document.getElementById("marks");
	const marks = parseFloat(marksInput.value);
  
	if (isNaN(marks) || marks < 0 || marks > 100) {
	  document.getElementById("result").textContent = "Invalid input. Marks should be between 0 and 100.";
	  return;
	}
  
	let grade;
  
	if (marks > 79) {
	  grade = 'A';
	} else if (marks >= 60) {
	  grade = 'B';
	} else if (marks >= 50) {
	  grade = 'C';
	} else if (marks >= 40) {
	  grade = 'D';
	} else {
	  grade = 'E';
	}
  
	const percentage = (marks / 100) * 100;
	document.getElementById("result").textContent = `Percentage: ${percentage.toFixed(2)}%, Grade: ${grade}`;
  }
  