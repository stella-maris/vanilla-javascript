/* Question 1 is in the final.html document */

function runFinalCode() {
  /*
    Question 2:
    - Add a comment below, with your name and student number (1 point)
  */
//Mary Lee a01014196
    
    
  console.info('Question 3 --------------------------------------------');
  /*
    Question 3:
    - Create an array, with all data types in JavaScript. (1 point)
    - Use a WHILE loop to loop through each item in the array created, then log each item in the array. (1 point)
    - Add answer below.
  */
    var greeting = "Hello!";
    var luckyNumber = 17;
    var worldIsRound = true;
    var whatever= null;
    var myObject = window;
    var symbol = Symbol;
    var myArray = ["Hello!", 17, true, whatever, window, undefined, symbol];
    
    var x = 0;
    while(x <= 7) {
        console.log(myArray);
        x++
    };
  console.info('Question 4 --------------------------------------------');
  /*
    Question 4: (2 point)
    - Use a for loop to iterate through all paragraphs in the document. (1 point)
    - Change their font size to 20 and their color to green, without jQuery. (1 point)
    - Add answer below.
  */
    for (var i = 0; i < document.getElementsByTagName('p').length; i++) {
        document.getElementsByTagName('p')[i].style.fontSize="20px";
        document.getElementsByTagName('p')[i].style.color="green";
    }
    
  console.info('Question 5 --------------------------------------------');
  /*
    Question 5:
    - There is a form element in the document. Use an event handler to prevent the form from submitting,
    when the form is submitted. (1 point)
    - When the form is submitted, validate that the value of the input for age is a number. (1 point)
    - Also allow for inputs such as "12 years old" to be valid. (1 point)
    - If valid, alert to the user that the form is ok. (1/2 point)
    - If invalid, create a paragraph element in the form element, with an error message of your choice. (1 1/2 points)
    - Ensure that the error message disappears, if the user submits the form again with a valid input. (1 point)
    - Add answer below, without jQuery.
  */
var finalForm = document.getElementsByTagName('form')[0];
    finalForm.onsubmit = function(event) {
        event.preventDefault();
        var myInput = document.getElementsByTagName('input')[0].value;
        var isNumber = parseInt(myInput);
        var errorTag = document.createElement('p');
        
        if(!isNaN(isNumber)) {
            alert("Form is ok!");
            
        } else {
            finalForm.appendChild(errorTag);
            var errorMsg = errorTag.append("Oops, looks like that's not a number. Please enter a number.");
        }
    }
    
  console.info('Question 6 --------------------------------------------');
  /*
    Question 6:
    - Log to the console the number of days between today and NEXT year's Christmas. (2 points)
  */
    var today = new Date();
    var nextXmas = new Date(2017, 11, 25);
    var difference = nextXmas.getTime() - today.getTime();
    var days = 1000 * 60 * 60 * 24;
    var daysTillNextXmas = difference / days;
    console.log(Math.round(daysTillNextXmas) + " days till next Christmas!");
        
    
  console.info('Question 7 --------------------------------------------');
  /*
    Question 7:
    - Create a FUNCTION called calculate, that takes 3 parameters: numberA, operator and numberB. (1 point)
    - This function should perform a math operation between numberA and numberB, and return the result. (2 point)
    - The operator parameter can be one of 4 types of string: '+', '-', '*' and '/'. (1 point)
  */
    var calculate = function(numberA, operator, numberB) {
//        var op = operator.split();
//        var result = numberA + op + numberB;
        
//        if(operator == "+") {
//            console.log(numberA + numberB);
//        } else if (operator == "-") {
//            console.log(numberA - numberB);
//        } else if (operator == "*") {
//          console.log(numberA * numberB);  
//        } else {
//            console.log(numberA / numberB);
//        }
        switch (operator) {
            case "+":
                console(numberA + numberB);
                break;
            case "-":
                console.log(numberA - numberB);
                break;
            case "*":
                console.log(numberA * numberB);
                break;
            case "/":
                console.log(numberA / numberB);
                break;
            default: "Are you sure that's the correct operator?"
        }
    };
    
  // NOTE: Uncomment the function calls below once you implement your solution above.
   calculate(10, '+', 20);
   calculate(2000, '-', 11);
   calculate(12, '*', 12);
   calculate(72, '/', 8);

  console.info('Question 8 --------------------------------------------');
  /*
    Question 8:
    - With jQuery, change all anchor tags (links) in the document to point to Google, instead of Yahoo. (1 point)
    - Also change their text, from Yahoo to Google. (1 point)
  */
    $('a').attr('href', 'http://google.com').text("Google");
    
    
  console.info('Question 9 --------------------------------------------');
  /*
    Question 9:
    - With jQuery, change all paragraphs INSIDE of the element with id "div2" to have a border of '1 px solid red' when clicked. (1 point)
  */
    $("#div2 p").click(function() {
        $(this).css('border', '1px solid red');
    });
    
};
window.onload = runFinalCode;
