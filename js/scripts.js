// Business Logic

// User Interface Logic
$(document).ready(function () {
  // Upon submitting the form, do this --
  $("form#survey").submit(function (event) {
    event.preventDefault();

    const studyLvl = $("input:radio[name=studyLevel]:checked").val();
    const learnType = $("input:radio[name=learningType]:checked").val();
    console.log(studyLvl);
    console.log(learnType);

    // let result = decideCourse();
  });
});
