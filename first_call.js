var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var apiKey = "272fcab94a864616b43c5214045dcd8a";
var clientId = "31655";

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
    if(this.readyState === 4 && this.status === 200){ 
        var json = JSON.parse(this.responseText);
        console.log(json.Response);
    }
}


xhr.open("GET", "https://www.bungie.net/Platform/Destiny2/SearchDestinyPlayer/-1/Chicken%20Tendies/", true);
xhr.setRequestHeader("X-API-Key", apiKey);

xhr.send();