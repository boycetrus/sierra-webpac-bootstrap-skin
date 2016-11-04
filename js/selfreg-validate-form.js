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
}, {
      name: 'condMembership',
      display: 'confirmation of the Conditions of Membership',
      rules: 'required'
}, {
      name: 'confirmVisit',
      display: 'Confirmation Visit',
      rules: 'required'
}], function(errors, event) {
      if (errors.length > 0) {
        event.preventDefault();
        console.log(errors);
        var errorString = '';
        for (var i = 0; i < errors.length; i++) {
          errorString += errors[i].message + '<br />';
        }
        $('#selfregErrors').html(errorString).removeClass('hidden');
      } else {
        console.log('no errors detected');
        return;
      }
});
