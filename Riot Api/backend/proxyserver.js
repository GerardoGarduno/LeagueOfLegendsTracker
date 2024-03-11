const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());

const API_KEY = 'RGAPI-1483f4ce-0ecd-4439-88e0-ec9964808372';
const port = 3001;

// Function to get player PUUID
//https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/G2Create?api_key=RGAPI-89403eff-af80-496d-809b-c11a9884b068
function getPlayerPUUID(playername) {
    return axios.get("https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"+playername+"?api_key=" +API_KEY)
    .then(response =>{
        return response.data.puuid;
    }).catch(err => err)
}

// Route to handle getting past five games
app.get('/past5games', async (req, res) => {
   const playerName = req.query.username;
   const PUUID = await getPlayerPUUID(playerName);
   console.log(PUUID);
   //https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/VEJj1lSAABd4LyfNxpa08xO6sAQEZQwhtuwbpq7DN9RfEakc3ct95664ETHrHQANK1N7dR-kdo0F2A/ids?start=0&count=20&api_key=RGAPI-89403eff-af80-496d-809b-c11a9884b068
   const API_CALL = "https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/"+PUUID+"/ids?start=0&count=20&api_key="+API_KEY;
    //WHEN I CLICK SEARCH BUTTON
    //Call getPlayerPUUID by User name
    //User that user name to get the last 5 games IDS
    const GAMEIDS = await axios.get(API_CALL)
        .then(response => response.data)
        .catch(err => err);
    console.log(GAMEIDS);

    //getting the match data using game IDS
    //https://americas.api.riotgames.com/lol/match/v5/matches/NA1_4943293652?api_key=RGAPI-89403eff-af80-496d-809b-c11a9884b068
    var GAMEDATA = [];
    for(var i  = 0;  i < GAMEIDS.length; i++){
        const matchID = GAMEIDS[i];
        const matchData = await axios.get("https://americas.api.riotgames.com/lol/match/v5/matches/"+matchID+"?api_key=" +API_KEY)
            .then(response => response.data)
            .catch(err => err)
        GAMEDATA.push(matchData)
    }
    console.log(GAMEDATA)
    res.json(GAMEDATA)
});

app.get('/', async(req, res) => {
    res.send("Hello RIOT PROXY SERVER");
    console.log(await getPlayerPUUID("G2Create"));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
