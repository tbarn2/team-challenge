'use strict';

angular.module('SignUpApp', [])
    .controller('FormCtrl', ['$scope', function($scope) {

        $scope.submitForm = function(form){
            if(form.$valid) {
                alert("Sign Up info has been submitted!");
            }
            else {
                alert("There was an error submitting your Sign Up info. Please check that your information is correct.");
            }
        }

    }])