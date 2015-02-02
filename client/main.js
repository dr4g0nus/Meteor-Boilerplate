if (Meteor.isClient) {
  
  // Router Map
  Router.configure({
    loadingTemplate: 'loadingView',
    notFoundTemplate: 'notFoundView',
    layoutTemplate: 'layoutView'
  });

  // Routes
  Router.map(function() {
    this.route('search', {
        path: '/',
        template: 'homeView'
    });
  })

}