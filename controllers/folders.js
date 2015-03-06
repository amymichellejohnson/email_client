Email.FoldersController = Ember.ArrayController.extend({

  actions: {
    save: function() {
      var newFolder = this.store.createRecord('folder', {
      name: this.get('name')

      });

    newFolder.save();

    this.set('name', null)

    }
  }
});
