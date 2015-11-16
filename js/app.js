'use strict';

angular.module('SignUpApp', [])
    .controller('FormCtrl', ['$scope', '$http', function($scope, $http) {
        
        var submit = false;
        
        $scope.submitForm = function(form){
            if(form.$valid) {
                alert("Sign Up info has been submitted!");
            }
            else {
                alert("There was an error submitting your Sign Up info. Please check that your information is correct.");
            }
        }
        
        $scope.reset = function () {
            document.getElementById("success").innerHTML = "";
            $scope.newForm.$setPristine();
            $scope.newForm.$setUntouched(); 
        }
        
        $scope.email = function() {
            if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($scope.email)) {
        		$scope.signUpForm.email.$setValidity('email', true); 
            } else {
                $scope.signUpForm.email.$setValidity('email', false); 
            }
        }
        
        $scope.lastName = function () {
            if ($scope.lastName.length >= 1) {
                $scope.signUpForm.lastName.$setValidity('lastName', true);
            } else {
                $scope.signUpForm.lastName.$setValidity('lastName', false);
            }
        }
        
        $scope.password = function() { 
            if($scope.password === $scope.passwordConfirm){
                $scope.signUpForm.passwordConfirm.$setValidity('passwordConfirm', true); 
            } else {
                $scope.signUpForm.passwordConfrim.$setValidity('passwordConfrim', false); 
            }
        }
    }]);