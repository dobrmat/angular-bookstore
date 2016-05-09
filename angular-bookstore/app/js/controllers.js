var bookControllers = angular.module('bookControllers',[]);

bookControllers.controller("BooksController", ["$scope","bookService", "booksProvider", function($scope, bookService, booksProvider){
    $scope.books = booksProvider;
}]);

bookControllers.controller("BookDetailController", ["$scope",'$routeParams',"bookService", "booksProvider", function($scope,$routeParams, bookService, booksProvider){
    $scope.book = booksProvider[$routeParams.bookNo]
}]);