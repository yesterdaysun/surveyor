$(document).ready(function() {

  // surveyor class rule validations go here
  // class_names should be prefixed with 'surveyor_' to avoid
  // class naming conflicts
  // e.g. jQuery.validator.addClassRules("surveyor_minlength_10", {min: 10} );
  jQuery.validator.addClassRules("surveyor_required", {required: true} );
  jQuery.validator.addClassRules("surveyor_float_answer", {number: true} );
  jQuery.validator.addClassRules("surveyor_integer_answer", {digits: true} );
  jQuery.validator.addClassRules("surveyor_time_answer", {time: true} );

  // see http://jqueryvalidation.org/documentation/ for the list of
  // built-in validations

  // when class rules are setup then let's call validate()
  $("#survey_form").validate();

});