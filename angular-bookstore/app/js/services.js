bookstoreApp.factory("bookService", ["stala", function(stala) {
    var bookService = function(title) {
        return stala+title+stala
    };
    return bookService;
}]);

bookstoreApp.factory("stala", [function() {
    return "----";
}]);


bookstoreApp.factory("booksProvider", [function() {
    var books = [];
    books.push({title:"W pustyni i w puszczy", author:"Henryk Sienkiewicz", price: 50.22});
    books.push({title:"Pan Tadeusz", author:"Adam Mickiewicz", price: 33.99});

    return books;
}]);