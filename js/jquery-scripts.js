$(document).ready(function() {

//define global variables
  var $loggedInMsg = $('#LOGGEDIN_MSG').text().split(', ');
  var $patronFirstName = $loggedInMsg[1];
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

  // topogo
  var acctMenuText = 'hello ' + $patronFirstName + '<span class="caret"</span>';
  $('#accountMenu').html(acctMenuText);
  $('#ret2prec a').text('My Account');

  // forms
  $('form#search select').addClass('form-control');
  $('form#pinreset input').addClass('form-control');

  //patronview_web.html
  $('#expirationMsg').addClass('alert alert-danger');
  $('#patronInfo .panel-body a').addClass('btn btn-primary');



});
