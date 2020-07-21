function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

var getGameList = function () {
    return httpGet("https://pastebin.com/raw/2BbD5XBK");
}

// https://www.roblox.com/Thumbs/Asset.ashx?format=png&width=420&height=230&assetId=0

var getGameIcons = function () {
    let gameList = getGameList();
    console.log(gameList);
}