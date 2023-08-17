function calculateStudentStatistics(students) {
    if (!Array.isArray(students) || students.length === 0) {
      throw new Error("Invalid input: students should be a non-empty array.");
    }
  
    let totalScore = 0;
    let totalAge = 0;
    let highestScore;
    let lowestScore;
    let highestAge;
    let lowestAge;
  
    for (const student of students) {
        const { Name, Email, Age, Score } = student;
  
        totalScore += Score;
        totalAge += Age;
  
        if (highestScore === undefined || Score > highestScore) {
            highestScore = Score;
        }
  
        if (lowestScore === undefined || Score < lowestScore) {
            lowestScore = Score;
        }
  
        if (highestAge === undefined || Age > highestAge) {
            highestAge = Age;
        }
  
        if (lowestAge === undefined || Age < lowestAge) {
            lowestAge = Age;
        }
    }
  
    const averageScore = totalScore / students.length;
    const averageAge = totalAge / students.length;
  
    return {
        Score: {
            Highest: highestScore,
            Lowest: lowestScore,
            Average: averageScore,
        },
        Age: {
            Highest: highestAge,
            Lowest: lowestAge,
            Average: averageAge,
        },
    };
}


const students = [
    { Name: "Ali", Email: "ali@example.com", Age: 28, Score: 91 },
    { Name: "Bobi", Email: "bobi@example.com", Age: 26, Score: 80 },
    { Name: "Cindy", Email: "cindy@example.com", Age: 27, Score: 75 },
  ];
  
const result = calculateStudentStatistics(students);
console.log(result);
  