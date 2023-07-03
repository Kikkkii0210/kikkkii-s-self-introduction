angular.module("tabApp", []).controller("TabController", [
  "$scope",
  function ($scope) {
    $scope.tab = 1;

    $scope.setTab = function (newTab) {
      $scope.tab = newTab;
    };

    $scope.isSet = function (tabNum) {
      return $scope.tab === tabNum;
    };
  }
]);

let btn1 = document.querySelector("#show1");
let infoModal1 = document.querySelector("#infoModal1");
let close1 = document.querySelector("#close1");
btn1.addEventListener("click", function () {
  infoModal1.showModal();
});
close1.addEventListener("click", function () {
  infoModal1.close();
});

let btn2 = document.querySelector("#show2");
let infoModal2 = document.querySelector("#infoModal2");
let close2 = document.querySelector("#close2");
btn2.addEventListener("click", function () {
  infoModal2.showModal();
});
close2.addEventListener("click", function () {
  infoModal2.close();
});