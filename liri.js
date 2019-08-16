require("dotenv").config();

var keys = require("./keys.js");
var Axios = require("axios");
var moment = require("moment");
var Spotify = require('node-spotify-api');
var fs = require("fs");

var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
var parameter = process.argv[3];

var queryURL;

switch (command) {
    case "concert-this":
        bandsinTown(parameter);
        break;
    case "spotify-this-song":
        spotifySearch(parameter);
        break;
    case "movie-this":
        OMDBSearch(parameter);
        break;
    case "do-what-it-says":



}

function bandsinTown(parameter) {
    queryURL = "https://rest.bandsintown.com/artists/" + parameter + "/events?app_id=codingbootcamp";
    Axios.get(queryURL).then(response => {
        console.log(response);
    });
};

function spotifySearch(parameter) {
    spotify
        .search({ type: 'track', query: parameter })
        .then(response => {
            console.log(response.tracks.items[0]);
        })
        .catch(err => {
            console.log(err);
        });
}

function OMDBSearch(parameter) {
    queryURL = "http://www.omdbapi.com/?t=" + parameter + "&y=&plot=short&apikey=trilogy";

    Axios.get(queryURL).then(response => {
        let data = response.data;

        console.log("Title of the movie: " + data.Title + "\nYear: " + data.Year + "\nIMDB rating: " +
            data.imdbRating + "\nRotten Tomatoes rating: " + data.Ratings[1].Value + "\nCountry of Production: " +
            data.Country + "\nLanguage: " + data.Language + "\nPlot: " + data.Plot + "\nActors: " + data.Actors);

    });
}