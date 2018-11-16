/*global angular*/
angular.module('character', [])
    .controller('MainCtrl', [
        '$scope', '$http',
        function($scope, $http) {
            $scope.characters = [];
            
            $scope.incrementUpvotes = function(character) {
                $http.put('/character/' + character._id + '/upvote')
                    .success(function(data) {
                        console.log("upvote worked");
                        character.upvotes += 1;
                    });
            };
            $scope.getFive = function() {
                // Find 5 random characters and return to front end.
                
                
                /*return $http.get('/voteOptions').success(function(data) {
                    angular.copy(data, $scope.characters);
                });*/
            };
            $scope.getLeaderBoard = function() {
                // retrieve top 10 characters by upvote
                
                /*return $http.get('/leaderBoard').success(function(data) {
                    angular.copy(data, $scope.characters);
                });*/
            };
            
            $scope.getAll = function() {
                console.log("reached getAll route");
                return $http.get('/characters').success(function(data) {
                    angular.copy(data, $scope.characters);
                });
            };
            $scope.getAll();
        }
    ]);

