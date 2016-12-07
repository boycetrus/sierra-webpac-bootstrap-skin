$(function() {

  $('table.bibItems').addClass('table');
  $('.briefcitRequest > a').addClass('btn btn-success');

  //DOM manipulation for briefcit table ready for flexbox layout
  var topPagination = $('table.browseScreen tr.browsePager')[0];
  $('table.briefcit tr.browseHeader').remove();
  $('table.briefcit > tbody > tr:first-child').insertBefore(topPagination);
  $('table.briefcit > tbody').addClass('briefcit-list');
  $('table.briefcit tr.browseSuperEntry').addClass('page-header');

  //hide the copies table in each .briefcit-item and setup toggle to show/hide when table exists
  $('.briefcit-item').each(function(i) {
    var copyTableExists = $(this).find('.bibItems');
    if (copyTableExists) {
      console.log(i + ': has copies table');
    } else {
      console.log(i + ': no copy table');
    }
  });
});
