(function (angular) {
    angular.module('app.services', [
        
    ])

    .service('SeoService', [function () {
        let seoObj = {
            firstCall: false,
            mainTitle: '', // main title from the <title> element
            currentTitle: '',
            delimittingChar: '|'
        };

        return {
            setTitle: function (title) {
                // get main title from <title> on first setTitle() call
                if (!seoObj.mainTitle && !seoObj.firstCall) {
                    seoObj.mainTitle    = angular.element('head title').text();
                    seoObj.firstCall    = true;
                }
                
                seoObj.currentTitle     = seoObj.mainTitle ? title + " " + seoObj.delimittingChar + " " + seoObj.mainTitle : title;
                angular.element('head title').text(seoObj.currentTitle);
            },
            setDescription: function (description) {
                angular.element('head meta[name="description"]').attr('contents', description);
            }
        };
    }]);
})(angular);