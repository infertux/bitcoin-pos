require('nodebootstrap-server').setup(function(runningApp) {

  // attach to sub-routes
  runningApp.use('/hello', require('./lib/hello'));
  runningApp.use('/sign_up', require('./lib/sign_up'));
  runningApp.use('/invoice', require('./lib/invoice'));

  // attach to root route
  runningApp.use(require('./lib/routes'));

});
