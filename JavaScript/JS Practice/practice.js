// Practice Session

// string Type

// let TeamName = "CSK"
// console.log(`The variable ${TeamName} is ${typeof(TeamName)} Type.`)

// // Boolean Type

// let CSK_wins = true
// console.log(`The variable ${CSK_wins} is ${typeof(CSK_wins)} Type.`)

// // Undefined Type

// let Wining_prize
// console.log(`The variable Wining_prize is ${typeof(Wining_prize)} Type.`)

// // Null Data Types

// let Match_Draw_Result = null
// console.log(`The variable ${Match_Draw_Result} is ${typeof(Match_Draw_Result)} Type.`)

// const First_Name = "Ranveer"
// const Last_Name = "Kumar"
// let Marital_Status = "Unmarried"
// const Country = "INDIA"
// let AGE = 26

// console.log(`Hello, My Name Is ${First_Name} ${Last_Name}, My Country Is ${Country} And I Am ${AGE}yr Old ${Marital_Status}.`)

// let To_UpperCase = "The toUpperCase() method converts a string to uppercase letters."
// console.log(To_UpperCase.toUpperCase())

// let JavaScript = "scripttype. Specifies the type of the script"
// console.log(JavaScript.includes("script"))

// let data = "method takes a pattern and divides a String into an ordered list"
// const convert = data.split(" ") 
// console.log(convert)

// let value = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' ;
// let array = value.split(',');
// console.log(array)


// let IPLTeams = ['pw skills', 'CSK','DC', 'MI', 'PBKS', 'pw skills', 'RR', 'RCB', 'pw skills', 'LSG', 'GT', 'SRH', 'KKR', 'pw skills'];
// console.log(IPLTeams.indexOf('pw skills'))
// console.log(IPLTeams.lastIndexOf('pw skills'))

// let trim = "         method to remove whitespace           ";
// let output = trim.trim()
// console.log(output)
// let a = '';
// if (a) {
//     console.log("truthy value"); //truthy value
//   } else {
//     console.log("falsy value");
//   }

// let value = 1;

//------------------ falsy Value ----------------

// if(Boolean(NaN)){
//     console.log("this is truthy value");
// }else{
//     console.log("this is falsy value");
// }

// if(Boolean(0)){
//     console.log("this is truthy value");
// }else{
//     console.log("this is falsy value");
// }
// if(Boolean("")){
//     console.log("this is truthy value");
// }else{
//     console.log("this is falsy value");
// }

// // ----------------- Truthy Value --------------

// if(Boolean(15)){
//     console.log("this is truthy value");
// }else{
//     console.log("this is falsy value");
// }
// if(Boolean("ranveer")){
//     console.log("this is truthy value");
// }else{
//     console.log("this is falsy value");
// }
// if(Boolean([])){
//     console.log("this is truthy value");
// }else{
//     console.log("this is falsy value");
// }

// if (-4 >= 3) {
//     console.log("it's a ",(-4>=3), " statement.");
// }
// else{
//     console.log("It's a" ,(-4>=3), "statement.");
// }

//    4 > 3  true
//    4 >= 3 true
//    4 < 3 false
//    4 <= 3 false
//    4 == 4 true
//    4 === 4 true
//    4 != 4 false
//    4 !== 4 false
//    4 != '4' false
//    4 == '4' true
//    4 === '4' false


// let num1 = 2;
// if(num1>4){
//     console.log("it is true")
// }
// else{
//     console.log("false")
// }

// let age = 17;

// if (age>18){
//     console.log("you are allowed")
// }
// else{
//     console.log("not allowed")
// }
// // Example 1 :

// let value = 4;
// if (value>3) {
//     console.log("it's a true statement.");
// }
// else{
//     console.log("It's a false statement.");
// }

// // Example 2 :

// let value = 4;
// if (value>=3) {
//     console.log("it's a true statement.");
// }
// else{
//     console.log("It's a false statement.");
// }

// // Example 3 :-

// let num = 4;
// if (value<3) {
//     console.log("it's a true statement.");
// }
// else{
//     console.log("It's a false statement.");
// }

// // Example 4 :-

// let value = 4;
// if (value<=3) {
//     console.log("it's a true statement.");
// }
// else{
//     console.log("It's a false statement.");
// }

// // Example 5:-

// let value = 4;
// if (value==4) {
//     console.log("it's a true statement.");
// }
// else{
//     console.log("It's a false statement.");
// }

// // Example 6:-

// let value = 4;
// if (value===4) {
//     console.log("it's a true statement.");
// }
// else{
//     console.log("It's a false statement.");
// }

// // Example 7 :-

// let value = 4;
// if (value!=4) {
//     console.log("it's a true statement.");
// }
// else{
//     console.log("It's a false statement.");
// }


// // Example 8 :-

// let value = 4;
// if (value!==4) {
//     console.log("it's a true statement.");
// }
// else{
//     console.log("It's a false statement.");
// }

// // Example 9:-

// let value = 4;
// if (value!='4') {
//     console.log("it's a true statement.");
// }
// else{
//     console.log("It's a false statement.");
// }

// // Example 10:-

// let value = 4;
// if (value=='4') {
//     console.log("it's a true statement.");
// }
// else{
//     console.log("It's a false statement.");
// }


// // Example 11 :-

// let value = 4;
// if (value==='4') {
//     console.log("it's a true statement.");
// }
// else{
//     console.log("It's a false statement.");
// }


// let value1 = "python";

// let value2 = "jargon ";

// console.log(value1.length) //6
// console.log(value2.length) //7

// if (value1 === value2) {
//     console.log(`It's a truthy comparison statement`);  
// } else {
//     console.log(`It's a falsy comaprison statement`);
// }


// const current = new Date();
// console.log(current.getFullYear());

// console.log(current.getMonth());
// console.log(current.getDate());
// console.log(current.getDay());
// console.log(current.getHours());
// console.log(current.getMinutes());

// Calculating the time elapsed from 
// 1970-01-01 to up to now
  

// let past = new Date('1970-01-01');  // set the time
  
// let now = new Date();  // assigning present time to now variable
  
// let elapsed = (now - past); // difference
  
// console.log(elapsed / 1000)  // by dividing by 1000 we will getthe time in seconds


// let currentdate = new Date();
// console.log(currentdate.getDate())

// const data = new Date();

// const year = data.getFullYear();

// const month = data.getMonth();

// const date = data.getDate();

// const hours = data.getHours();

// const minutes = data.getMinutes();


// // Date And Time format Examples

// console.log(`Example- 1. Date And Time format in YYYY-MM-DD HH:mm ${year}-${month}-${date} ${hours}:${minutes}`);
// console.log(`Example- 2. Date And Time format in DD-MM-YYYY HH:mm ${date}-${month}-${year}-${hours}:${minutes}`);
// console.log(`Example- 3. Date And Time format in DD/MM/YYYY HH:mm ${date}/${month}/${year} ${hours}:${minutes}`);

// function numberOfDays(year , month) {
//     const data = new Date(year, month, 0).getDate();
//     return data;
//   }
  
//   console.log(numberOfDays(2, 2023)); //31
//   console.log(numberOfDays(2, 2024)); //29
// console.log(numberOfDays(1,2100));