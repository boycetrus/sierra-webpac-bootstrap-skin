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
  $('#patronInfo .panel-body a').addClass('btn btn-primary');

    //loop through the patActions tabs and remove the empty ones
  $('#patActions > li').each( function() {
    var tabName = $(this).text();
    if (tabName.length < 10) {
      console.log(this);
      this.remove();
    }
  });

  $('.patfunct > form > a').addClass('btn btn-default btn-xs');
  $('.patfunct table').addClass('table table-bordered').wrap( '<div class="table-responsive"></div>');

  //move the patFunc title out of the table and make it a Heading
  var patFuncHeading = $('tr.patFuncTitle th:first').text();
  $('<h2></h2>').appendTo('.patron-actions');
  $('.patron-actions h2').text(patFuncHeading);
  $('tr.patFuncTitle').remove();

});
