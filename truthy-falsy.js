/**********************
* Truthy and falsy values and esquiality operators
*/

//falsy values: undefined,null,0,'',NaN
//truthy values : NOT falsy values

var height;
height = 23;

if(height || height === 0){
	console.log(' Variable is defined')
} else {
	console.log('Variable has NOT benn defined');
}

//Equality operator

if (height == '23') {
	console.log('the operator == does type coercion');
}