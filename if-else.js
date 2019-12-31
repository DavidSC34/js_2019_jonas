/*
If / esle staments
*/

var firstName = 'John';
var civilStatus = 'married';

if (civilStatus ==='married') {

	console.log(firstName + ' is married');
} else { 

  console.log(firstName + ' will hopefully marry soon :)'  );
}


var isMarried = false;
if (isMarried) {

	console.log(firstName + ' is married');
} else { 

  console.log(firstName + ' will hopefully marry soon :)'  );
}


///Ejemplo

var massJohn = 70;
var massMark = 75;
var heihgtJohn = 1.80;
var heightMark = 1.86;

var BMIJohn =  massJohn / (heihgtJohn * heihgtJohn);
var BMIMark =  massMark / (heightMark * heightMark);

if (BMIMark > BMIJohn) {

	console.log('Marks BMI is higher than Johns ');
} else {

	console.log("John's BMI is higher than Mark's");
}


