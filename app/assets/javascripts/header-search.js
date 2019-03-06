// ===================================== Header Search - START ===================================== //
//Search function
$('html').click(function() {
     $("#site-search-text").removeClass("focus");
});

$("#site-search-text, #search").click(function(event){
     event.stopPropagation();
     $(this).addClass("focus");
     $("#search label").hide();
     $(".search__label").hide();
});
// ===================================== Header Search - END ===================================== //
