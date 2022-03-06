// Business Logic
function determineClass(a1, a2, a3, a4, a5, a6) {
  // Set counters for each class.
  let astrologer = 0;
  let confessor = 0;
  let prisoner = 0;
  let samurai = 0;
  let vagabond = 0;

  // Q1: Point values added to each category depending on Answer.
  if (a1 === "melee") {
    astrologer += 0;
    confessor += 0;
    prisoner += 2;
    samurai += 1;
    vagabond += 2;
  } else if (a1 === "ranged") {
    astrologer += 2;
    confessor += 1;
    prisoner += 2;
    samurai += 1;
    vagabond += 0;
  } else if (a1 === "hybrid") {
    astrologer += 0;
    confessor += 2;
    prisoner += 2;
    samurai += 2;
    vagabond += 0;
  }

  // Q2: Point values added to each category depending on Answer.
  if (a2 === "cast") {
    astrologer += 2;
    confessor += 1;
    prisoner += 1;
    samurai += 0;
    vagabond += 0;
  } else if (a2 === "mix") {
    astrologer += 1;
    confessor += 2;
    prisoner += 2;
    samurai += 0;
    vagabond += 0;
  } else if (a2 === "trad") {
    astrologer += 0;
    confessor += 1;
    prisoner += 1;
    samurai += 2;
    vagabond += 2;
  }

  // Q3: Point values added to each category depending on Answer.
  if (a3 === "low") {
    astrologer += 2;
    confessor += 0;
    prisoner += 0;
    samurai += 0;
    vagabond += 0;
  } else if (a3 === "medium") {
    astrologer += 0;
    confessor += 2;
    prisoner += 2;
    samurai += 2;
    vagabond += 0;
  } else if (a3 === "high") {
    astrologer += 0;
    confessor += 2;
    prisoner += 0;
    samurai += 0;
    vagabond += 2;
  }

  // Q4: Point values added to each category depending on Answer.
  if (a4 === "low") {
    astrologer += 0;
    confessor += 2;
    prisoner += 0;
    samurai += 1;
    vagabond += 1;
  } else if (a4 === "medium") {
    astrologer += 1;
    confessor += 0;
    prisoner += 1;
    samurai += 2;
    vagabond += 2;
  } else if (a4 === "high") {
    astrologer += 2;
    confessor += 0;
    prisoner += 2;
    samurai += 0;
    vagabond += 0;
  }

  // Q5: Point values added to each category depending on Answer.
  if (a5 === "light") {
    astrologer += 2;
    confessor += 1;
    prisoner += 1;
    samurai += 0;
    vagabond += 1;
  } else if (a5 === "medium") {
    astrologer += 0;
    confessor += 2;
    prisoner += 2;
    samurai += 1;
    vagabond += 2;
  } else if (a5 === "heavy") {
    astrologer += 0;
    confessor += 0;
    prisoner += 0;
    samurai += 2;
    vagabond += 0;
  }

  // Q6: Point values added to each category depending on Answer.
  if (a6 === "new") {
    astrologer += 2;
    confessor += 2;
    prisoner += 0;
    samurai += 1;
    vagabond += 2;
  } else if (a6 === "vet") {
    astrologer += 1;
    confessor += 1;
    prisoner += 0;
    samurai += 2;
    vagabond += 1;
  } else if (a6 === "adv") {
    astrologer += 1;
    confessor += 1;
    prisoner += 2;
    samurai += 1;
    vagabond += 1;
  }

  console.log("Astrologer Points: " + astrologer);
  console.log("Confessor Points: " + confessor);
  console.log("Prisoner Points: " + prisoner);
  console.log("Samurai Points: " + samurai);
  console.log("Vagabond Points: " + vagabond);
}

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

  // Submit form for class recommendation --
  $("#gameplaySurvey").submit(function (event) {
    const answer1 = $("input:radio[name=question1]:checked").val();
    const answer2 = $("input:radio[name=question2]:checked").val();
    const answer3 = $("input:radio[name=question3]:checked").val();
    const answer4 = $("input:radio[name=question4]:checked").val();
    const answer5 = $("input:radio[name=question5]:checked").val();
    const answer6 = $("input:radio[name=question6]:checked").val();
    console.log(answer1);
    console.log(answer2);
    console.log(answer3);
    console.log(answer4);
    console.log(answer5);
    console.log(answer6);

    const result = determineClass(
      answer1,
      answer2,
      answer3,
      answer4,
      answer5,
      answer6
    );
    // console.log(result);

    event.preventDefault();
  });
});
