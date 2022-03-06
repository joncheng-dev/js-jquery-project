// Business Logic
function classDecider(points) {
  if (points >= 6 && points <= 10) {
    $("#userResult").text("You should play Vagabond or Confessor.");
  } else if (points >= 11 && points <= 14) {
    $("#userResult").text("You should play Astrologer or Samurai.");
  } else if (points >= 15) {
    $("#userResult").text("You should play Prisoner.");
  }
}

// User Interface Logic
$(document).ready(function () {
  // Upon submitting the "age restrict" form, do this --
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

  // Submit form for class recommendation --
  $("#gameplaySurvey").submit(function (event) {
    $("#classRecommendation").toggle();
    const answer1 = parseInt($("input:radio[name=question1]:checked").val());
    const answer2 = parseInt($("input:radio[name=question2]:checked").val());
    const answer3 = parseInt($("input:radio[name=question3]:checked").val());
    const answer4 = parseInt($("input:radio[name=question4]:checked").val());
    const answer5 = parseInt($("input:radio[name=question5]:checked").val());
    const answer6 = parseInt($("input:radio[name=question6]:checked").val());

    const total = answer1 + answer2 + answer3 + answer4 + answer5 + answer6;
    classDecider(total);

    event.preventDefault();
  });
});
