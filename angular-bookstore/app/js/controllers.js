bookstoreApp.controller("BooksController", ["$scope","bookService", function($scope, bookService){
    var books = [];
    books.push({title:bookService("W pustyni i w puszczy"), author:"Henryk Sienkiewicz"});
    books.push({title:"Pan Tadeusz", author:"Adam Mickiewicz"});
    $scope.books = books;
}]);