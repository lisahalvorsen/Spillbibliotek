function addNewConsoleView() {
    app.innerHTML = /*HTML*/ ` 

    <h2 class="h2-other">Legg til ny konsoll</h2>

    <div class="input-container">
        Navn 
        <input type="text" onchange="nameValue = this.value" class="input-field" value="${nameValue}" placeholder="Nintendo Switch">
    </div>

    <div class="input-container">
        Produsent
        <input type="text" onchange="producerValue = this.value" class="input-field" value="${producerValue}" placeholder="Nintendo">
    </div>

    <div class="input-container">
        Utgivelsesår 
        <input type="text" onchange="releaseYearConsoleValue = this.value" class="input-field" value="${releaseYearConsoleValue}" placeholder="2017">
    </div>


    <div class="input-container">
        Bilde
        <input type="file" onchange="pictureConsoleValue = this.value" id="input-file" value="${pictureConsoleValue}">
    </div>

    <div class="input-container"> 
    <div class="icon-container">
        <img src="Images/plussign.png" alt="A plus sign" onclick="addNewConsole()" id="plus-icon2">
        <div class="tooltip-add2">Legg til ny konsoll i samlingen</div>
    </div>
    <div class="icon-container">
        <img src="Images/homeicon.png" alt="A house icon" onclick="mainView()" id="house-icon">
        <div class="tooltip-home">Gå tilbake til forsiden</div>
    </div>
    </div>
`;
}