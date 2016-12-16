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

  $('.briefcit-copies').each(function(i) {
    var $hasAddlCopies = $(this).children('table');
    var $recordLink;
    var $addlCopies;
    var j=i+1;

    $recordLink = $(this).find('.record-link');
    $(this).find('.extra-copies').append($recordLink);

    if ($hasAddlCopies.length > 1) {
      console.log(j + ': has addidtional copies');
      //concatenate the $addlCopies text and tofullrecord link and add to td.extra-copies
      //$addlCopies = $('.briefcit-copies')[i].find('.briefcitAddlCopies');
      //$recordLink = $(this).find('a.record-link');
      //var $extraCopies = $addlCopies + '&nbsp; ' + $recordLink;
      //$('.extra-copies').append($addlCopies);
      //remove the now surplus table element
      //$($hasAddlCopies[1]).remove();
     } else {
      console.log(j + ': no additional copies');
    //   //append the tofullrecord link to td.extra-copies
    //   $recordLink = $(this).find('a.record-link');
    //   $('.extra-copies').append($recordLink);
    }
  });
});
