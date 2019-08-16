require(".env").config();

var keys = require("./keys.js");
var Axios = require("axios");
var moment = require("moment");

var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
var parameter = process.argv[3];

var queryURL;
if (command === "concert-this"){
    queryURL = "https://rest.bandsintown.com/artists/" + parameter + "/events?app_id=codingbootcamp";
    Axios.get(queryURL).then(response => {
        console.log(response);
    });
}