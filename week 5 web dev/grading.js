function calculateGrade(score) {
    if (isNaN(score)) {
      return "Error: Invalid input. Please provide a valid number.";
    }
  
    if (score >= 90 && score <= 100) {
      return "A";
    } else if (score >= 80 ) {
      return "B";
    } else if (score >= 70) {
      return "C";
    } else if (score >= 60) {
      return "D";
    } else if (score >= 0 ) {
      return "F";
    } else {
      return "Error: Score out of range. Please provide a valid score between 0 and 100.";
    }
  }