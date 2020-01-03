/**********

 Functions statements and expressiions

*/

//Function declaration

//function whatDoYouDo (job, firstName){}

//function expressions

var whatDoYouDo = function(job, firstName){
	switch(job){

		case 'teacher':
			return firstName + ' teaches kids how to code';
		case 'driver':
			return firstName + ' drives a cab in Lisbon';
		case 'designer':
			return firstName + ' designs beautiful websites';
		default:
			return firstName + ' does something else';
	}
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer','Jane'));
console.log(whatDoYouDo('retired','Mark'));