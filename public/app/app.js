const app = angular.module('bookApp', [])

app.controller('mainController', ['$http', function($http){
  const controller = this;
  this.books = [];
  this.edit = 1;
  this.getBooks = function(){
    $http({
      method: 'get',
      url: '/books'
    }).then(
      function(res){
        controller.books = res.data
        console.log(controller.books);
      },
      function(err){
        console.log(err);
      }
    );
  },
  this.createBooks = function(){
    $http({
      method: 'post',
      url: '/books',
      data: {
        title: this.title,
        description: this.description,
        author: this.author
      }
    }).then(
      function(res){
        controller.getBooks();
      },
      function(err){
        console.log(err);
      }
    );
  },
  this.editBook = function(book){
    $http({
      method: 'put',
      url: '/books/' + book._id,
      data: {
        title: this.editedTitle,
        description: this.editedDescription,
        author: this.editedAuthor
      }
    }).then(
      function(res){
        controller.getBooks();
      },
      function(err){
        console.log(err);
      }
    );
  },
  this.deleteBook = function(book){
    $http({
      method: 'delete',
      url: '/books/' + book._id
    }).then(
      function(res){
        controller.getBooks();
      },
      function(err){
        console.log(err);
      }
    );
  }
  this.getBooks();
}]);
