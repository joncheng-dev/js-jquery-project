// Business Logic

// User Interface Logic
$(document).ready(function () {
  // Upon submitting the form, do this --
  $("#dob").submit(function (event) {
    const age = parseInt($("#userAge").val());
    if (age >= 17) {
      $("#siteContent").show();
      $("#gateKeeper").hide();
    } else {
      $("#under17").show();
      $("#gateKeeper").hide();
    }

    event.preventDefault();
  });
});
