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
  $('.to-full-record').parent('a').addClass('record-link');
  $('.bibItems > tbody').append('<tr><td colspan="3" class="extra-copies"></td></tr>');

  $('.briefcit-copies').each(function() {
    var $hasAddlCopies = $(this).children('table');
    var $recordLink;

    //find the .to-full-record link and move it to td.extra-copies
    $recordLink = $(this).find('.record-link');
    $(this).find('.extra-copies').append($recordLink);

    //if there are more than three copies webpac inserts an extra table el with a note about extra copies
    //move the extra copies text into td.extra-copies
    if ($hasAddlCopies.length > 1) {
      //grab the additional copies text and insert it into td.extra-copies before the .to-full-record link
      var $addlCopiesText = $(this).find('.briefcitAddlCopies').text();
      var $addlCopies = ". " + $addlCopiesText;
      $(this).find('.extra-copies').prepend($addlCopies);
      //remove the now surplus table element
      $($hasAddlCopies[1]).remove();
     }
  });
});
