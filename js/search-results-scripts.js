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
  $('<a>Show Copies</a>').appendTo('.briefcit-item.has-copy-table .briefcit-status');
  $('.briefcit-status a').on('click', function() {
    $(this).parents('.panel-body').next('.briefcit-copies').toggleClass('sr-only');
  });

  // grab .breifcitAddlCopies and append it to a new row in .bibItems table, then remove the extra table
  $('.briefcit-copies').each(function() {
    var $hasAddlCopies = $(this).children('table');
    var $bibItems = $(this).find('.bibItems > tbody');
    var $addlCopies = $(this).find('.briefcitAddlCopies').text();
    var $toFullRecord = $(this).find('.to-full-record').parent('a');
    $($bibItems).append('<tr><td colspan="3" class="extra-copies"></td></tr>');
    if ($hasAddlCopies.length > 1) {
      //concatenate the $addlCopies text and tofullrecord link and add to td.extra-copies
      $('.extra-copies').text($addlCopies);
      $('.extra-copies').append($toFullRecord);
      //remove the now surplus table element
      $($hasAddlCopies[1]).remove();
    } else {
      //append the tofullrecord link to td.extra-copies
      $('.extra-copies').html($toFullRecord);
    }
  });
});
