'use strict';

/* Filters */

angular.module('myApp.filters', []).
filter('unsafe', ['$sce', function ($sce) {
    return function (val) {
        return $sce.trustAsHtml(val);
    };
}]);
