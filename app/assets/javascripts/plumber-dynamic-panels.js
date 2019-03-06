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
          $("#plumber-one, #plumber-two, #plumber-three").slideDown("slow");
          $("#plumber-four, #plumber-five, #plumber-six, #plumber-seven, #plumber-eight, #plumber-nine, #plumber-ten, #plumber-eleven, #plumber-tweleve, #plumber-thirteen").hide();
          // $("#nurse-one, #nurse-two, #nurse-three, #nurse-four, #nurse-five").hide();
     } else if (vals.join('') === "two") {
          $("#how-to-become, #how-to-become .outer-wrapper").addClass("results");
          $(".dynamic-panels").addClass("visible");
          $("#plumber-four, #plumber-five, #plumber-six").slideDown("slow");
          $("#plumber-one, #plumber-two, #plumber-three, #plumber-seven, #plumber-eight, #plumber-nine, #plumber-ten, #plumber-eleven, #plumber-tweleve, #plumber-thirteen").hide();
          // $("#nurse-one, #nurse-two, #nurse-three, #nurse-four, #nurse-five").hide();
     } else if (vals.join('') === "three") {
          $("#how-to-become, #how-to-become .outer-wrapper").addClass("results");
          $(".dynamic-panels").addClass("visible");
          $("#plumber-seven, #plumber-eight, #plumber-nine").slideDown("slow");
          $("#plumber-one, #plumber-two, #plumber-three, #plumber-four, #plumber-five, #plumber-six, #plumber-ten, #plumber-eleven, #plumber-tweleve, #plumber-thirteen").hide();
          // $("#nurse-one, #nurse-two, #nurse-three, #nurse-four, #nurse-five").hide();
     } else if (vals.join('') === "four") {
          $("#how-to-become, #how-to-become .outer-wrapper").addClass("results");
          $(".dynamic-panels").addClass("visible");
          $("#plumber-ten, #plumber-eleven, #plumber-tweleve").slideDown("slow");
          $("#plumber-one, #plumber-two, #plumber-three, #plumber-four, #plumber-five, #plumber-six, #plumber-seven, #plumber-eight, #plumber-nine, #plumber-thirteen").hide();
          // $("#nurse-one, #nurse-two, #nurse-three, #nurse-four, #nurse-five").hide();
     } else if (vals.join('') === "five") {
          $("#how-to-become, #how-to-become .outer-wrapper").addClass("results");
          $(".dynamic-panels").addClass("visible");
          $("#plumber-thirteen").slideDown("slow");
          $("#plumber-one, #plumber-two, #plumber-three, #plumber-four, #plumber-five, #plumber-six, #plumber-seven, #plumber-eight, #plumber-nine, #plumber-ten, #plumber-eleven, #plumber-tweleve").hide();
          // $("#nurse-one, #nurse-two, #nurse-three, #nurse-four, #nurse-five").hide();
     } else {
          $("#how-to-become, #how-to-become .outer-wrapper").removeClass("results");
          $(".dynamic-panels").removeClass("visible");
     }
}
