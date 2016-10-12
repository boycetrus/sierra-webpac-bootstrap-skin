$(function() {

  $('textarea').addClass('form-control');
  $('select').addClass('form-control');

  $('.email input').attr('type','email').addClass('form-control');
  $('.phone input').attr('type','number').addClass('form-control');
  $('#noticePref input').wrap('<label class="radio-inline"></label>');
  $('#noticePref > br').remove();

  $('.form-buttons a:first-child').addClass('btn btn-primary');
  $('.form-buttons a').not().eq(0).addClass('btn btn-default');

});
