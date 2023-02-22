// sayHi

function sayHi(name){
    let str1 = `Hi ${name}`;
    return str1;
}

console.log(sayHi`user!`)

console.log("\n")
// bigString

function bigString(){
    let str1 = ["dog","cat","pig","goat"];
    let str2 = ["cow","chicken","goose","egg","Bartholomew"];

    if(str1 > str2.length){
        return str1;
    }else{
        return str2;
    }
}

console.log(bigString`is the bigger string!`)

console.log("\n");
// bigNumber

function bigNumber(num1,num2){

    if(num1 > num2){
        console.log("Number 1 is greater.");
    }else if(num2 > num1){
        console.log(`Number 2 is greater.`);
    }else{
        console.log(`The numbers are equal.`);
    }
}

bigNumber(23489057,329408);

console.log("\n");
// fiveMore

function fiveMore(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 !== 0){
            array[i] += 5;
        }
    }
    return array;
}

console.log(fiveMore([1,2,3,4,5]));

console.log("\n");
// arraySummer

function arraySummer(array){
    let sum = 0;

    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}

console.log(arraySummer([1,2,3,4,5]));

console.log("\n");
// everyDivisible

function everyDivisible(n){

    for(let i = 0; i <= 100; i++){
        if(i % n === 0){
            console.log(i);
        }
    }
}

everyDivisible(5);

console.log(`\n`);
console.log(`End`);