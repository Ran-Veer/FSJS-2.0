//18. Write a program which tells the number of days in a month, now consider leap year.


function checkdays(year , month){
    const data = new Date(year, month, 0).getDay();
    return data;
 }

 console.log(checkdays(year, month));
 // Leap Year 2024 february

 // on entering year and month we can check days are 29(Leap) , 30 or 31.