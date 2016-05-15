bookControllers.directive("bookWidget", [function() {
    return {
        templateUrl: 'templates/bookWidgetTemplate.html',
        restrict: 'AE',
        scope: {
            address: '@bwHref',
            bookItem: '=bookItem'
        }
    }
}]);