/**
 * Adding redirectTo from config ability.
 * @module Runners
 * @see Application
 * @param {Object} $rootScope - Global application model.
 * @param {Object} $state - Provides interfaces to current state.
 */
const Runners = ['$rootScope', '$state', '$location', '$anchorScroll', '$transitions', 'SeoService', ($rootScope, $state, $location, $anchorScroll, $transitions, SeoService) => {
    'ngInject';
  
    /**
     * Waiting route change start event.
     * @param {Object} event.
     * @param {Object} to - Next state.
     */
    
    // $transitions.onStart({}, (transition) => {
    //   // hide nav on state change when expanded
    //   if ($('#navbarSupportedContent').hasClass('show')) {
    //       $('#navbarSupportedContent').collapse('hide');
    //   }
    // });
  
    $transitions.onSuccess({}, (transition) => {
      // update seo
      SeoService.setTitle(transition.to().title);
      SeoService.setDescription(transition.to().description);
  
      // scroll to top on page once state change transition starts
      $location.hash('top');
      $anchorScroll();
      $location.hash('');
    });
  }];
  
  /** Export our runners */
  export default Runners;