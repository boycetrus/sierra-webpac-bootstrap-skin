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
    name: 'stre_aaddress',
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

        // clear any errors generated from previous invalid submissions
        $('p.invalid-input').remove();
        $('.form-group').removeClass('has-error');
        $('#selfregErrors:not(.hidden)').addClass('hidden'); 

        // loop through errors and highlight invalid fields
        for (var i = 0; i < errors.length; i++) {
          var errorField = errors[i].element;
          var errorHelp = '<p class="text-danger invalid-input">' + errors[i].message + '</span>';
          $(errorField).closest('.form-group').addClass('has-error');
          $(errorHelp).insertBefore(errorField);
        }
        $('#selfregErrors').removeClass('hidden');
      } else {
        console.log('no errors detected');
        $('#selfreg > form').submit();
      }
});
