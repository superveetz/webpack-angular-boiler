/**
 * @module Config
 * @see Application
 * @param {Object} $stateProvider - Ui-router module for right nesting.
 * @param {Object} $urlRouterProvider - Configures how the application routing.
 * @param {Object} $locationProvider - Configures how the application deep linking paths are stored.
 * @param {Object} $logProvider - Configures how the application logs messages.
 */
const Config = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$logProvider', ($stateProvider, $urlRouterProvider, $locationProvider, $logProvider) => {
    'ngInject';
  
    $logProvider.debugEnabled(true);  /** Turn debug mode on/off */
    // enable html5 mode (otherwise angularjs hashes urls with `#/#!/{config}`)
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: true
    });
    $urlRouterProvider.otherwise('/');  /** If current route not in routes then redirect to home */
  
    /**
     * Url processing.
     * @param {Object} $injector - Ability to inject providers.
     * @param {Object} $location - Current location.
     */
    $urlRouterProvider.rule(($injector, $location) => {
      const path = $location.path();
      /** If route like as /home/ then /home */
      $location.path(path[path.length - 1] === '/' ? path.slice(0, -1) : path).replace();
    });

    /** Describe our states */
    $stateProvider 

      .state('app', {
        abstract: true,
        url: '',
        templateUrl: require('./views/index.html')
      })

      .state('app.home', {
        url: '/',
        controller: ['$timeout', ($timeout) => {
          $timeout(() => {
              window.prerenderReady = true;
          }, 500);
        }],
        templateUrl: require('./views/home/index.html'),
        title: 'Home',
        description: "Strata management software that is easy to use.."
      })
      
      .state('app.services', {
        url: '/services',
        controller: ['$timeout', ($timeout) => {
          $timeout(() => {
              window.prerenderReady = true;
          }, 500);
        }],
        templateUrl: require('./views/services/index.html'),
        title: 'Services',
        description: "Strata management software that is easy to use.."
      })
      
      .state('app.pricing', {
        url: '/pricing',
        controller: ['$timeout', ($timeout) => {
          $timeout(() => {
              window.prerenderReady = true;
          }, 500);
        }],
        templateUrl: require('./views/pricing/index.html'),
        title: 'Pricing',
        description: "Strata management software that is easy to use.."
      });;

    // .state('app.contact', {
    //     url: '/contact',
    //     templateUrl: require('./views/contact/index.html'),
    //     controller: ['$timeout', function ($timeout) {
    //         $timeout(() => {
    //             window.prerenderReady = true;
    //         }, 500);
    //     }],
    //     title: 'Contact',
    //     description: "We are a small startup based out of the Fraser Valley that is passionate about building digital stories and business solutions since 2017."
    // });
    // end states
  }];
  
  /** Export our config */
  export default Config;