let value = prompt("Enter your Percentage: ");
if (value < 0 || value>100 ) {
  alert("Please Enter Valid Percentage Between 0-100");
} else if (value < 50) {
  alert("Your are Fail");
} else if (value < 60) {
  alert("Your Grade is C");
} else if (value < 70) {
  alert("Your Grade is B");
} else if (value < 80) {
  alert("Your Grade is A");
} else if (value <= 100) {
  alert("Your Grade is A+");
} else[
  alert("Can't Find Any Record")
]