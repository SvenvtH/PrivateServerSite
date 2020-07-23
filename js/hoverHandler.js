const gameList = ["Ro-Ghoul", "Arsenal", "Jailbreak", "MM2", "AFS", "LT2", "ABD", "SO"];
const shoppyList = ["GoldPass", "RubyPass", "UraniumPass", "VibraniumPass"];

var showText = function(gameId) {
    let text = gameList[gameId - 1];
    document.getElementById(`img-${gameId}`).style = "filter: blur(3px) grayscale(80%);"
    document.getElementById(`text-${gameId}`).innerHTML = text;
}

var hideText = function(gameId) {
    document.getElementById(`img-${gameId}`).style = "filter: none;"
    document.getElementById(`text-${gameId}`).innerHTML = "";
}

var showShoppyText = function(passId) {
    let text = shoppyList[passId - 1];
    document.getElementById(`imgShoppy-${passId}`).style = "filter: blur(3px);"
    document.getElementById(`textShoppy-${passId}`).innerHTML = text;
}

var hideShoppyText = function(gameId) {
    document.getElementById(`imgShoppy-${gameId}`).style = "filter: none;"
    document.getElementById(`textShoppy-${gameId}`).innerHTML = "";
}