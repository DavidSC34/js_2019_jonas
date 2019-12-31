/*******

Codding challenge 1



Mark and John are trying to compare their BMI (Body
Mass Index), which is calculated using the formula:
BMI = mass / heihgt ^2 = mass / (height *height).
(mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information
about wheter Mark has higher BMI than John.
4. Print a string to the console containing the 
variable from step 3. (Something like "Is mark's BMi higher than John's? true").









***/

var massJohn, massMark;
var heihgtJohn, heightMark;
var BMIJohn, BMIMark;
var isBMIHigher;

massJohn = 70;
massMark = 75;
heihgtJohn = 1.80;
heightMark = 1.86;

BMIJohn =  massJohn / (heihgtJohn * heihgtJohn);
BMIMark =  massMark / (heightMark * heightMark);

console.log("BMIJohn",BMIJohn);
console.log("BMIMark",BMIMark);

isBMIHigher =  BMIMark > BMIJohn;

console.log("Is mark's BMi higher than John's?", isBMIHigher);

