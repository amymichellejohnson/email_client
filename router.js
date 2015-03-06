Email.Router.map(function() {
  this.resource('folders', {path: '/'});
  this.resource('folder', {path: 'folders/:folder_id'});
  this.resource('email', {path: 'folders/:folder_id/:email_id'});
});
