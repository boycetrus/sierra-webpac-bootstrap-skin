//Look for the first field in the external patron part of the form. This field will get cursor focus.
// var ipssoFirstField;
// try { ipssoFirstField = document.forms[0].extpatid; }
// catch(err) {
// }
//If we still don't have a field, look for the name field in the library account part.
// if ( ipssoFirstField===undefined ) { ipssoFirstField = document.forms[0].name; }
//Set focus. Ignore errors.
// try { ipssoFirstField.focus(); }
// catch(err) {}

$(document).ready(function() {

// add the bootstrap alert-danger classes to the error messages
  $('#status').addClass('alert alert-danger');

// Hide the main PIN entry if the new pin section is active.
  var newpin = $('#ipssonewpin');
  if (newpin.length > 0) {
    $('#ipssopinentry').hide();
  } else {
    return false;
  }

});
