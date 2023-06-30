// Assignment: JavaScript Hoisting

// Rewrite the given code as it is seen by the interpreter

// Predict the outputs

// Run the original code and compare the outputs to your predictions



// // 1
// console.log(hello);                                   
// var hello = 'world';                                 
// // var hello;
// // console.log(hello); //logs undefined
// // hello = 'world'



// // 2
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }
// // var needle;
// // test () // logs undefined
/* function test(){
//     var needle;
//     needle = 'magnet';
//     console.log(needle); // logs 'magnet'
}
*/



// // 3
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);
// /* var brendan;
//     brendan = 'super cool';
//     function print(){
//         brendan = 'only okay';
//         console.log(brendan);
//     }
// console.log(brendan) //logs 'super cool'
// */



// // 4
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
// /*  var food;
//     food = 'chicken';
//     console.log(food); //logs 'chicken'
//     eat(); //undefined
//     function eat(){
//         food = 'half-chicken';
//         console.log(food); //logs 'half-chicken'
//         var food;
//         food = 'gone';
//     }
// */



// // 5
// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);
// /*
// mean(); //undefined function
// console.log(food); //logs undefined
// var mean;
// mean = function(){
//     var food;
//     food = 'chicken';
//     console.log(food); //logs 'chicken'
//     food = 'fish';
//     console.log(food); //logs 'fish'
// }
// console.log(food); //logs undefined
// */



// // 6
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);
// /*
// var genre;
// console.log(genre); //logs undefined
// rewind(); //undefined function
// function rewind(){
//     var genre;
//     genre = 'rock';
//     console.log(genre); //logs 'rock'
//     genre = 'r&b';
//     console.log(genre); //logs 'r&b'
// }
// console.log(genre); //logs 'disco'
// */



// // 7
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);
// /*
// dojo = "san jose";
// console.log(dojo); //logs "san jose"
// learn(); //undefined function
// function learn() {
//     var dojo;
//     dojo = "seattle";
//     console.log(dojo); //logs "seattle"
//     dojo = "burbank";
//     console.log(dojo); //logs "burbank"
// }
// console.log(dojo); //logs "san jose"
// */




// // 8 - Bonus ES6: const
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }
// /*
// console.log(makeDojo("Chicago", 65)); //undefined function
// console.log(makeDojo("Berkeley", 0)); //undefined function
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }
// */