var $patronFirstName;

function applyChangeReminder() {
  $('a:contains("Apply Changes")').removeClass('btn-default disabled').addClass('btn-success');
}

$(function() {

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
  $('form[name="searchtool"]').attr('id','search');
  $('form select').addClass('form-control');
  $('form input[type="text"]').addClass('form-control');
  $('form input[type="textarea"]').addClass('form-control');
  $('form input[type="submit"]').addClass('btn btn-primary');

// searchtool form
  $('.browseSearchtool').addClass('webpac-form-container well well-lg');
  $('form#search').addClass('webpac-form search form-inline');
  $('form#search label').removeAttr('style').addClass('sr-only');
  $('form#search input[type="checkbox"]').closest('div').wrapInner('<label></label>');

//patronview_web.html
  $('#LOGGEDIN_MSG').nextAll('br').remove();
  $('#LOGGEDIN_MSG').remove();
  $('#expirationMsg').addClass('alert alert-danger');
  $('.modify-patron-info a').addClass('btn btn-primary');

//loop through the patActions and remove the empty ones
  $('#patActions > li').each( function() {
    var patActionName = $(this).text();
    if (patActionName.length < 4) {
      $(this).remove();
    }
  });

  //make icon links into buttons
  $('.patfunct > span > a').unwrap();
  $('.patfunct > form > a').addClass('btn btn-default btn-xs');
  $('.patfunct > a').addClass('btn btn-default btn-xs');
  $('.patfunct > form > a:contains("Apply Changes")').addClass('disabled');
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
  $('form[name="hold_form"] th.patFuncHeaders:contains("CANCEL IF NOT")').text('EXPIRY DATE');
  $('form[name="hold_form"] .st-key:contains("CANCEL IF NOT")').text('EXPIRY DATE');
  $('.patFuncFreezeLabel').addClass('sr-only');
  $('form[name="hold_form"] input[type="checkbox"]').on('change', applyChangeReminder);
  $('form[name="hold_form"] select').on('change', applyChangeReminder);

  // fines_form
  $('h2:contains("FINES")').next('table#patFunc').addClass('patfunc-fines');
  $('.ecommerce-pay').parents('a').eq(0).addClass('btn btn-primary').insertBefore('table.patfunc-fines');
  $('.patfunc-fines .ecommerce-pay').parents('a').addClass('btn btn-primary').insertAfter('table.patfunc-fines');
  $('.patfunc-fines tr:first-child').remove();
  $('.patfunc-fines tr:last-child').remove();
  $('.patFuncFinesDetailDateLabel').removeAttr('colspan');
  $('.patFuncFinesEntryDetail td:first-child').remove();
  $('.patFuncFinesDetailDate td:first-child').remove();
  $('.patFuncFinesTotalLabel').removeAttr('colspan');
  $('td.patFuncFinesEntryTitle').attr('colspan','2');
  $('.patFuncFinesEntryDetail td:last-child').remove();
  $('.patFuncFinesTotal td:last-child').remove();

  // reading history form
  $('<nav class="reading-history-pagination text-center" aria-label="reading history pagination"><ul class="pagination"></ul></nav>').insertAfter('form[name="PHISTORYFORM"] table#patFunc');
  $('form[name="PHISTORYFORM"] .browsePager > span').data('option','ICON_PAGING_CAPTION').remove();
  $('form[name="PHISTORYFORM"] th.patFuncHeaders:contains("Mark")').text('Select');
  $('form[name="PHISTORYFORM"] td.browsePager').eq(0).children().appendTo('form[name="PHISTORYFORM"] ul.pagination');
  $('form[name="PHISTORYFORM"] ul.pagination').children().each(function(){
    if ($(this).is('strong')) {
      var pgNum = $(this).text();
      $(this).replaceWith("<span>" + pgNum + "</span>");
      $('ul.pagination > span').wrap('<li class="active"></li>');
    } else if ($(this).is('a')) {
      $(this).wrap('<li></li>');
    }
  });
  $('nav.reading-history-pagination').clone().insertBefore('form[name="PHISTORYFORM"] table#patFunc');
  $('form[name="PHISTORYFORM"] tr.browsePager').remove();
  $('form[name="PHISTORYFORM"] table').cardtable();
  $('form[name="PHISTORYFORM"] table.stacktable.small-only:first-child').remove();

  // My Lists form
  $('form[name="mylists_form"] th.patFuncHeaders:contains("Mark")').text('Select');
  $('form[name="mylists_form"] table').cardtable();
  $('form[name="mylists_form"] table.stacktable.small-only:first-child').remove();
  $('form[name="renameList"] .formEntryArea').addClass('form-group');
  $('form[name="renameList"] input').addClass('form-control');
  $('form[name="renameList"] textarea').addClass('form-control');
  $('form[name="renameList"] .formButtonArea a:first-child').addClass('btn btn-primary btn-xs');
  $('form[name="renameList"] .formButtonArea a:nth-child(2)').addClass('btn btn-default btn-xs');
  $('form[name="newlistForm"] select').addClass('form-control');
  $('form[name="newlistForm"] select').parent().addClass('form-group');
  $('form[name="newlistForm"] #newlist .formEntryArea').addClass('form-group');
  $('form[name="newlistForm"] input').addClass('form-control');
  $('form[name="newlistForm"] textarea').addClass('form-control');
  $('form[name="newlistForm"] .formButtonArea a:first-child').addClass('btn btn-primary btn-xs');
  $('form[name="newlistForm"] .formButtonArea a:nth-child(2)').addClass('btn btn-default btn-xs');


  // Preferred Searches Form
  $('form[name="PSEARCHFORM"] td.patFuncMark > input').wrap('<div class="checkbox"><label></label></div>');
  $('form[name="PSEARCHFORM"] td.patFuncPSrchType strong').wrapInner('<h3></h3>');
  $('form[name="PSEARCHFORM"] #patFunc').removeClass('table table-bordered').addClass('pref-search');
  $('form[name="PSEARCHFORM"] #patFunc tr.patFuncHeaders').remove();
  $('form[name="PSEARCHFORM"] #patFunc td').removeAttr('width');
  $('form[name="PSEARCHFORM"] .patFuncEntry .patFuncMark:first-child label').append("Remove");
  $('form[name="PSEARCHFORM"] .patFuncEntry .patFuncMark:nth-child(2) label').append("Email");
  $('form[name="PSEARCHFORM"] .patFuncPSrchBtn a').addClass('btn btn-primary btn-xs');
  $('form[name="PSEARCHFORM"] input[type="checkbox"]').on('change', applyChangeReminder);

});
