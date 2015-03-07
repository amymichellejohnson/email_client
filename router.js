Email.Router.map(function() {
  this.resource('folders');
  this.resource('folder', {path: 'folders/:folder_id'});
  this.resource('emails', {path: '/'});
  this.resource('email', {path: 'emails/:email_id'});
});
