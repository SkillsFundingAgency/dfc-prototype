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
})

//autocomplete quals

$(function() {
    var availableQualifications = [
        "Skills for life",
        "Entry level diploma",
        "Entry level certificate",
        "Essential skills",
        "Functional skills",
        "Music grades 1, 2, 3",
        "L1 Skills for life",
        "L1 Functional Skills",
        "GCSE D - G",
        "GCSE A* - C",
        "CSE",
        "Level 2 award / certificate / diploma / functional skills",
        "Music grades 4 and 5",
        "Level 2 NVQ",
        "A level",
        "AS level",
        "Access to HE",
        "Advanced apprenticeship",
        "International Baccalaureate",
        "Level 3 award / certificate / diploma",
        "Level 3 NVQ",
        "Music grades 6, 7, 8",
        "Certificate of Higher Education",
        "Higher Apprenticeship",
        "HNC",
        "Level 4 NVQ",
        "Diploma of Higher Education",
        "Foundation degree",
        "HND",
        "Level 5 NVQ",
        "Degree Apprenticeship",
        "Degree with honours / without honours",
        "Graduate certificate",
        "Graduate diploma",
        "Level 6 NVQ",
        "Master’s Degree",
        "Level 7 NVQ",
        "PGCE",
        "Postgraduate certificate",
        "Doctorate",
        "Level 8 award / certificate / diploma"
    ];
    $("#qualification").autocomplete({
        source: availableQualifications
    });
});

$( "#qualification" ).autocomplete({
  classes: {
    "ui-autocomplete": "highlight"
  }
});

// Getter
var themeClass = $( "#qualification" ).autocomplete( "option", "classes.ui-autocomplete" );

// Setter
$( "#qualification" ).autocomplete( "option", "classes.ui-autocomplete", "highlight" );

//Prepare filters
