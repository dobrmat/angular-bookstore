'use strict';

/* App Module */

var bookstoreApp = angular.module('bookstoreApp', ["ngRoute", "bookControllers"]);

bookstoreApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/books', {
                templateUrl: 'views/booksList.html',
                controller: 'BooksController'
            }).
            when('/books/:bookNo', {
                templateUrl: 'views/bookDetail.html',
                controller: 'BookDetailController'
            }).
            otherwise({
                redirectTo: '/books'
            });
    }]);