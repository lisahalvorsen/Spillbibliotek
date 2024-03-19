function getRandomGameSuggestion() {
    let randomGameIndex = Math.floor(Math.random() * games.length);
    randomGame = games[randomGameIndex];
    getRandomGameComment();
    mainView();
}

function getRandomGameComment() {
    let randomCommentIndex = Math.floor(Math.random() * gameComments.length);
    randomGameComments = gameComments[randomCommentIndex];
}

function chooseConsole(consoleName) {
    chosenConsole = consoleName;
    mainView();
}

function resetGameView() {
    location.reload();
}

function sortGamesAlphabetically() {
    gamesSortedAlp = games.sort((a, b) => {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        return 0;
    });
    mainView();
}

function sortGamesByReleaseYear() {
    gamesSorted = games.sort((a, b) => a.releaseYear - b.releaseYear)
    mainView();
}