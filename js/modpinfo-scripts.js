$(function() {

  $('textarea').addClass('form-control');
  $('select').addClass('form-control');
  $('input[type="password"]').addClass('form-control');

  $('.email input').attr('type','email').addClass('form-control');
  $('.phone input').attr('type','number').addClass('form-control');
  $('#noticePref input').next('br').remove();
  $('#noticePref input').wrap('<label class="radio-inline"></label>');
  $('#sms > h3').replaceWith('<strong>Additional mobile alerts via SMS</strong>');
  $('.patFuncMobileEntryArea').addClass('checkbox');
  $('#sms input').prependTo('#sms label');
  $('.smsStatus').addClass('text-danger');
  $('.smsStatus:contains("opted in")').removeClass('text-danger').addClass('text-success');

  //toggle show/hide help-block text on input focus
  $('.editpinfo input').on('focus', function() {
    $(this).closest('div').children('.help-block').removeClass('hidden');
  });
  $('.editpinfo input').on('blur', function() {
    $(this).closest('div').children('.help-block').addClass('hidden');
  });

  //add close button to change PIN form
  $('.formButtonArea').addClass('form-buttons');
  $(' <button type="button" id="closeBtn" class="btn btn-default">Cancel</button>').appendTo('.formButtonArea');
  $('#closeBtn').on('click', function() {
    window.close();
    return false;
  });

  $('.form-buttons a:contains("Submit")').addClass('btn btn-primary');
  $('.form-buttons a:contains("Cancel")').addClass('btn btn-default');

});
