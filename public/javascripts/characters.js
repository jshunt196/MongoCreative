/*global angular*/
angular.module('character', [])
    .controller('MainCtrl', [
        '$scope', '$http',
        function($scope, $http) {
            $scope.characters = [];
            
            $scope.incrementUpvotes = function(character) {
                alert(character);
                $http.put('/character/' + character._id + '/upvote')
                    .success(function(data) {
                        console.log("upvote worked");
                        character.upvotes += 1;
                    });
            };
            $scope.getFive = function() {
                console.log('got this far!')
                //Get 5 random characters to vote for, name, img url and vote count
                $("#votingDiv").show();
                $("#leaderboardDiv").hide();
                $scope.getAll();
            };
            
            $scope.voteOnCharacter = function () {
                console.log('calling voteOnCharacter')
                $scope.incrementUpvotes(/*Some Character*/);
                $scope.getLeaderBoard();
                $("#leaderboardDiv").show();
                $("#votingDiv").hide();
                $("#voteFirstTime").hide();
                $("#voteAgain").show();
            }
            
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

