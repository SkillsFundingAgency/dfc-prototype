///////////////////////////////////  Dynamic Panels - Profile Centre  ///////////////////////////////////
var $selects = $('.filters select');
$selects.on('change', getValues).first().trigger("change");
function getValues() {
     var vals = $selects.map(function() {
          return this.value;
     }).get();
     if (vals.join('') === "paralegal" + "one") {
          $(".intro-yes.one").fadeIn("slow");
          $(".intro-yes.two, .intro-yes.three, .intro-yes.four, .intro-yes.five, .intro-yes.six, .intro-yes.seven, .intro-yes.eight, .intro-yes.nine, .intro-yes.ten").hide();
          $("#paralegal-one, #paralegal-two, #paralegal-three").slideDown("slow");
          $("#paralegal-four, #paralegal-five, #paralegal-six, #paralegal-seven, #paralegal-eight, #paralegal-nine").hide();
          $("#nurse-one, #nurse-two, #nurse-three, #nurse-four, #nurse-five").hide();
          $(".intro").hide();
     } else if (vals.join('') === "paralegal" + "two") {
          $(".intro-yes.two").fadeIn("slow");
          $(".intro-yes.one, .intro-yes.three, .intro-yes.four, .intro-yes.five, .intro-yes.six, .intro-yes.seven, .intro-yes.eight, .intro-yes.nine, .intro-yes.ten").hide();
          $("#paralegal-four, #paralegal-five").slideDown("slow");
          $("#paralegal-one, #paralegal-two, #paralegal-three, #paralegal-six, #paralegal-seven, #paralegal-eight, #paralegal-nine").hide();
          $("#nurse-one, #nurse-two, #nurse-three, #nurse-four, #nurse-five").hide();
          $(".intro").hide();
     } else if (vals.join('') === "paralegal" + "three") {
          $(".intro-yes.three").fadeIn("slow");
          $(".intro-yes.one, .intro-yes.two, .intro-yes.four, .intro-yes.five, .intro-yes.six, .intro-yes.seven, .intro-yes.eight, .intro-yes.nine, .intro-yes.ten").hide();
          $("#paralegal-six").slideDown("slow");
          $("#paralegal-one, #paralegal-two, #paralegal-three, #paralegal-four, #paralegal-five, #paralegal-seven, #paralegal-eight, #paralegal-nine").hide();
          $("#nurse-one, #nurse-two, #nurse-three, #nurse-four, #nurse-five").hide();
          $(".intro").hide();
     } else if (vals.join('') === "paralegal" + "four") {
          $(".intro-yes.four").fadeIn("slow");
          $(".intro-yes.one, .intro-yes.two, .intro-yes.three, .intro-yes.five, .intro-yes.six, .intro-yes.seven, .intro-yes.eight, .intro-yes.nine, .intro-yes.ten").hide();
          $("#paralegal-seven, #paralegal-eight").slideDown("slow");
          $("#paralegal-one, #paralegal-two, #paralegal-three, #paralegal-four, #paralegal-five, #paralegal-six, #paralegal-nine").hide();
          $("#nurse-one, #nurse-two, #nurse-three, #nurse-four, #nurse-five").hide();
          $(".intro").hide();
     } else if (vals.join('') === "paralegal" + "five") {
          $(".intro-yes.five").fadeIn("slow");
          $(".intro-yes.one, .intro-yes.two, .intro-yes.three, .intro-yes.four, .intro-yes.six, .intro-yes.seven, .intro-yes.eight, .intro-yes.nine, .intro-yes.ten").hide();
          $("#paralegal-nine").slideDown("slow");
          $("#paralegal-one, #paralegal-two, #paralegal-three, #paralegal-four, #paralegal-five, #paralegal-six, #paralegal-seven, #paralegal-eight").hide();
          $("#nurse-one, #nurse-two, #nurse-three, #nurse-four, #nurse-five").hide();
          $(".intro").hide();
     } else if (vals.join('') === "nurse" + "one") {
          $(".intro-yes.six").fadeIn("slow");
          $(".intro-yes.one, .intro-yes.two, .intro-yes.three, .intro-yes.four, .intro-yes.five, .intro-yes.seven, .intro-yes.eight, .intro-yes.nine, .intro-yes.ten").hide();
          $("#nurse-one").slideDown("slow");
          $("#nurse-two, #nurse-three, #nurse-four, #nurse-five").hide();
          $("#paralegal-one, #paralegal-two, #paralegal-three, #paralegal-four, #paralegal-five, #paralegal-six, #paralegal-seven, #paralegal-eight, #paralegal-nine").hide();
          $(".intro").hide();
     } else if (vals.join('') === "nurse" + "two") {
          $(".intro-yes.seven").fadeIn("slow");
          $(".intro-yes.one, .intro-yes.two, .intro-yes.three, .intro-yes.four, .intro-yes.five, .intro-yes.six, .intro-yes.eight, .intro-yes.nine, .intro-yes.ten").hide();
          $("#nurse-two").slideDown("slow");
          $("#nurse-one, #nurse-three, #nurse-four, #nurse-five").hide();
          $("#paralegal-one, #paralegal-two, #paralegal-three, #paralegal-four, #paralegal-five, #paralegal-six, #paralegal-seven, #paralegal-eight, #paralegal-nine").hide();
          $(".intro").hide();
     } else if (vals.join('') === "nurse" + "three") {
          $(".intro-yes.eight").fadeIn("slow");
          $(".intro-yes.one, .intro-yes.two, .intro-yes.three, .intro-yes.four, .intro-yes.five, .intro-yes.six, .intro-yes.seven, .intro-yes.nine, .intro-yes.ten").hide();
          $("#nurse-three").slideDown("slow");
          $("#nurse-one, #nurse-two, #nurse-four, #nurse-five").hide();
          $("#paralegal-one, #paralegal-two, #paralegal-three, #paralegal-four, #paralegal-five, #paralegal-six, #paralegal-seven, #paralegal-eight, #paralegal-nine").hide();
          $(".intro").hide();
     } else if (vals.join('') === "nurse" + "four") {
          $(".intro-yes.nine").fadeIn("slow");
          $(".intro-yes.one, .intro-yes.two, .intro-yes.three, .intro-yes.four, .intro-yes.five, .intro-yes.six, .intro-yes.seven, .intro-yes.eight, .intro-yes.ten").hide();
          $("#nurse-four").slideDown("slow");
          $("#nurse-one, #nurse-two, #nurse-three, #nurse-five").hide();
          $("#paralegal-one, #paralegal-two, #paralegal-three, #paralegal-four, #paralegal-five, #paralegal-six, #paralegal-seven, #paralegal-eight, #paralegal-nine").hide();
          $(".intro").hide();
     } else if (vals.join('') === "nurse" + "five") {
          $(".intro-yes.ten").fadeIn("slow");
          $(".intro-yes.one, .intro-yes.two, .intro-yes.three, .intro-yes.four, .intro-yes.five, .intro-yes.six, .intro-yes.seven, .intro-yes.eight, .intro-yes.nine").hide();
          $("#nurse-five").slideDown("slow");
          $("#nurse-one, #nurse-two, #nurse-three, #nurse-four").hide();
          $("#paralegal-one, #paralegal-two, #paralegal-three, #paralegal-four, #paralegal-five, #paralegal-six, #paralegal-seven, #paralegal-eight, #paralegal-nine").hide();
          $(".intro").hide();
     } else {
          $(".dynamic-panels").removeClass("visible");
     }
}
