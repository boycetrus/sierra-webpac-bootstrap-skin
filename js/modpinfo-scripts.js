$(function() {

  $('textarea').addClass('form-control');
  $('select').addClass('form-control');

  $('.email input').attr('type','email').addClass('form-control');
  $('.phone input').attr('type','number').addClass('form-control');
  $('#noticePref input').next('br').remove();
  $('#noticePref input').wrap('<label class="radio-inline"></label>');
  $('#sms > h3').replaceWith('<strong>Additional mobile alerts via SMS</strong>');
  $('.patFuncMobileEntryArea').addClass('checkbox');
  $('#sms input').prependTo('#sms label');
  $('.smsStatus').addClass('text-danger');
  $('.smsStatus:contains("opted in")').removeClass('text-danger').addClass('text-success');

  $('.form-buttons a:first-child').addClass('btn btn-primary');
  $('.form-buttons a').not().eq(1).addClass('btn btn-default');

  //toggle show/hide help-block text on input focus
  $('.editpinfo input').on('focus', function() {
    $(this).closest('div').children('.help-block').removeClass('hidden');
  });
  $('.editpinfo input').on('blur', function() {
    $(this).closest('div').children('.help-block').addClass('hidden');
  });

});
