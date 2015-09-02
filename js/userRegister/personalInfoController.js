var personInfoModule = angular.module('personInfo',[])
personInfoModule.controller("personInfoController",function($scope){
    $scope.personInfoSexM = ($("#male") == "male")?"male":"female"

    $scope.personInfoFinish = function(){
        alert($scope.personInfoSexM)
    }
})