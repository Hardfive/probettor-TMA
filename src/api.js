import { writeFileSync } from "fs";

const apiKey = process.env.x_rapidapi_key;
const allMatchData = {};

fetch("https://v3.football.api-sports.io/fixtures?league=39&season=2024&next=3", {
    "method": "GET",
    "redirect": "follow",
    "headers": {
        "x-rapidapi-host": "v3.footbal.api-sports.io",
        "x-rapidapi-key": apiKey
    }
})
.then(response => response.json()) // Convert the response to JSON
.then(data => {
    // Extract match IDs
    const matchIds = data.response.map(match => match.fixture.id);
    console.log(matchIds);
    const allMatchData = {};
    matchIds.forEach(matchId => {
        fetch(`https://v3.football.api-sports.io/predictions?fixture=${matchId}`, {
            "method": "GET",
            "redirect": "follow",
            "headers": {
                "x-rapidapi-host": "v3.footbal.api-sports.io",
                "x-rapidapi-key": apiKey
            }
        })
        .then(response => response.json())
        .then(matchData => {
            // Process detailed match information here
            console.log("Match details for ID", matchId, ":", matchData);
            
            allMatchData[matchId] = matchData.response[0];


 
            // Extract predictions and league information
            const predictions = matchData.response[0].predictions;
            const league = matchData.response[0].league;
            const teams = matchData.response[0].teams;

            // Display predictions and league in the console
            console.log("Predictions for match ID", matchId, ":", predictions);
            console.log("League information for match ID", matchId, ":", league);
            console.log("Teams information for match ID", matchId, ":", teams);
        
        // Write allMatchData to a single JSON file
        writeFileSync("allMatches.json", JSON.stringify(allMatchData, null, 4));
        console.log("All match data written to allMatches.json");
        })
        .catch(error => {
            console.error("Error fetching match details for ID", matchId, ":", error);
        });
    });
})
.catch(error => {
    console.error("Error fetching data:", error);
});