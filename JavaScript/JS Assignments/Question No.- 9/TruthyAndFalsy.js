//09. Boolean value is either true or false.
// - Write three JavaScript statement example which provide truthy value.
// - Write three JavaScript statement example which provide falsy value.


// all values are truthy except false, 0, -0, 0n, "", null, undefined, and NaN.

// ------------------ falsy Value ----------------

if(Boolean(NaN)){
    console.log("this is truthy value");
}else{
    console.log("this is falsy value");
}

if(Boolean(0)){
    console.log("this is truthy value");
}else{
    console.log("this is falsy value");
}
if(Boolean("")){
    console.log("this is truthy value");
}else{
    console.log("this is falsy value");
}

// ----------------- Truthy Value --------------

if(Boolean(15)){
    console.log("this is truthy value");
}else{
    console.log("this is falsy value");
}
if(Boolean("ranveer")){
    console.log("this is truthy value");
}else{
    console.log("this is falsy value");
}
if(Boolean([])){
    console.log("this is truthy value");
}else{
    console.log("this is falsy value");
}