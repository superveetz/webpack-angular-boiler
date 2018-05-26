(function (angular) {
    angular.module('app.directives', [
        
    ])
    
    .directive('mainNav', ['$window', function ($window) {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: require('./templates/main-nav/main-nav.html'),
            // controller: 'MainNavCtrl'
        };
    }])

    .directive('mainFooter', [function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: require('./templates/main-footer/main-footer.html'),
            // controller: 'MainFooterCtrl'
        };
    }]);
})(angular);