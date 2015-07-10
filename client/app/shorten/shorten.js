angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.url = ''
  $scope.link = {'url':null};
  //$scope.link = {url:$scope.url}

  $scope.addLink = function(){
    $scope.link['url']=$scope.url
    console.log("Sending URL")
    console.log($scope.link)
    Links.addLink($scope.link);
  };
});
