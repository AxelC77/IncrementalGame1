var gameData = {
    points: 0,
    pointsPerClick: 1,
    pointsPerClickCost: 10
        //if (typeof savegame.dwarves !== "undefined") gameData.dwarves = savegame.dwarves;
}

function incrementPoints() {
    gameData.points += gameData.pointsPerClick;
    document.getElementById("pointsCounter").innerHTML = "Points: " + gameData.points;
}

function buyPointPerClick() {
    if (gameData.points >= gameData.pointsPerClickCost) {
        gameData.points -= gameData.pointsPerClickCost;
        gameData.pointsPerClick += 1;
        gameData.pointsPerClickCost *= 2;
        document.getElementById("pointsCounter").innerHTML = "Points: " + gameData.points;
        document.getElementById("perClickUpgrade").innerHTML = "Upgrade points per click (Curr lvl " + gameData.pointsPerClick + ") Cost: " + gameData.pointsPerClickCost + " points"
    }
}

var mainGameLoop = window.setInterval(function() {
    incrementPoints()
}, 1000)

var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("PointsSave", JSON.stringify(gameData))
}, 15000)

var savegame = JSON.parse(localStorage.getItem("goldMinerSave"))
if (savegame !== null) {
    gameData = savegame
}