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
    var acctMenuText = 'Welcome ' + $patronFirstName;
    $('#ret2prec a').text(acctMenuText);
  }

  // forms
  $('form#search select').addClass('form-control');
  $('form#pinreset input').addClass('form-control');

//patronview_web.html
  $('#LOGGEDIN_MSG').nextAll('br').remove();
  $('#LOGGEDIN_MSG').remove();
  $('#expirationMsg').addClass('alert alert-danger');
  $('.modify-patron-info a').addClass('btn btn-primary');

  //loop through the patActions and remove the empty ones
  $('#patActions > li').each( function() {
    var patActionName = $(this).text();
    if (patActionName.length < 4) {
      this.remove();
    }
  });

  //make icon links into buttons
  $('.patfunct > span > a').unwrap();
  $('.patfunct > form > a').addClass('btn btn-default btn-xs');
  $('.patfunct > a').addClass('btn btn-default btn-xs');
  $('.patfunct > #checkoutbuttons0 > a').addClass('btn btn-default btn-xs');


  //move the patFunc title out of the table and make it a Heading
  var patFuncHeading = $('tr.patFuncTitle th:first').text();
  $('<h2></h2>').prependTo('.patfunct');
  $('.patfunct h2').text(patFuncHeading);
  $('tr.patFuncTitle').remove();


//call stacktable.js on the patfunctable and fix the problems
  //checkout_form
  $('form[name="checkout_form"] table').stacktable();
  $('form[name="checkout_form"] .stacktable.small-only .patFuncHeaders').remove();
  $('form[name="checkout_form"] .stacktable.small-only input[type="checkbox"]').wrap('<label></label>').after(' Select');
  $('.confirmationprompt').addClass('alert alert-success');
  $('#checkoutbuttons0 > a').addClass('btn btn-success btn-xs');
  $('#checkoutbuttons0').appendTo('.confirmationprompt');
  $('#checkoutbuttons1').remove();
  $('#renewfailmsg').prependTo('.patfunct').addClass('alert alert-danger');
    // add table row class depending on renew fail or success
  $('.patFuncStatus:contains("RENEW FAILED")').closest('tr').addClass('danger');
  $('.patFuncStatus:contains("RENEWED")').closest('tr').addClass('success');

  // hold_form
  $('.patFuncPickupLabel').addClass('sr-only');
  $('form[name="hold_form"] table').cardtable();
  $('form[name="hold_form"] .stacktable.small-only:first-child').remove();

  $('form[name="mylists_form"] table').stacktable();
  $('form[name="PSEARCHFORM"] table').stacktable({
    headIndex: 1
  });
  $('form[name="PHISTORYFORM"] table').stacktable({
    headIndex: 1
  });

});
