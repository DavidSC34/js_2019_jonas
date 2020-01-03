
/****************************

CODING CHALLENGE 2


*/

// 1
var JohnsTeamGameScore1 = 89;
var JohnsTeamGameScore2 = 120;
var JohnsTeamGameScore3 = 103;

var MarksTeamGameScore1 = 89;
var MarksTeamGameScore2 = 120;
var MarksTeamGameScore3 = 103;

var MarysTeamGameScore1 = 89;
var MarysTeamGameScore2 = 120;
var MarysTeamGameScore3 = 103;

var averageJohnsTeam = (JohnsTeamGameScore1 + JohnsTeamGameScore2 + JohnsTeamGameScore3 ) / 3;

var averageMarksTeam = (MarksTeamGameScore1 + MarksTeamGameScore2 + MarksTeamGameScore3) / 3;

var averageMarysTeam = (MarysTeamGameScore1 + MarysTeamGameScore2 + MarysTeamGameScore3) / 3;

console.log("John's team average is :"+ averageJohnsTeam);
console.log("Mark's team average is :"+ averageMarksTeam);
console.log("Mary's team average is :"+ averageMarysTeam);


//2
if (averageJohnsTeam > averageMarksTeam) {
	console.log("John's Team are the winners");
} else if( averageJohnsTeam === averageMarksTeam){
	console.log("Both teams are the winners, It's a draw");
} else {
	console.log("Mark's Team are the winners");
}


//3

if (averageJohnsTeam > averageMarksTeam && averageJohnsTeam > averageMarysTeam) {
	console.log("John's Team are the winners");
} else if (averageMarksTeam > averageJohnsTeam && averageMarksTeam > averageMarysTeam) {
	console.log("Mark's Team are the winners");
} else if (averageMarysTeam > averageJohnsTeam && averageMarysTeam > averageMarksTeam) {
		console.log("Mary's Team are the winners");
} else  {
	console.log("Its a draw");
}