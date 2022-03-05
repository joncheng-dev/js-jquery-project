// Business Logic
// Function to calculate age of user
function ageCalculator(thisYear, birthYear) {
  const userAge = thisYear - birthYear;
  return userAge;
}

function todaysDate() {
  var date = new Date();
  var dd = String(date.getDate()).padStart(2, "0");
  var mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = date.getFullYear();

  date = yyyy + "-" + mm + "-" + dd;
  return date;
}

// User Interface Logic
$(document).ready(function () {
  // Upon submitting the form, do this --
  $("#dob").submit(function (event) {
    const dob = $("#born").val();
    console.log("User's Date of Birth: " + dob);

    const today = todaysDate();
    console.log("Today's Date: " + today);

    const age = ageCalculator();

    event.preventDefault();
  });
});
