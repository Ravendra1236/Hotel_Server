// //  Callback Functions : 




// let add = function(a , b , callBack){
//     sum =  a + b ;
//     console.log("Sum is : " , sum);
//     callBack();
// }

// // Method 1 : 
// // let wish = function(){
// //     console.log("Hello Sir");
// // }
// // add(2,4 , wish);

// // // Method 2 : 
// // add(2,4 , function(){
// //     console.log("Hello Sir");
// // });

// // Method 3 : 
// // add(2,4 , ()=>console.log("Hello"));


// fs and os : 
// let fs = require('fs')
// let os = require('os')

// let user  = os.userInfo()
// // console.log(user);

// fs.appendFile("greetings.txt" , "Hi " + user.username + "!\n" , ()=>{
//     console.log("File is created");
// })


//  import and export : 
// let note = require('./notes.js')

// console.log("This is server file");

// let sum = note.addNumbers(4,5);
// console.log(note.age);
// console.log(sum);


//  lodash : for complex calculations .
let _ = require('lodash')

// Example 1 : 
// let content = ["Ravendra" , 1 , 2 ,1,2, "Ravendra" , true];
// let filter = _.uniq(content);

// console.log(filter);

// Example 2 :  check whether is string or not 

// let num = 6 ;
// console.log(typeof(num));

// let ans = _.toString(num);         // Using lodash 
// console.log(ans);
// console.log(typeof(ans));


                                // jSON 
//  JSON : Js Object Notation : Organised format  foe exchanging data between computers . 
//  We share data b/w client and server in JSON format as it is a string which is lighweigth easy to transfer .
//  It is str. and org data because it in form of string . 
//  2 Important terms ; stringify and parse 
//  Stringify : object -> string : client -> server
//  parse : string -> object : server -> client 


// stringify : obj -> string
// let client  = {
//     "Name": "Ravendra",
//     "age" : 21,
//     "surname" : "Singh"
// }
// console.log(typeof (client));
// let ans = JSON.stringify(client);
// console.log(ans);
// console.log(typeof (ans));

// parse : string -> obj
// let server = '{"name" : "ravendra" , "age" : 21 } '
// let ans = JSON.parse(server);
// console.log(ans.name);


