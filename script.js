let value = prompt("Enter value: ");
if (value < 0) {
  alert("Please Enter Valid value");
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
} else if (value > 100) {
  alert("Please Enter Valid value");
}