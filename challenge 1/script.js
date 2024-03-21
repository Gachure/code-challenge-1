function getGrade() {
    let marks = document.getElementById("marks").value;
    if (marks < 0 || marks > 100) {
      document.getElementById("grade").innerHTML = "Invalid Input!";
    } else if (marks > 79) {
      document.getElementById("grade").innerHTML = "Grade: A";
    } else if (marks >= 60 && marks <= 79) {
      document.getElementById("grade").innerHTML = "Grade: B";
    } else if (marks >= 59 && marks <= 49) {
      document.getElementById("grade").innerHTML = "Grade: C";
    } else if (marks >= 40 && marks <= 49) {
      document.getElementById("grade").innerHTML = "Grade: D";
    } else if (marks < 40) {
      document.getElementById("grade").innerHTML = "Grade: E";
    }
  }