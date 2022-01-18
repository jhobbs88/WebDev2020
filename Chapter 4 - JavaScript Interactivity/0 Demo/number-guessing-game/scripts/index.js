const difficultyLevelMenu = document.getElementById('difficultyLevel');
const nextButton = document.getElementById('next');

nextButton.onclick = function startGame() {
    const difficultyLevel = difficultyLevelMenu.value;
    
    sessionStorage.setItem('difficulty-level', difficultyLevel);
    
    location.href = 'game.html';
}