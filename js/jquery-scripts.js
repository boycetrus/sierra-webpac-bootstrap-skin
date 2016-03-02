$(document).ready(function() {

//set up google analytics event tracking based on data attributes
  $('.js-ga-tracking').on('click', function() {
    var category = $(this).data('ga-category');
    var action = $(this).data('ga-action');
    var label = $(this).data('ga-label');
    var value = $(this).data('ga-value');

    //check that analytics is installed and then send event
    if (typeof ga !== 'undefined') {
    		ga('send', 'event', category, action, label, value );
      } else if (typeof _gaq.push !== 'undefined') {
        _gaq.push([ '_trackEvent', category, action, label, value ]);
      } else {
      console.log("no google analytics here bro!");
    }

  });

// init tooltips and popovers
  $('.pop-over').popover();
  $('.tool-tip').tooltip();
// end popover


});
