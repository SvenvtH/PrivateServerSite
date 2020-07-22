const gameList = ["Ro-Ghoul", "Arsenal", "Jailbreak", "MM2", "AFS", "LT2", "ABD", "SO"];

var showText = function(gameId) {
    let text = gameList[gameId - 1];
    document.getElementById(`img-${gameId}`).style = "filter: blur(3px) grayscale(80%);"
    document.getElementById(`text-${gameId}`).innerHTML = text;
}

var hideText = function(gameId) {
    document.getElementById(`img-${gameId}`).style = "filter: none;"
    document.getElementById(`text-${gameId}`).innerHTML = "";
}