//var number = prompt("Enter a number 1-100");

test = function(number) {
	
  if (number % 2 == 0) {
   var result = "even";
  }
  else {
   var result = "odd";
  }
  
  var dots = ""
  for (let counter = 0; counter < number; counter ++) {
   dots += ".";
  }
  console.log(dots)

  return result;
}

console.log("The number is " + test(20));
