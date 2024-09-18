//Creater Arrays
let marks=[96,98,97,95,94]
console.log(marks);
console.log(marks.length);

let heroes=["ironman","superman","spiderman"] 
for (let i=0; i<heroes.length;i++){
    console.log(heroes[i]);
}
let cities=["delhi","pune","mumbai"]
for(let city of cities){
    console.log(city);
}
let mark =[85,97,44,37,76,60];
let sum=0;
for (let val of mark) {
    sum += val;
}
let avg= sum/marks.length; 
console.log(`avg marks o the class= ${avg}`);
