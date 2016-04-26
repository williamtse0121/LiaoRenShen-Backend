module.exports = function(app) {
  var Account = app.models.Account;
  Account.create({
    email: 'williamtse0121@gmail.com',
    password: 'will'
  }, function(err, userInstance) {
    console.log(userInstance);
  });
}
