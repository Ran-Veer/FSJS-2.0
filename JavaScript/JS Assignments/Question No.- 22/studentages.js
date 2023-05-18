//22. The following is an array of 10 students ages:
// => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// - Sort the array and find the min and max age
// - Find the median age(one middle item or two middle items divided by two)
// - Find the average age(all items divided by number of items)
// - Find the range of the ages(max minus min)
// - Compare the value of (min - average) and (max - average), use abs() method


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

//Sort the array and find the min and max age

console.log(ages.sort());

const min_age = ages[0];
const max_age = ages[(ages.length)-1];

console.log(`The minimum value is ${min_age} and the maximum value is ${max_age}.`);

//Find the median age(one middle item or two middle items divided by two)

const median = Math.floor((ages.length)/2);

if(median % 2 != 0){
    const result1 = (ages[median] + ages[median+1]) / 2;
    console.log(`The median is ${result1} .`);
}
else{
    const result2 = (ages[median] + ages[median+1]) / 2;
    console.log(`The median is ${result2}.`);
}

//Find the average age(all items divided by number of items)

let sum =0;
for(let i = 0; i <= ((ages.length)-1) ; i++){
    sum += ages[i];
}

let average = sum / (ages.length);
console.log("The average of all is : ",average);

//     - Find the range of the ages(max minus min)

const rangeAge = ages[ages.length-1] - ages[0];
console.log(`The range of age is ${rangeAge}`);


// Compare the value of (min - average) and (max - average), use abs() method

let m = Math.abs(min - average);
let M = Math.abs(max - average);

if (m >= M) {
    console.log(` m is greater than M .`);
} else {
    console.log(` M is greater than m .`);   
}