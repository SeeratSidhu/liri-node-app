# liri-node-app

# Problem Statement
LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

# Overview
LIRI will search the following APIs:
Spotify for songs, 
Bands in Town for concerts, 
OMDB for movies.


# Instructions
1. To search for concerts, type in command line: `node liri.js concert-this <artist/band name here>`
2. To search for a song from spotify: `node liri.js spotify-this-song '<song name here>'`
3. To search OMDB for movie details: `node liri.js movie-this '<movie name here>'`
4. To run the commands from a text file: `node liri.js do-what-it-says`

# Link to the video
Click this https://www.youtube.com/watch?v=VYVqYM0fkcA&feature=youtu.be to view the working version of the app.

# Screenshots
1. Bands in town: `node liri.js concert-this "snoop dogg"`

<img width="637" alt="concert-bands" src="https://user-images.githubusercontent.com/50206940/64069996-ca834400-cc24-11e9-8081-20daca4d83e4.PNG">

2. Spotify (default - "The sign"): `node liri.js spotify-this-song`

<img width="638" alt="spotify-default" src="https://user-images.githubusercontent.com/50206940/64070012-2fd73500-cc25-11e9-984a-baf5e0274cfd.PNG">

3. Spotify: `node liri.js spotify-this-song "Blank Space"`

<img width="639" alt="spotify-song" src="https://user-images.githubusercontent.com/50206940/64070015-4ed5c700-cc25-11e9-9e50-bd14628551a2.PNG">

4. OMDB (Default - Mr. Nobody): `node liri.js movie-this`

<img width="671" alt="movie-default" src="https://user-images.githubusercontent.com/50206940/64070022-6c0a9580-cc25-11e9-8f78-9fe9014bd76e.PNG">

5. OMDB: `node liri.js movie-this "Avengers"`

<img width="671" alt="movie-OMDB" src="https://user-images.githubusercontent.com/50206940/64070029-893f6400-cc25-11e9-9a21-20f758283d8a.PNG">

6. Text file (spotify): `node liri do-what-it-says`


<img width="543" alt="spotify-do" src="https://user-images.githubusercontent.com/50206940/64070033-aa07b980-cc25-11e9-8a37-52684ce8db26.PNG">

7. Text file (OMDB): `node liri.js do-what-it-says`

<img width="674" alt="movie-do" src="https://user-images.githubusercontent.com/50206940/64070037-c0ae1080-cc25-11e9-85b2-9b066344fa61.PNG">

8. Text file (Bands in Town): `node liri.js do-what-it-says`


<img width="674" alt="pink-do" src="https://user-images.githubusercontent.com/50206940/64070044-e5a28380-cc25-11e9-88d9-2eb33052ef23.PNG">

# Technologies used
Node.js, node APis
