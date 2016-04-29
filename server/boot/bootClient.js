module.exports = function(app) {
  var Account = app.models.Account;
  Account.create({
    email: 'williamtse@gmail.com',
    password: 'will'
  }, function(err, userInstance) {
    console.log(userInstance);
  });
}
