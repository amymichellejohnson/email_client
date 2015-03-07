Email.EmailsController = Ember.ArrayController.extend ({
  isEmailing: false,
  actions: {
    compose: function() {
      this.set('isEmailing', true)
    },
    save: function() {
      this.set('isEmailing', false)

      var email = this.store.createRecord('email', {
        to: this.get('to'),
        subject: this.get('subject'),
        message: this.get('message'),
        date: new Date()

      });
      email.save();

      // var folder = this.get('model');
      // folder.get('emails').pushObject(email);
      // folder.save();
      //
      // this.set('to', null),
      // this.set('subject', null),
      // this.set('message', null)

    }
  }
});
