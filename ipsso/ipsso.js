//Hide the main PIN entry if the new pin section is active.
// try { if ( document.getElementById("ipssonewpin") ) {
// 	document.getElementById("ipssopinentry").style.display="none"; } }
// catch(err) {}

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

// function enterSubmit(e) {
// var keycode;
// if (window.event) keycode = window.event.keyCode;
// else if (e) keycode = e.which;
// if (keycode===13)
//  document.forms[0].submit();
// }
//
// document.onkeydown = enterSubmit;

$(document).ready(function() {
  $('#status').addClass('alert alert-danger');

  var newpinreq = $('#ipssonewpin');
  if (newpinreq) {
    $('#ipssopinentry').hide();
  }

});
