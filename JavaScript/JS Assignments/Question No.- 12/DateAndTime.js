
// 12. Create a human readable time format using the Date time object
// - YYYY-MM-DD HH:mm
// - DD-MM-YYYY HH:mm
// - DD/MM/YYYY HH:mm


const data = new Date();

const year = data.getFullYear();

const month = data.getMonth();

const date = data.getDate();

const hours = data.getHours();

const minutes = data.getMinutes();


// Date And Time format Examples

console.log(`Example- 1. Date And Time format in YYYY-MM-DD HH:mm ${year}-${month}-${date} ${hours}:${minutes}`);
console.log(`Example- 2. Date And Time format in DD-MM-YYYY HH:mm ${date}-${month}-${year}-${hours}:${minutes}`);
console.log(`Example- 3. Date And Time format in DD/MM/YYYY HH:mm ${date}/${month}/${year} ${hours}:${minutes}`);