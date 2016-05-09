bookstoreApp.factory("bookService", [function() {
    var bookService = function(title) {
        return "--"+title+"--"
    };
    return bookService;
}]);