$(function() {

  $('table.bibItems').addClass('table table-responsive collapse');

  $('.copy-status button').on('click', function() {
    $(this).parents('.copy-status').find('table.bibItems').collapse('toggle');
  });

  $('.briefcitRequest > a').addClass('btn btn-primary');

});
