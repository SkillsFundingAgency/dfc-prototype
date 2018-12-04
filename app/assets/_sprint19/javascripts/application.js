/* global $ */
/* global GOVUK */

// Warn about using the kit in production
if (
  window.sessionStorage && window.sessionStorage.getItem('prototypeWarning') !== 'false' &&
  window.console && window.console.info
) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
  window.sessionStorage.setItem('prototypeWarning', true)
}

$(document).ready(function () {
    // Use GOV.UK selection-buttons.js to set selected
    // and focused states for block labels
    var $blockLabels = $(".block-label input[type='radio'], .block-label input[type='checkbox']")
    new GOVUK.SelectionButtons($blockLabels) // eslint-disable-line

    // Use GOV.UK shim-links-with-button-role.js to trigger a link styled to look like a button,
    // with role="button" when the space key is pressed.
    GOVUK.shimLinksWithButtonRole.init()

    // Show and hide toggled content
    // Where .block-label uses the data-target attribute
    // to toggle hidden content
    var showHideContent = new GOVUK.ShowHideContent()
    showHideContent.init()

    /* -------------------------------------------------------------
    Set session data
    ------------------------------------------------------------- */

    window.setSessionData = function (label, value, callback) {
        session[label] = value;
        $.post('/data', session, function (data) { });

        if (callback) {
            callback();
        }
    }

    var $els = $('.jpsection');
    $els.not('.active').hide()
    $(".section-showhide-links").on("click", function (e) {
        var $target = $($(this).attr('href')).show()
        $els.not($target).hide()
        e.preventDefault();
    });


    $(".survey_close").click(function () {
        GOVUK.cookie('survey', 'dismissed', { days: 31 });
        $(".survey_container").removeClass("visible");
    });

    $(".survey_action").click(function () {
        GOVUK.cookie('survey', 'dismissed', { days: 31 });
    });

    if (GOVUK.cookie('survey') !== "dismissed") {
        $(".survey_container").addClass("visible");
    };

    var currentcat = $('#currentcategory').text();

    if ($('#currentcategory').length > 0) {
        var currentcatURL = window.location.pathname;
        sessionStorage.setItem("data.currentcategoryURL", currentcatURL);
    };
    sessionStorage.setItem("data.currentcategory", currentcat);

    $(".search-results-filters li").click(function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");

            if ($(this).hasClass("search-filter-jp")) {
                $(".search-results-list").removeClass("search-jp");
            }
            else {
                $(".search-results-list").removeClass("search-jc");
            }

        }
        else {
            $(".search-results-filters li").removeClass("active");
            $(this).addClass("active");

            if ($(this).hasClass("search-filter-jp")) {
                $(".search-results-list").addClass("search-jp");
                $(".search-results-list").removeClass("search-jc");
            }
            else {
                $(".search-results-list").addClass("search-jc");
                $(".search-results-list").removeClass("search-jp");
            }
        }
    });

    $(".explore-box, .explore-box-clear").click(function () {
        if ($(this).hasClass("explore-box-clear")) {
            $(".explore-box").removeClass("active");
            $(this).toggleClass("active")
        }
        else {
            $(".explore-box-clear").removeClass("active");
            $(this).toggleClass("active")
        }
    });

    $(".filters-box").click(function () {
        $(".filters-box").removeClass("active");
        $(this).toggleClass("active");
        $("#explore-submit").removeClass("js-hidden");
    });

    $("#explore-submit").click(function (f) {
        if ($("#interests").hasClass("active")) {
            sessionStorage.setItem("exploresteps", "false");
            window.open('filters2/interests.html', '_self', false);
            f.preventDefault();        }

        else if ($("#restrictions").hasClass("active")) {
            sessionStorage.setItem("exploresteps", "false");
            window.open('filters2/restrictions.html', '_self', false);
            f.preventDefault();        }

        else if ($("#salary").hasClass("active")) {
            sessionStorage.setItem("exploresteps", "false");
            window.open('filters2/salary.html', '_self', false);
            f.preventDefault();        }

        else if ($("#qualifications").hasClass("active")) {
            sessionStorage.setItem("exploresteps", "false");
            window.open('filters2/qualifications.html', '_self', false);
            f.preventDefault();        }

        else if ($("#routes").hasClass("active")) {
            sessionStorage.setItem("exploresteps", "false");
            window.open('filters2/apprenticeship.html', '_self', false);
            f.preventDefault();        }

        else {
            sessionStorage.setItem("exploresteps", "false");
            $(".explore-error").removeClass("js-hidden");
            f.preventDefault();
        }
    });

    $("#explore-submit-steps").click(function (g) {
        g.preventDefault(); 
        sessionStorage.setItem("exploresteps", "true");
        window.open('filters/interests.html', '_self', false);
    });

    var exploresteps = sessionStorage.getItem("exploresteps");

    if (exploresteps === "true") {
        $(".explore-step").removeClass("js-hidden");
    };

    var SHManswer = sessionStorage.getItem("SHManswer");

    if (SHManswer === "1") {
        $("#answer-1").removeClass("js-hidden");
    };

    if (SHManswer === "2") {
        $("#answer-2").removeClass("js-hidden");
    };

    if (SHManswer === "3") {
        $("#answer-3").removeClass("js-hidden");
    };


    $("#cc-next").click(function () {

        if (!$(".shm-radio:checked").val()) {
            event.preventDefault();
            $(".cc-error").removeClass("js-hidden");
        }
    });


    $("#cc-nextq").click(function () {
        event.preventDefault();
        sessionStorage.removeItem('SHManswer');
        location.href = $(this).attr('href');
    });



    if ($('#filter_resultcount').hasClass('filter_resultcount_first')) {
        var start_value = "180";
        $('span#filter_resultcount').text(start_value)
        sessionStorage.setItem("resultcountvalue", start_value);
    }
    else {
        var start_value = sessionStorage.getItem("resultcountvalue");
        $('#filter_resultcount').text(start_value)
    }

    $('.checkbox').change(function (e) {
        var c = $(this).is(":checked");
        var i = parseInt($(this).attr('increment'));
        var current_value = parseInt($('#filter_resultcount').text());
        if (c) {
            $('#filter_resultcount').text(current_value - i);
            sessionStorage.setItem("resultcountvalue", current_value - i);
        } else {
            $('#filter_resultcount').text(current_value + i);
            sessionStorage.setItem("resultcountvalue", current_value + i);
        }

    });

    //Not Applicable Check Uncheck
    $(".filter_none").change(function () {
        if (this.checked) {
            $('input:checked').not(".filter_none").removeAttr('checked');
            this.change
            $('#filter_resultcount').text(start_value);
            sessionStorage.setItem("resultcountvalue", start_value);
        }
    });

    $('input:checkbox').not(".filter_none").change(function () {
        if ($(".filter_none").prop('checked')) {
            $(".filter_none").removeAttr('checked');
        }
    });

});

function goBack() {
    window.history.back();
};