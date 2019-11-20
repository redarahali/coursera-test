(function(){
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController', lunchCheckController);

lunchCheckController.$inject = ['$scope', '$filter'];

function lunchCheckController($scope, $filter){


  $scope.message = "";

  $scope.checkBtnClick = function()
  {
    $scope.message_color = 'green';
    $scope.border_color = 'green';
    if(!$scope.dishes || $scope.dishes.length === 0 ){
      $scope.message_color = 'red';
      $scope.border_color = 'red';
      $scope.message = 'Please enter data first';
      return;
    }
    if (numberOfWords($scope.dishes) > 3 ){
      $scope.message = 'Too much!';
    }else{
      $scope.message = 'Enjoy!';
    }


  }

}
function numberOfWords(string){
  var number = 0;

  var words = string.split(",");
  for (var i = 0; i < words.length; i++){
    console.log(words[i]);
  }
  return words.length;
}

})();
