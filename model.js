let app = document.getElementById('app');

let randomGame = '';
let randomGameComments = '';

let titleValue = '';
let consoleValue = '';
let releaseYearValue = '';
let pictureValue = '';

let chosenConsole = '';
let chosenSortingMethod = '';

let nameValue = '';
let producerValue = '';
let releaseYearConsoleValue = '';
let pictureConsoleValue = '';

let gamesByReleaseYear = '';
let gamesSorted = '';
let gamesSortedAlp = '';

let gameConsoles = [
    {
        name: 'Nintendo Entertainment System',
        producer: 'Nintendo',
        releaseYear: 1985,
        image: 'Images/nes.png',
    },
    {
        name: 'Nintendo 64',
        producer: 'Nintendo',
        releaseYear: 1996,
        image: 'Images/nintendo64.png',
    },
    {
        name: 'Nintendo GameCube',
        producer: 'Nintendo',
        releaseYear: 2001,
        image: 'Images/gamecube.png',
    },
];

let games = [
    {
        title: 'Tetris',
        console: 'Nintendo Entertainment System',
        releaseYear: 1989,
        image: 'Images/tetris.png',
    },
    {
        title: 'The Legend of Zelda',
        console: 'Nintendo Entertainment System',
        releaseYear: 1987,
        image: 'Images/legendofzelda.png',
    },
    {
        title: 'Mario Kart 64',
        console: 'Nintendo 64',
        releaseYear: 1996,
        image: 'Images/mariokart64.png',
    },
    {
        title: 'The Legend of Zelda: The Wind Waker',
        console: 'Nintendo GameCube',
        releaseYear: 2002,
        image: 'Images/zeldawind.png',
    },
    {
        title: 'Mario Party',
        console: 'Nintendo 64',
        releaseYear: 1998,
        image: 'Images/marioparty.png',
    },
    {
        title: 'Animal Crossing',
        console: 'Nintendo GameCube',
        releaseYear: 2000,
        image: 'Images/animalcrossing.png',
    },
    {
        title: 'Super Mario 64',
        console: 'Nintendo 64',
        releaseYear: 1996,
        image: 'Images/supermario64.png',
    },
    {
        title: 'Super Mario Bros.',
        console: 'Nintendo Entertainment System',
        releaseYear: 1985,
        image: 'Images/supermariobros.png',
    },
    {
        title: "The Legend of Zelda: Majora's mask",
        console: 'Nintendo 64',
        releaseYear: 2000,
        image: 'Images/zeldamask.png',
    },
    {
        title: 'Super Smash Bros. Melee',
        console: 'Nintendo GameCube',
        releaseYear: 2001,
        image: 'Images/supersmashbros.png',
    },
    {
        title: 'Donkey Kong',
        console: 'Nintendo Entertainment System',
        releaseYear: 1983,
        image: 'Images/donkeykong.png',
    },
];

let gameComments = ['Hva med', 'Kanskje du vil prøve', "Let's GO!!!", 'Eller hva med', 'I dag er dagen for', 'Det er jo gøy med', 'Klassiker dette jo', 'Ingenting slår en runde med', 'Dette er safe choice:', 'Det blir aldri feil med', 'Et bankers valg:', 'Få på en runde eller to med'];

let listToShow = games;