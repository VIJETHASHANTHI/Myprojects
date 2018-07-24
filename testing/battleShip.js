var randomLoc = Math.floor(Math.random()*5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;
location1 = 3;
location2 = 4;
location3 = 5;
// do ...while the ship is not sunk //
while (isSunk == false)
{
	guess= prompt("Ready, aim, fire! Enter a number between 0-6 :");
	if ( guess < 0 || guess > 6)
	{
		alert("Please enter a valid number");
	} else {
		guesses = guesses + 1;
		if (guess == location1 || guess  == location2 ||  guess == location3) 
		{
			alert("Hit!!!");
			hits = hits + 1;
			if (hits == 3 ) 
			{
				isSunk = true;
				alert("You sank my Battleship!!!");

			} 
		}else
			{
				alert("Miss!!!");
			}

	}

}
var stats = "You took  " + guesses + "  guesses to sink the battleship,  " +
"which means your shooting accuray was  " + (3/guesses);
alert(stats);
