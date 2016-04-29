module.exports = function(Book) {

  Book.afterRemote('create', function(context, userInstance, next) {
    console.log('> Book create');
  });

};
