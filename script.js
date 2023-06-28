angular.module('tabApp', [])
  .controller('TabController', ['$scope', function($scope) {
    $scope.tab = 1;

    $scope.setTab = function(newTab){
      $scope.tab = newTab;
    };

    $scope.isSet = function(tabNum){
      return $scope.tab === tabNum;
    };
}]);

let btn=document.querySelector("#show1");
let infoModal=document.querySelector("#infoModal");
let close=document.querySelector("#close1");
btn.addEventListener("click", function(){
  infoModal.showModal();
})
close.addEventListener("click", function(){
  infoModal.close();
})

