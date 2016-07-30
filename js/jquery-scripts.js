var $patronFirstName;

$(document).ready(function() {

//define global variables
  var $loggedInMsg = $('#LOGGEDIN_MSG').text().split(', ');
  $patronFirstName = $loggedInMsg[1];
  console.log($patronFirstName);

//set up google analytics event tracking based on data attributes
  $('.js-ga-tracking').on('click', function() {
    var category = $(this).data('ga-category');
    var action = $(this).data('ga-action');
    var label = $(this).data('ga-label');
    var value = $(this).data('ga-value');

    //check that analytics is installed and then send event
    if (typeof ga !== 'undefined') {
    		ga('send', 'event', category, action, label, value );
      } else if (typeof _gaq.push !== 'undefined') {
        _gaq.push([ '_trackEvent', category, action, label, value ]);
      } else {
      console.log("no google analytics here bro!");
    }

  });

// init tooltips and popovers
  $('.pop-over').popover();
  $('.tool-tip').tooltip();
// end popover

// remove innovative webpac branding from footer
  $('body > span').remove();

// add bootstrap classes to Sierra system generated code where necessary

  // toplogo
  if ($patronFirstName !== undefined) {
    var acctMenuText = 'hello ' + $patronFirstName;
    $('#ret2prec a').text(acctMenuText);
  }

  // forms
  $('form#search select').addClass('form-control');
  $('form#pinreset input').addClass('form-control');

  //patronview_web.html
  $('#LOGGEDIN_MSG').delay(2000).fadeOut().nextAll('br').remove();
  $('#expirationMsg').addClass('alert alert-danger');
  $('#patronInfo .panel-body a').addClass('btn btn-primary');

    //loop through the patActions tabs and remove the empty ones
  $('#patActions > li').each( function(i) {
    var tabName = $(this).text();
    console.log(tabName);
    if (tabName.length < 2) {
      $(this).remove();
    }
  });

});
