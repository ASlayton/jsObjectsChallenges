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
      }else{
        document.getElementById("challenge-1").innerHTML = "<h3>NO WINNER!</h3>";
      };
    };

//CHALLENGE 2
  //DECLARE OBJECT
  var winnerList = [
    {
     season: '1999-2000',
     team: 'Real Madrid', 
     country: 'Spain'
    },
    {
     season: '2000-2001', 
     team: 'Bayern Munich', 
     country: 'Germany'
    },
    {
     season: '2001-2002', 
     team: 'Real Madrid', 
     country: 'Spain'
    },
    {
     season: '2002-2003', 
     team: 'Milan', 
     country: 'Italy'
    },
    {
     season: '2003-2004', 
     team: 'Porto', 
     country: 'Portugal'
    },
    {
     season: '2004-2005', 
     team: 'Liverpool', 
     country: 'England'
    },
    {
     season: '2005-2006',
     team: 'Barcelona', 
     country: 'Spain'
    },
    {
     season: '2006-2007', 
     team: 'Milan', 
     country: 'Italy'
    },
    {
     season: '2007-2008', 
     team: 'Manchester United', 
     country: 'England'
    },
    {
     season: '2008-2009', 
     team: 'Barcelona', 
     country: 'Spain'
    },
    {
     season: '2009-2010', 
     team: 'Internazionale',
     country: 'Italy'
    },
    {
     season: '2010-2011', 
     team: 'Barcelona', 
     country: 'Spain'
    },
    {
     season: '2011-2012', 
     team: 'Chelsea', 
     country: 'England'
    },
    {
     season: '2012-2013', 
     team: 'Bayern Munich',
     country: 'Germany'
    },
    {
     season: '2013-2014', 
     team: 'Real Madrid', 
     country: 'Spain'
    },
    {
     season: '2014-2015', 
     team: 'Barcelona', 
     country: 'Spain'
    },
    {
     season: '2015-2016', 
     team: 'Real Madrid', 
     country: 'Spain'
    },
    {
     season: '2016-2017', 
     team: 'Real Madrid', 
     country: 'Spain'
    },
  ];
  var spain = 0;
  var germany = 0;
  var italy = 0;
  var portugal = 0;
  var england = 0;
  var other = 0;
  for(var j = 0; j < winnerList.length; j++){
    if(winnerList[j].country === "Spain"){
      spain++;
    }else if(winnerList[j].country === "Germany"){
      germany++;
    }else if(winnerList[j].country === "Italy"){
      italy++;
    }else if(winnerList[j].country === "Portugal"){
      portugal++;
    }else if(winnerList[j].country === "England"){
      england++;
    }else{
      other++;
    };
  };

  console.log(spain, germany, italy, portugal, england, other);
  var challengeTwoElement = document.getElementById("challenge-2");
  challengeTwoElement.innerHTML += "<p>Spain: " + spain + "</p>";
  challengeTwoElement.innerHTML += "<p>Italy: " + italy + "</p>";
  challengeTwoElement.innerHTML += "<p>Germany: " + germany + "</p>";
  challengeTwoElement.innerHTML += "<p>Portugal: " + portugal + "</p>";
  challengeTwoElement.innerHTML += "<p>England: " + england + "</p>";
  challengeTwoElement.innerHTML += "<p>Other: " + other + "</p>";

//CHALLENGE 3
// var test1 = {a: 5, b:2, operator: "add"};  //7
// var test1 = {a: 5, b:2, operator: "subtract"}; //3
var test1 = {a: 5, b:2, operator: "multiply"}; //10
// var test1 = {a: 5, b:2, operator: "divide"}; //2.5

if (test1.operator === "add"){
  var result = test1.a + test1.b; 
}else if(test1.operator === "subtract"){
  var result = test1.a - test1.b;
}else if(test1.operator === "multiply"){
  var result = test1.a * test1.b;
}else if(test1.operator === "divide"){
  var result = test1.a / test1.b;
};

document.getElementById("challenge-3").innerHTML = "<p>" + result + "</p>";

// //CHALLENGE 4
var paramNames = ['name','age'];
var names = ['fred','barney'];
var ages = [30,40];
var character = {};


// names.forEach((name, i))

// console.log("My result:", cartoonChars);
paramNames.forEach();