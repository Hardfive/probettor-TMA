
fetch("https://v3.football.api-sports.io/fixtures?league=39&season=2024&next=5", {
    "method": "GET",
    "redirect": "follow",
    "headers": {
        "x-rapidapi-host": "v3.footbal.api-sports.io",
        "x-rapidapi-key": "912682183f35c75c42e0b752dfd2d59a"
    }
})
.then(response => response.text())
.then(result => console.log(result))
.catch(error => console.log('error', error));