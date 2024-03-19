function addNewGame() {
    newGame = {
        title: titleValue,
        console: consoleValue,
        releaseYear: Number(releaseYearValue),
        image: pictureValue,
    }

    let gameExists = false;
    for (let i = 0; i < games.length; i++) {
        if (games[i].title === newGame.title && games[i].console === newGame.console && games[i].releaseYear === newGame.releaseYear) {
            gameExists = true;
            console.table(newGame)
            break;
        }
    }

    if (gameExists) {
        alert('Du har dette spillet fra før!');
        return;
    }
    games.push(newGame);

    titleValue = '';
    consoleValue = '';
    releaseYearValue = '';
    pictureValue = '';

    addNewGameView();
}