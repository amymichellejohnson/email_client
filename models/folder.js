Email.Folder = DS.Model.extend ({
  name: DS.attr(),
  emails: DS.hasMany('email', {async: true})
});



Email.Folder.reopenClass({
  FIXTURES: [
    { id: 1, name: 'Sent', emails:[] }
  ]
});
