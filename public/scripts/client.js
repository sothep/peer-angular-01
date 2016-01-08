var app = angular.module('myApp', []);

app.controller("myController", function($scope, $http){
  $scope.loadCandidates = function(){
    $http({
      method: 'GET',
      url: '../data/dems.json'
    }).then(function(response){
      $scope.dems = response.data.candidates;
    });
    $http({
      method: 'GET',
      url: '../data/repubs.json'
    }).then(function(response){
      $scope.repubs = response.data.candidates;
    });
  };

  $scope.choosePresident = function(){
    $http({
      method: 'GET',
      url: '/election'
    }).then(function(response){
      $scope.prez = response.data;
      $('.president').hide();
      $('.president').slideDown();
    });
  };

});
