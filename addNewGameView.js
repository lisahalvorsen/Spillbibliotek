function addNewGameView() {
    app.innerHTML = /*HTML*/ ` 

    <h2 class="h2-other">Legg til nytt spill</h2>
    
    <div class="input-container">
        Tittel
        <input type="text" onchange="titleValue = this.value" class="input-field" value="${titleValue}" placeholder="Pikmin">
    </div>    

    <div class="input-container"> 
        Konsoll
        <input type="text" onchange="consoleValue = this.value" class="input-field" value="${consoleValue}" placeholder="Nintendo GameCube">
    </div> 

    <div class="input-container">
        Utgivelsesår 
        <input type="text" onchange="releaseYearValue = this.value" class="input-field" value="${releaseYearValue}" placeholder="2001">
    </div> 

    <div class="input-container">
        Bilde
        <input type="file" onchange="pictureValue = this.value" id="input-file" value="${pictureValue}">
    </div>

    <div class="input-container">
    <div class="icon-container">
        <img src="Images/plussign.png" alt="A plus sign" onclick="addNewGame()" id="plus-icon2">
        <div class="tooltip-add2">Legg til nytt spill i samlingen</div> 
    </div>   
    <div class="icon-container">
        <img src="Images/homeicon.png" alt="A house icon" onclick="mainView()" id="house-icon">
        <div class="tooltip-home">Gå tilbake til forsiden</div>
    </div>
    </div>
`;
}