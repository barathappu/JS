// const num = [10, 20, 30];
// let ar2 = ['Kumar', 'Barath', 'M'];

// console.log(num);
// num.push(99);
// console.log(num);
// console.log(num.length);

// function lastValue(){
//     let ar2 = [10, 33, 67,'hi', 'hello'];
//     let lastValue = ar2[ar2.length - 1];
//     console.log(lastValue);
// }
//lastValue();

// function arraySwap(ar) {
//     let a = ar[0];
//     let b = ar[ar.length - 1];
//     ar[0] = b;
//     ar[ar.length - 1] = a;
//     console.log(ar);
// }

// arraySwap(ar2);

// const arr = [1,2,3,4,5,];
// const arr1 = [1, 2, 3, 4, 4];

// function incArray(ar, ar2) {
//     let ar1 = [];
//     for (i = 0; i < ar.length; i++) {
//         ar1.push(ar[i] + ar2[i]);
//         //console.log(ar1[i]);
//     }
//     console.log(ar1);
// }

// incArray(arr, arr1);

// function countPos(ar) {
//     let a = 0;
//     for (i = 0; i < ar.length; i++) {
//         if (ar[i] > 0) {
//             a++;
//         }
//     }
//     return a;
// }

// //console.log(countPos(arr));

// const ar4 = ['apple', 'grape', 'apple', 'apple', 2];

// function countWords(words) {
//     const result = {};

//     for (let i = 0; i < words.length; i++) {
//         const word = words[i];
//         if (!result[word]) {
//             result[word] = 1;
//         } else {
//             result[word]++;
//         }
//     }

//     return result;
// }

// //console.log(countWords(arr));
// const result = {'0': 1,
// '1': 9,
// '2': 1,
// '4': 1,
// '8': 1,
// '88': 1,
// '-3': 1,
// '-9': 1,
// '-33': 1,
// '-5': 1,
// 'apple': 4
// };

// console.log(result.apple);

// const ar1 = [1,2,3,5];
// const ar4 = ar1;
// const ar3 = ar1.slice();
// ar3.push(3);

// console.log(ar1);
// console.log(ar4);
// console.log(ar3);

// for(i = 0; i < 15; i++){

//     if(i%3 === 0){
//         continue;
//     }
//     console.log(i);
//     if(i ===10){
//         break;
//     }
// }

//const ar2 = ['apple', 'grape', 'apple', 'apple', 2];

// function searchArr(ar){
//     let a = -1;
//     for (i = 0; i < ar.length; i++){
//         if(ar[i] === "search"){
//             a = i;
//             break;
//         }
//     }
//     console.log(a);
// }
// searchArr(ar2);
// searchArr(ar1);

// function findWord(ar, word) {
//     let a = -1;
//     for (i = 0; i < ar.length; i++) {
//         if (ar[i] === word) {
//             a = i;
//             break;
//         }
//     }
//     console.log(a);
// }
// findWord(ar1,"K");

// function removeWord(ar){
//     const result = ar.reverse();
//     const x = [];
//     let b = 0;
//     for (i = 0; i < result.length; i++) {
//         if (result[i] === "BK" && b < 2) {
//             b++
//             continue;
//         }
//         x.push(ar[i]);
//     }
//     console.log(x);
// }
//removeWord(ar1);

// const ar3 = ar1.slice().reverse();

// for(i=1; i <=20; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log('FizzBuzz');
//     }
//     else if(i % 3 === 0){
//         console.log('Fizz');
//     }
//     else if(i % 5 === 0){
//         console.log('Buzz');
//     }
//     else{
//         console.log(i);
//     }
// }

// const ar1 = ["Hi","BK", "Hello", "search", "BK", "search","BK"];
// const ar3 =['green', 'red', 'blue', 'red'];

// function findWord(array, word) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === word) {
//             return i;
//         }
//     }
//     return -1;
// }

// function uniArr(array){
//     const result = [];
//     for (let i = 0; i < array.length; i++){
//        const word = array[i];
//         if(findWord(result, word) === -1){
//             result.push(word);
//         }
//     }
//     return result;
// }
// console.log(uniArr(ar1));

//-- 12-adv-fun ex -----------

// ad();

// function ad() {
//   console.log("Hello");
// }

// const ab = function df() {
//   console.log("Appu");
// };

// ab();

// const add = function(){
//   console.log(2 + 3);
// }

// add();
// add();

// function runTwice(fun){
//   fun();
//   fun();
// }

// runTwice(function(){
//   console.log("Appu");
// })

// runTwice(add);

// const a = ['barth', 'barath','bara', 9];

// let b = a.filter(value => value.startsWith('b'));  

// console.log(b);

// const myArray = ["apple", "banana", "avocado", "grape", "apricot"];

// // Filter values starting with "a"
// const filteredValues = myArray.filter(value => value.startsWith("a"));

// console.log(filteredValues); // ["apple", "avocado", "apricot"]

// const multiply = (x,y) =>   console.log(x*y);


// class MyClass {
//    methodA(){
// // dfasd        
//    }
   
//    methodB = () => {
       
//    }
// }

// const c = new MyClass();
// console.log(c.hasOwnProperty('methodA'));
// console.log(c.hasOwnProperty('methodB'));

