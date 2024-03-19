function addNewConsole() {
    newConsole = {
        name: nameValue,
        producer: producerValue,
        releaseYear: Number(releaseYearConsoleValue),
        image: pictureConsoleValue,
    }

    let consoleExists = false;
    for (let i = 0; i < gameConsoles.length; i++) {
        if (gameConsoles[i].name === newConsole.name && gameConsoles[i].producer === newConsole.producer && gameConsoles[i].releaseYear === newConsole.releaseYear) {
            consoleExists = true;
            console.table(newConsole)
            break;
        }
    }

    if (consoleExists) {
        alert('Du har denne konsollen fra før!');
        return;
    }
    gameConsoles.push(newConsole);

    nameValue = '';
    producerValue = '';
    releaseYearConsoleValue = '';
    pictureConsoleValue = '';

    addNewConsoleView();
}