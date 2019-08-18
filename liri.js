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
        doFile();

}

function bandsinTown(parameter) {
    queryURL = "https://rest.bandsintown.com/artists/" + parameter + "/events?app_id=codingbootcamp";
    Axios.get(queryURL).then(response => {
        console.log(response.data);
        console.log("Name of Venue: " + response.data[9].venue.name);
        console.log("Venue location: " + response.data[9].venue.city + ", " + response.data[1].venue.country);
        console.log("Date of the Event: " + moment().format("MM/DD/YYYY", response.data[9].datatime));
    });
};

function spotifySearch(parameter) {
    spotify
        .search({ type: 'track', query: parameter })
        .then(response => {
            console.log(response.tracks.items[0]);
            console.log("Artist(s): " + response.tracks.items[0].album.artists.name);
            console.log("Song Name: " + response.tracks.items[0].album.external_urls.name);
            // console.log("Link to Spotify: " + response.album.)
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

function doFile() {
    fs.readFile("random.txt", "utf8", function (err, data) {
        if (err) {
            return console.error(err);
        }

        var dataArr = data.split(",");
        console.log(dataArr);
        var indexSpotify = dataArr.indexOf("spotify-this-song");
        var indexMovie = dataArr.indexOf("movie-this");
        var indexBands = dataArr.indexOf("concert-this");
        if (dataArr[indexSpotify]) {

            spotifySearch(dataArr[indexSpotify + 1]);
        }

        else if (dataArr[indexMovie]){
    
        OMDBSearch(dataArr[indexMovie + 1]);
        }
        else if (dataArr[indexBands]){
        bandsinTown(dataArr[indexBands + 1]);
        }
    
    });
}