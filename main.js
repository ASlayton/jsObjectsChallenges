//console.log("Why, hello there.");

// CHALLENGE ONE GROUP WORK
  //Declare Object
    var players = [
      {
        name: "Bob",
        scores: [10, 65]
      },
      { 
        name: "Bill",
        scores: [90, 5] },
      { 
        name: "Charlie",
        scores: [40, 55]
      }
    ]; 
  //Create an array to keep scores in
      var playerScoreArray = [];
  //Create a variable to keep track of players individual scores.
      var totScore;
  //loop through players
      for(var i = 0; i < players.length; i++){
  //for each player, add scores together and push into array
        totScore = players[i].scores[0] + players[i].scores[1];
        playerScoreArray.push(totScore);
      };
  // console.log("My created array:", playerScoreArray);
  //figure out what the highest total score was
      highScore = Math.max.apply(Math, playerScoreArray);
      
  //determine which player had the highest score and declare them the winner
    for(var n = 0; n < players.length; n++){
      if(playerScoreArray[n] === highScore){
        document.getElementById("challenge-1").innerHTML = "<h1>" + players[n].name + "</h1>";
        break;
      };
    };

