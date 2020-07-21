const apiUrl = "https://www.roblox.com/Thumbs/Asset.ashx?format=png&width=420&height=230&assetId=";

var getGameList = function () {
    fetch("https://pastebin.com/raw/2BbD5XBK").then(function (response) {
        return response;
    })
}

var getGameIcons = function () {
    let gameList = getGameList();
    for (i = 0; i < gameList[games].length; i++) {
        let game = gameList[games][i];
        let gameIconUrl = apiUrl + game.id;
        fetch(gameIconUrl);
    }
    console.log(gameList);
}