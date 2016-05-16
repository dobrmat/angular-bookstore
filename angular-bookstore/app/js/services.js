bookstoreApp.factory("bookService", ["$timeout", "stala", function ($timeout, stala) {
    var bookService = function (title) {
        return stala + title + stala
    };
    return bookService;
}]);

bookstoreApp.factory("stala", [function () {
    return "----";
}]);


bookstoreApp.factory("booksProvider", ["$timeout", "$http", function ($timeout, $http) {
    var books = [];
    $timeout(function() {
    return $http.get("/api/books.json").then(function (response) {
        books.push.apply(books, response.data.items);
    })},2000);
    return books;
}]);