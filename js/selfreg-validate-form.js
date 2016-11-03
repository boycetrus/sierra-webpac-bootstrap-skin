var validator = new FormValidator('selfreg', [{
    name: 'nfirst',
    display: 'Given Names',
    rules: 'required'
}, {
    name: 'nlast',
    display: 'Family Name',
    rules: 'required'
}, {
    name: 'nEmail',
    display: 'do not enter',
    rules: 'max_length[0]'
}, {
    name: 'stre_aadress',
    display: 'Street Address',
    rules: 'required'
}, {
    name: 'city_aaddress',
    display: 'Suburb, State, Postcode',
    rules: 'required'
}, {
    name: 'zemailaddr',
    display: 'Email address',
    rules: 'required|valid_email'
}, {
      name: 'tphone1',
      display: 'Telephone No',
      rules: 'required|numeric'
}, {
      name: 'F051birthdate',
      display: 'Date of Birth',
      rules: 'required|exact_length[10]'
}], function(errors, event) {
      if (errors.length > 0) {
        console.log(errors);
        // var displayErrors = document.getElementById('selfRegMessage');
        // displayErrors.className = displayErrors.className + " alert alert-error";
        // var errorString = '';
        // for (var i = 0; i < errors.length; i++) {
        //   errorString += errors[i].message + '<br />';
        // }
        // displayErrors.innerHTML = errorString;
        event.preventDefault();
      } else {
        console.log('it is not running');
        var obj = getFormHandleForm(1);
      }
}); //FormValidator
