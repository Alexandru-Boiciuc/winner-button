function createButtons() {
    let randomNumber = Math.floor(Math.random() * 3);
    for (let i = 0; i < 3; ++i) {
        let button = document.createElement("button");
        button.innerHTML = "Button " + (i + 1);
        button.className = "btn btn-outline-success m-1"; 
        button.onclick = function() {
            handleButtonClick(i, randomNumber);
        };
        let buttonDiv = document.getElementById("buttons");
        buttonDiv.appendChild(button);
    }
}

function generateButtons() {
    const num = parseInt(document.getElementById('numberInput').value);
    const container = document.getElementById('buttonContainer');
    container.innerHTML = '';
    if (isNaN(num) || num < 1 || num > 300) {
        alert('Type a number between 1 and 300');
        return;
    }
    const winningButtonIndex = Math.floor(Math.random() * num);
    for (let i = 0; i < num; ++i) {
        const button = document.createElement('button');
        button.textContent = `Button ${i + 1}`;
        button.onclick = function() {
            handleButtonClick(i, winningButtonIndex);
        };
        container.appendChild(button);
    }
}

function handleButtonClick(clickedIndex, winningButtonIndex) {
    if (clickedIndex === winningButtonIndex) {
        this.innerHTML = "You win!";
        confetti({
            particleCount: 2000,
            spread: 10,
            origin: { y: 0.0 },
        });
    } else {
        this.innerHTML = "You lose";
    }
}
createButtons();
