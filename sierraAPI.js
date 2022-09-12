$(document).ready(function() {

  var key64 = 'Rnd4UTF5Y09IVEMycEFMVlJ0ejhvRExoN1ZvRDpyUDhxNUNDMjdN';

    //fetch a token using client key and secret
    $.ajax({
      url: 'https://webpac.sutherlandshire.nsw.gov.au:443/iii/sierra-api/v6/info/token/',
      type: 'POST',
      beforeSend: function(xhr) {
        xhr.setRequestHeader('Authorization', 'Basic' + key64);
      }, success: function(data) {
        console.log(data);
      }, error: function(err){
        console.log('Error! ', err)
      }
    });

});
