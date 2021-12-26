// Exercises:Loops
// Iterate 0 to 10 using for loop, do the same using while and do while loop.
for (let i = 0; i < 10; i++) {
    console.log(i);
}

let i = 0;
while
    (i < 10) {
    console.log(i);
    i++
}

let a = 0
do {
    console.log(a);
    a++;

} while (a < 10);

// Iterate 10 to 0 using for loop, do the same using while and do while loop.
for (let m = 10; m > 0; m--) {
    console.log(m);
}

let n = 10;
while
    (n > 0) {
    console.log(n);
    n--;
}

let k = 10
do {
    console.log(k);
    k--;

} while (k > 0);
// Write a loop that makes seven calls to console.log to output the following triangle:
//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######
let gato = ''
for (let b = 0; b < 7; b++) {
    gato += "#";
    console.log(gato);
}

// Iterate the array, ['HTML', 'CSS', 'JavaScript'] using a for loop and print out the items.
let arr = ['HTML', 'CSS', 'JavaScript'];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);

}
// Use for loop to iterate from 0 to 100 and print only even numbers
for (let c = 0; c <= 100; c++) {
    if (c % 2 == 0) {
        console.log(c);
    }

}
// Use for loop to iterate from 0 to 100 and print only odd numbers
for (let d = 1; d <= 100; d++) {
    if (d % 2 == 1) {
        console.log(d);
    }

}
// Use for loop to iterate from 0 to 100 and print and print the sum of all numbers.
let sum = 0, p = 1;

// looping from p = 1 to number
while (p <= 100) {
    sum += p;
    p++;
}
console.log('sayilarin toplami:', sum);
// The sum all numbers in a given number. Ex. 5465 => 5+4+6+5 => 20

let value = 9873,
    toplam = 0;

while (value) {
    toplam += value % 10;
    value = Math.floor(value / 10);
}

console.log(toplam);

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

let even = 0;
let odd = 0;
for (let s = 0; s <= 100; s++) {

    if (s % 2 === 0) {
        even += s
    }
    else { odd += s }
}
console.log(even);
console.log(odd);



//Develop a small script which generate a six characters random id:
//Ex.: 5j2khz

let id = ['a', 'g', 't', 'd', 'p', '2', '6', 'v', 'z', 'h', 'l', '9', 'q', 'p', '1', 'x', 'b', 'z', '8', '0', '6', 'h', 'c', '3'];
let clave = ""
for (let v = 0; v < 6; v++) {
    clave += id[Math.floor(Math.random() * id.length)];

}
console.log(clave);