var config = require('../../server/config.json');
var path = require('path');

module.exports = function(Account) {
  console.log('Account module');
  //send verification email after registration
  Account.afterRemote('create', function(context, userInstance, next) {

    var options = {
      type: 'email',
      to: userInstance.email,
      from: 'elenghost@163.com',
      subject: 'Thanks for registering.',
      template: path.resolve(__dirname, '../../server/views/verify.ejs'),
      redirect: '/verified',
      user: Account
    };

    userInstance.verify(options, function(err, response, next) {
      console.log('> user.afterRemote triggered'+ err);
      // if (err)
      //   return next(err);

      console.log('> verification email sent:', response);

      context.res.render('response', {
        title: 'Signed up successfully',
        content: 'Please check your email and click on the verification link ' + 'before logging in.',
        redirectTo: '/',
        redirectToLinkText: 'Log in'
      });
    });
  });
};
