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