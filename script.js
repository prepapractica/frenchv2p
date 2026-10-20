// Lógica para ejercicios interactivos

function checkQuiz(quizId) {
    const quizSection = document.getElementById(quizId);
    if (!quizSection) return;

    const questions = quizSection.querySelectorAll('.quiz-question');
    let score = 0;
    let total = questions.length;

    questions.forEach((q) => {
        const input = q.querySelector('input, select');
        const feedback = q.querySelector('.result-feedback');
        const correctAnswer = q.getAttribute('data-answer').trim().toLowerCase();

        if (input) {
            const userAnswer = input.value.trim().toLowerCase();
            if (userAnswer === correctAnswer) {
                score++;
                feedback.textContent = "✓ Correct !";
                feedback.className = "result-feedback correct";
            } else {
                feedback.textContent = `✗ Incorrect. Reponse correcte: ${q.getAttribute('data-answer')}`;
                feedback.className = "result-feedback incorrect";
            }
        }
    });

    const scoreDisplay = document.getElementById(`${quizId}-score`);
    if (scoreDisplay) {
        scoreDisplay.textContent = `Votre score : ${score} / ${total}`;
        scoreDisplay.style.display = "block";
    }
}
