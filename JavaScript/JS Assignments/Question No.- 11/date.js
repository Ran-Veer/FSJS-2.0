//Use the Date object to do the following activities


const current = new Date();

//What is the year today?
console.log(current.getFullYear());

//What is the month today as a number?
console.log(current.getMonth());

//What is the date today?
console.log(current.getDate());

//What is the day today as a number?
console.log(current.getDay());

//What is the hours now?
console.log(current.getHours());

//What is the minutes now?
console.log(current.getMinutes());



// Calculating the time elapsed from 
// 1970-01-01 to up to now

let past = new Date('1970-01-01');  // set the time
  
let now = new Date();  // assigning present time to now variable
  
let elapsed = (now - past); // difference
  
console.log(elapsed / 1000)  // by dividing by 1000 we will getthe time in seconds