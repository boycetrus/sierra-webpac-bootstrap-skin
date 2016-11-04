$(function() {
  $('#selfreg .form-text input').addClass('form-control');

  $('#zemailaddr').attr('type','email');
  $('#tphone1').attr('type','tel');
  $('#F051birthdate').attr('type','date').attr('max_length','10');

  //toggle show/hide help-block text on input focus
  $('.form-group input').on('focus', function() {
    $(this).closest('div').children('.help-block').removeClass('hidden');
  });
  $('.form-group input').on('blur', function() {
    $(this).closest('div').children('.help-block').addClass('hidden');
  });
});
