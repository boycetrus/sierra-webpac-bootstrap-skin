$(function() {

  $('input').addClass('form-control');
  $('textarea').addClass('form-control');
  $('select').addClass('form-control');

  $('.form-buttons:first-child').addClass('btn btn-primary');
  $('.form-buttons').not().eq(0).addClass('btn btn-default');
    
});
