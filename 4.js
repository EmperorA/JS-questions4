/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help if you get stuck, reach a Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux
- The solution must be pushed into your repository and be available in eduflow before the next lecture day
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

function area(l1, l2){
    let areaOfTriangle = Math.floor(0.5 * l1 * l2);
    console.log(areaOfTriangle);
}
area(4, 4);



/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

function crazySum(a, b){
    let sum = Math.floor(a + b);
    if (a == b){
        console.log(sum * 3);
    } else
    console.log(sum);
}
crazySum(4, 4);


/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

function crazyDiff(a){
    let diff = Math.floor(a - 19);
    if (a > 19){
        console.log(diff * 3);
    } else
    console.log(diff);
}
crazyDiff(10);


/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 
 (included) or if n it's equal to 400.
*/

function boundary(n){
    if(n == 400){
        console.log(true);
    }
    else if (n >= 20 && n <= 100){
   console.log(true);
    }   else
    console.log(false);
}
boundary(10);

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", 
 then it should just return the original string.
*/

function strivify(word){
    if("strive" == word){
        console.log(word);
    }  else
    console.log("strive" + " " + word);
}
strivify("me world!");

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 
 or a multiple of 7.
 HINT: Modulus Operator
*/

function check3and7(n){
    if(n % 3 == 0){
        console.log("a multiple of 3");
    }  else if(n % 7 == 0){
        console.log("a multiple of 7")
    } else
    console.log("not a multiple of 3 or 7");
}
check3and7(42);

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

function reverseString(str){
    console.log( str.split('').reverse().join(''));
}
reverseString("wealth");


/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

function upperFirst(str){
    // first step splits the parameter and push it to a new array called words
    let words = str.split(" ") ; 
    
//   loops over the array of words and capitalize the first letter of each word
    for (i = 0; i < words.length; i++){
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        
    }
    // last step is to use join to return the parameter as a string
    console.log(words.join(" "));
    
}
upperFirst("health is wealth");


/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed 
 as a parameter.
*/
function cutString(str){
   
    let words = str.substring(1, str.length -1);
        console.log(words);
    
}
cutString("health");



/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

function giveMeRandom(n){
    let random = [];
  for (i = 0; i < n; i++){
      
      let rand = Math.floor(Math.random() * 10);
      random.push(rand);
     
     }
     random.length = n  ;
      console.log(random);
  
}
giveMeRandom(30);



/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
