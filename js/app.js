/**
 * Created by tim on 13-10-14.
 */
var hiscores = angular.module('hiscores', [
    'ui.router'
]);

hiscores.config(function($stateProvider) {
    $stateProvider.state('hiscoresOverview', {
        url: '/hiscoresOverview/{skill}',
        templateUrl: 'hiscoresOverview.html'
    })
});

hiscores.controller('hiscoresOverview', function($scope, $stateParams) {
    $scope.skill = $stateParams.skill;
});