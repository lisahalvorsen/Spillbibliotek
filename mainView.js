function mainView() {
    app.innerHTML = /*HTML*/ `
    
    <h1>Mitt spill-bibliotek</h1>
    
    <div id="my-consoles"> 
        <h2>Mine konsoller</h2>
        <div id="console-container">
            ${drawConsolesView()}
            <div class="icon-container">
            <img src="Images/plussign.png" alt="A plus icon" id="plus-icon" onclick="addNewConsoleView()">
            <div class="tooltip-add">Legg til en ny konsoll</div>
            </div>
        </div>
        <div class="icon-container">
        <img src="Images/reseticon.png" alt="A reset icon" id="reset-icon" onclick="chooseConsole('')">
        <div class="tooltip-refresh">Vis alle konsoller</div>
        </div>
    </div>    

    <div id="my-games">
        <h2>Mine spill</h2>
        <div id="game-container">
            ${drawGamesView()}
            <div class="icon-container">
            <img src="Images/plussign.png" alt="A plus icon" id="plus-icon" onclick="addNewGameView()">
            <div class="tooltip-add">Legg til nytt spill</div>
            </div>
        </div>
<div class="center-icons">
        <div class="icon-container">
            <img src="Images/reseticon.png" alt="A reset icon" id="reset-icon" onclick="resetGameView()">
            <div class="tooltip-refresh">Vis alle spill</div>
        </div>
        <div class="icon-container">
            <img src="Images/numbers.png" alt="A sorting numbers icon" id="sorting-icon" onclick="sortGamesByReleaseYear()">
            <div class="tooltip-sort">Sorter spill etter utgivelsesår</div>
        </div>
        <div class="icon-container">
            <img src="Images/az.png" alt="A sorting alphabet icon" id="sorting-icon" onclick="sortGamesAlphabetically()">
            <div class="tooltip-sort">Sorter spill alfabetisk</div>
        </div>
    </div>
    </div>  
    <div id="suggestion-container" class="icon-container">
        <button onclick="getRandomGameSuggestion()" id="random-button">Spillforslag</button>
        <div class="tooltip-random">Få et spillforslag</div>
        <div id="random-comments">${randomGameComments} ${randomGame.title ?? ''}</div>         
    </div>

    <!--- ?? "" betyr at hvis verdien er null eller undefined så vises ingenting i nettleseren (evt. det som står i stringen ---> 
        `;
}

function drawConsolesView() {
    let consolesHtml = '';
    for (let i = 0; i < gameConsoles.length; i++) {
        if (gameConsoles[i].name == chosenConsole) {
            consolesHtml += /*HTML*/ `
            <div onclick="chooseConsole('${gameConsoles[i].name}')" class="chosen-console">
                <img src="${gameConsoles[i].image}" class="console-pictures">
                <div>${gameConsoles[i].name}</div>
            </div>`
        } else {
            consolesHtml += /*HTML*/ `
            <div onclick = "chooseConsole('${gameConsoles[i].name}')">
                <img src="${gameConsoles[i].image}" class="console-pictures">
                <div>${gameConsoles[i].name}</div>
            </div>`}
    }
    return consolesHtml;
}

function drawGamesView() {
    let gamesHtml = '';

    for (let i = 0; i < listToShow.length; i++) {
        if (chosenConsole === '' || chosenConsole === listToShow[i].console) {
            gamesHtml += /*HTML*/ `
            <div id="game">
                <img src="${listToShow[i].image}" class="game-pictures">
                <div>${listToShow[i].title}</div>
            </div>`;
        }
    }
    return gamesHtml;
}

mainView();

// gameConsoles[i].name == chosenConsole ? 'chosenConsole' : ''
// stemmerDette ? hvisJa : hvisNei
/* <div onclick="chooseConsole('${gameConsoles[i].name}')"  class="consoleContainer ${gameConsoles[i].name == chosenConsole ? 'chosenConsole' : ''}" id="consoleContainer">
            <img src="${gameConsoles[i].image}" class="gameConsolePictures">
            <div>${gameConsoles[i].name}</div>
        </div> */


// if (chosenSortingMethod === 'releaseYear') {
//     listToShow = sortGamesByReleaseYear();
// } else {
//     listToShow = games;
// }