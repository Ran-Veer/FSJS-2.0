//17. Write a program which tells the number of days in a month

 function checkdays(year , month){
    const data = new Date(year, month, 0).getDay();
    return data;
 }

 console.log(checkdays(year, month));

 // on entering year and month we can check days are 29 , 30 or 31.