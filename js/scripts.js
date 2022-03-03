// Business Logic

// User Interface Logic
$(document).ready(function () {
  // Upon submitting the form, do this --
  $("form#survey").submit(function (event) {
    let result = decideCourse();
  });
});
