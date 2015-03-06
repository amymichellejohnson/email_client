Email.Router.map(function() {
  this.resource('folders', {path: '/'});
  this.resource('folder', {path: 'folders/:folder_id'});
});
