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

  //hide the copies table in each .briefcit-item and setup toggle to show/hide when table exists
  $('table.bibItems').parents('.briefcit-item').addClass('has-copy-table');
  $('<a>Show Details</a>').appendTo('.briefcit-item.has-copy-table .briefcit-status');
  $('.briefcit-status a').on('click', function() {
    $(this).parents('.panel-body').next('.briefcit-copies').toggleClass('sr-only');
  });

  // grab the tr that contains .breifcitAddlCopies and append it to the .bibItems table
  // then remove the unnecessary table
  $('.briefcit-copies').each(function() {
    var $hasAddlCopies = $(this).children('table');
    if ($hasAddlCopies.length > 1) {
      var $bibItems = $(this).find('.bibItems > tbody');
      var $addlCopies = $(this).find('.briefcitAddlCopies').text();
      $($bibItems).append('<tr><td colspan="3" class="extra-copies"></td></tr>');
      $('.extra-copies').text($addlCopies);
      //remove the now surplus table el
      $($hasAddlCopies[1]).remove();
    }
  });
});
