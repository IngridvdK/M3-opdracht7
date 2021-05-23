const paintingWalls = function (colour) {
    console.log("The wall has been painted " + colour);
};

paintingWalls("green");
paintingWalls("yellow");
paintingWalls();

const paintingWallsAgain = function (place, colour) {
    console.log("The " + place + " wall has been painted " + colour);
};

const facing = "Southwest";
const colourChoice = "red";
paintingWallsAgain(facing, colourChoice);
paintingWallsAgain(colourChoice, facing);
// Wanneer je welk agument calls doet er toe. 
// Wanneer je de defenition van volgorde veranderd moet het ook in het loggen naar je console worden veranderd. 
// Volgorde doet er toe!