confirm("Are you ready to play a game?");
var userChoice = prompt("Do you choose rock,paper or scissors?");
confirm("You have chosen " + userChoice + ".");


var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
}
else if (computerChoice > 0.67) {
	computerChoice = "paper";
}
else {
	computerChoice = "scissors";
}

confirm("Computer has chosen: " + computerChoice + ".");

var compare = function(choice1, choice2) {
	if (choice1 === choice2) {
		confirm("Result is a tie!");
	}
	else if (choice1 === "rock") {
		if (choice2 === "scissors") {
			confirm("Rock wins!");
		}
		else {
			confirm("Paper wins!");
		}
	}
	else if (choice1 === "paper") {
		if (choice2 === "rock") {
			confirm ("Paper wins!");
		}
		else {
			confirm("Scissors win!");
		}
	}
	else if (choice1 === "scissors") {
		if (choice2 === "rock") {
			confirm("Rock wins!");
		}
		else {
			confirm("Scissors win!");		
		}
	}
}

compare(userChoice,computerChoice);