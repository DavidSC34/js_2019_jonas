/****
Arrays in Js

*/

//Initialize new array
var names = ['John','Mark','Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);//=>Jane
console.log(names.length);//=>3

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary' ;//=>names[3] = 'Mary'
names[names.length] = 'David' ;//otra forma de insertar al final
console.log(names);

//Different data types
var john = ['John','Smith', 1990, 'designer', false];

john.push('blue');//=>insert al final del arreglo
//console.log(john);
john.unshift('Mr.');//=>inserta al inicio del arreglo
console.log(john);


john.pop();//=>Saca elemento del arreglo del final
john.pop();//=>Saca elemento del arreglo del final
john.shift();//=> saca un elemento del inicio
console.log(john);

//Para saber la posicion o si se encuentra un elemento
//en el arreglo hacemos

console.log(john.indexOf(23));//=> -1 por que no lo encuentra
//Veamos un ejemplo donde busca si john es diselador si no muestra
//un mensaje
var isDesigner =john.indexOf('designer') === -1 ? 'John is NOT a designer': 'John IS a designer';

console.log(isDesigner);