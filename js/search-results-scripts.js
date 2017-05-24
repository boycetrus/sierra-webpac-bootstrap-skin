$(function() {

  $('table.bibItems').addClass('table');
  $('.briefcitRequest > a').addClass('btn btn-success');

  //DOM manipulation for briefcit table ready for flexbox layout
  var topPagination = $('table.browseScreen tr.browsePager')[0];
  $('table.briefcit tr.browseHeader').remove();
  $('table.briefcit > tbody > tr:first-child').insertBefore(topPagination);
  $('table.briefcit > tbody').addClass('briefcit-list');
  $('table.briefcit tr.browseSuperEntry').addClass('page-header');
  $('tr.bibItemsHeader th').removeAttr('width');
  $('tr.bibItemsEntry td').removeAttr('width');
  $('td.browseSaveJump').parent('tr').addClass('browse-jump');

  $('.primary-actions > a').addClass('btn btn-primary btn-sm').text('Check Availability');
  $('.secondary-actions > a').addClass('btn btn-default btn-sm');

  $('.navigationRow')[0].remove();
  $('.browse-jump')[0].remove();
});
