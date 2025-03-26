// List of questions and options
const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: "Mars"
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic", "Indian", "Arctic", "Pacific"],
      answer: "Pacific"
    },
    {
      question: "Who developed the theory of relativity?",
      options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
      answer: "Albert Einstein"
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  // Function to load the question
  function loadQuestion() {
    const questionData = questions[currentQuestionIndex];
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
  
    questionElement.textContent = questionData.question;
    optionsElement.innerHTML = ""; // Clear previous options
  
    questionData.options.forEach(option => {
      const li = document.createElement("li");
      li.textContent = option;
      li.onclick = () => checkAnswer(option);
      optionsElement.appendChild(li);
    });
  
    // Hide the Next button until the user selects an answer
    document.getElementById("next-button").style.display = "none";
  }
  
  // Function to check if the selected answer is correct
  function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].answer;
  
    // Show feedback
    const options = document.querySelectorAll("#options li");
    options.forEach(option => {
      if (option.textContent === correctAnswer) {
        option.style.backgroundColor = "#4CAF50"; // Green for correct answer
      } else if (option.textContent === selectedOption) {
        option.style.backgroundColor = "#f44336"; // Red for incorrect answer
      }
    });
  
    // Increment score if the answer is correct
    if (selectedOption === correctAnswer) {
      score++;
    }
  
    // Show the next button
    document.getElementById("next-button").style.display = "inline-block";
  }
  
  // Function to move to the next question
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      // End of quiz, show score
      showScore();
    }
  }
  
  // Function to show the score at the end of the quiz
  function showScore() {
    document.getElementById("question-container").style.display = "none";
    document.getElementById("next-button").style.display = "none";
    document.getElementById("score-container").style.display = "block";
    document.getElementById("score").textContent = score;
  }
  
  // Function to restart the quiz
  function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("score-container").style.display = "none";
    document.getElementById("question-container").style.display = "block";
    loadQuestion();
  }
  
  // Initialize the quiz
  loadQuestion();
  