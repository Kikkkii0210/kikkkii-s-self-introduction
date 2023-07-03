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

let btn1=document.querySelector("#show1");
let infoModal1=document.querySelector("#infoModal1");
let close1=document.querySelector("#close1");
btn1.addEventListener("click", function(){
  infoModal1.showModal();
})
close1.addEventListener("click", function(){
  infoModal1.close();
});

let btn2=document.querySelector("#show2");
let infoModal2=document.querySelector("#infoModal2");
let close2=document.querySelector("#close2");
btn2.addEventListener("click", function(){
  infoModal2.showModal();
})
close2.addEventListener("click", function(){
  infoModal2.close();
})

let btn3=document.querySelector("#show3");
let infoModal3=document.querySelector("#infoModal3");
let close3=document.querySelector("#close3");
btn3.addEventListener("click", function(){
  infoModal3.showModal();
})
close3.addEventListener("click", function(){
  infoModal3.close();
})

let btn4=document.querySelector("#show4");
let infoModal4=document.querySelector("#infoModal4");
let close4=document.querySelector("#close4");
btn4.addEventListener("click", function(){
  infoModal4.showModal();
})
close4.addEventListener("click", function(){
  infoModal4.close();
})

let btn5=document.querySelector("#show5");
let infoModal5=document.querySelector("#infoModal5");
let close5=document.querySelector("#close5");
btn5.addEventListener("click", function(){
  infoModal5.showModal();
})
close5.addEventListener("click", function(){
  infoModal5.close();
})

let btn6=document.querySelector("#show6");
let infoModal6=document.querySelector("#infoModal6");
let close6=document.querySelector("#close6");
btn6.addEventListener("click", function(){
  infoModal6.showModal();
})
close6.addEventListener("click", function(){
  infoModal6.close();
})