///////////////////////////////////  Dynamic Panels - Profile Centre  ///////////////////////////////////
var $selects = $('.filters select');
$selects.on('change', getValues).first().trigger("change");
function getValues() {
     var vals = $selects.map(function() {
          return this.value;
     }).get();
     if (vals.join('') === "one") {
          $("#how-to-become, #how-to-become .outer-wrapper").addClass("results");
          $(".dynamic-panels").addClass("visible");
          $("#paralegal-one, #paralegal-two, #paralegal-three").slideDown("slow");
          $("#paralegal-four, #paralegal-five, #paralegal-six, #paralegal-seven, #paralegal-eight, #paralegal-nine").hide();
          // $("#nurse-one, #nurse-two, #nurse-three, #nurse-four, #nurse-five").hide();
     } else if (vals.join('') === "two") {
          $("#how-to-become, #how-to-become .outer-wrapper").addClass("results");
          $(".dynamic-panels").addClass("visible");
          $("#paralegal-four, #paralegal-five").slideDown("slow");
          $("#paralegal-one, #paralegal-two, #paralegal-three, #paralegal-six, #paralegal-seven, #paralegal-eight, #paralegal-nine").hide();
          // $("#nurse-one, #nurse-two, #nurse-three, #nurse-four, #nurse-five").hide();
     } else if (vals.join('') === "three") {
          $("#how-to-become, #how-to-become .outer-wrapper").addClass("results");
          $(".dynamic-panels").addClass("visible");
          $("#paralegal-six").slideDown("slow");
          $("#paralegal-one, #paralegal-two, #paralegal-three, #paralegal-four, #paralegal-five, #paralegal-seven, #paralegal-eight, #paralegal-nine").hide();
          // $("#nurse-one, #nurse-two, #nurse-three, #nurse-four, #nurse-five").hide();
     } else if (vals.join('') === "four") {
          $("#how-to-become, #how-to-become .outer-wrapper").addClass("results");
          $(".dynamic-panels").addClass("visible");
          $("#paralegal-seven, #paralegal-eight").slideDown("slow");
          $("#paralegal-one, #paralegal-two, #paralegal-three, #paralegal-four, #paralegal-five, #paralegal-six, #paralegal-nine").hide();
          // $("#nurse-one, #nurse-two, #nurse-three, #nurse-four, #nurse-five").hide();
     } else if (vals.join('') === "five") {
          $("#how-to-become, #how-to-become .outer-wrapper").addClass("results");
          $(".dynamic-panels").addClass("visible");
          $("#paralegal-nine").slideDown("slow");
          $("#paralegal-one, #paralegal-two, #paralegal-three, #paralegal-four, #paralegal-five, #paralegal-six, #paralegal-seven, #paralegal-eight").hide();
          // $("#nurse-one, #nurse-two, #nurse-three, #nurse-four, #nurse-five").hide();
     } else {
          $("#how-to-become, #how-to-become .outer-wrapper").removeClass("results");
          $(".dynamic-panels").removeClass("visible");
     }
}
