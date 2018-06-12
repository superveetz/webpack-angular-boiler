(function (angular) {
    angular.module('app.directives', [
        
    ])
    
    .directive('mainNav', ['$window', function ($window) {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: require('./templates/main-nav/main-nav.html'),
            controller: ['$scope', function($scope) {
                $scope.navToggled       = false;

                // toggle side nav
                $scope.toggleSideNav    = function() {
                    if ($scope.navToggled) {
                        $scope.navToggled       = !$scope.navToggled;
                        $scope.sideNavLinks.removeClass('show');
                    } else {
                        $scope.navToggled       = !$scope.navToggled;
                        $scope.sideNavLinks.addClass('show');
                    }
                };
            }]
        };
    }])

    .directive('mainNavLinks', ['$timeout', function($timeout) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                sideNavLinks: '=',
                elemId: '@elemId',
                elemClasses: '@elemClasses'
            },
            templateUrl: require('./templates/main-nav-links/main-nav-links.html'),
            link: function(scope, elem, attr) {
                // initialize scope.sideNavLinks for parent controller once child has loaded
                if (scope.elemId == 'side-nav-links') {
                    $timeout(function() {
                        scope.sideNavLinks      = angular.element('#side-nav-links');
                    }, 0);
                }
            }
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