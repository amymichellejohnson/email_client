Email.FolderController = Ember.ObjectController.extend ({
  actions: {
    save: function() {
      var email = this.store.createRecord('email', {
        to: this.get('to'),
        subject: this.get('subject'),
        message: this.get('message')

      });
      email.save();

      var folder = this.get('model');
      folder.get('emails').pushObject(email);
      folder.save();

      this.set('to', null),
      this.set('subject', null),
      this.set('message', null)

    }
  }
});
