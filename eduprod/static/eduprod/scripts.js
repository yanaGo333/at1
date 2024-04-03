document.addEventListener("DOMContentLoaded", function() {

    let currentQuestionIndex = 0;
    
    const questions = JSON.parse(document.getElementById('content').getAttribute('data-questions'));
    
    const content = document.getElementById('content');
    
    const btn = document.getElementById('revealBtn');
    
    
    let filteredQuestions = [];
    
    const categorySelect = document.getElementById('categorySelect');
    
    
    function filterQuestionsByCategory(category) {
    
    if (category) {
    
    filteredQuestions = questions.filter(q => q.fields.category === category);
    
    } else {
    
    filteredQuestions = questions.slice(); // Copy all questions if no category is selected
    
    }
    
    currentQuestionIndex = 0; // Reset index to start from the first question of the filtered set
    
    displayQuestion(); // Display the first question from the filtered set
    
    }
    
    
    function displayQuestion() {  //displays questions 
    
    if (currentQuestionIndex < filteredQuestions.length) {
    
    const question = filteredQuestions[currentQuestionIndex].fields.question_text;
    
    const answer = filteredQuestions[currentQuestionIndex].fields.answer_text;
    
    content.innerHTML = `<div class='question'>Question: ${question}</div><div class='answer' style='display: none;'>Answer: ${answer}</div>`;
    
    btn.textContent = "Reveal Answer";
    
    btn.style.display = "block"; // Ensure the button is visible
    
    } else {
    
    content.innerHTML = "No more questions in this category.";
    
    btn.style.display = "none"; // Hide the button if there are no more questions
    
    }
    
    }
    
    
    // Listen for changes on the category dropdown
    
    categorySelect.addEventListener('change', (event) => {
    
    filterQuestionsByCategory(event.target.value);
    
    });
    
    
    // Initial setup: filter questions based on the default category selection
    
    filterQuestionsByCategory(categorySelect.value);
    
    
    btn.addEventListener("click", function() {
    
    const answerElement = content.querySelector('.answer');
    
    if (btn.textContent === "Reveal Answer") {
    
    answerElement.style.display = "block";
    
    btn.textContent = "Next Question";
    
    } else {
    
    currentQuestionIndex++;
    
    displayQuestion();
    
    }
    
    });
    
    });
    
    