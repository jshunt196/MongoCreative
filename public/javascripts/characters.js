/*global angular*/
/*global arrayNums*/
angular.module('character', [])
    .controller('MainCtrl', [
        '$scope', '$http', 
        function($scope, $http) {
            $scope.characters = [];
            $scope.arrayNums = [];
            
            $scope.incrementUpvotes = function(character) {
                $http.put('/characters/' + character._id + '/upvote')
                    .success(function(data) {
                        console.log("upvote worked");
                        character.upvotes += 1;
                    });
            };
            $scope.getFive = function() {
                //choose 5 random numbers and put them in array arr
                var arr = []
                while(arr.length < 5){
                    var r = Math.floor(Math.random()*$scope.characters.length);
                    if(arr.indexOf(r) === -1) arr.push(r);
                }
                
                $("#bind1").html($scope.characters[arr[0]].title);
                $scope.linkappend1 = $scope.characters[arr[0]].picture;
                $("#bind1votes").html($scope.characters[arr[0]].upvotes);

                $("#bind2").html($scope.characters[arr[1]].title);
                $scope.linkappend2 = $scope.characters[arr[1]].picture;
                $("#bind2votes").html($scope.characters[arr[1]].upvotes);
                
                $("#bind3").html($scope.characters[arr[2]].title);
                $scope.linkappend3 = $scope.characters[arr[2]].picture;
                $("#bind3votes").html($scope.characters[arr[2]].upvotes);
                
                $("#bind4").html($scope.characters[arr[3]].title);
                $scope.linkappend4 = $scope.characters[arr[3]].picture;
                $("#bind4votes").html($scope.characters[arr[3]].upvotes);

                $("#bind5").html($scope.characters[arr[4]].title);
                $scope.linkappend5 = $scope.characters[arr[4]].picture;
                $("#bind5votes").html($scope.characters[arr[4]].upvotes);

                //Get 5 random characters to vote for, name, img url and vote count
                $("#votingDiv").show();
                $("#leaderboardDiv").hide();
                $scope.arrayNums = arr;
                //$scope.getAll();
            };
            
            $scope.voteOnCharacter = function (num) {
                $scope.incrementUpvotes($scope.characters[$scope.arrayNums[num - 1]]);
                $scope.getLeaderBoard();
                $("#leaderboardDiv").show();
                $("#votingDiv").hide();
                $("#voteFirstTime").hide();
                $("#voteAgain").show();
            }
            
            $scope.getLeaderBoard = function() {
                var leaderboard = [];
                for (var i = 0; i < characters.length; i++){
                    if (leaderboard.length == 0){
                        leaderboard.push(characters[i]);
                    }
                    else{
                        for (var j = 0; j < leaderboard.length; j++){
                            
                        }
                    }
                }
            };
            
            $scope.votingAgain = function() {
                $scope.getFive();
                $("#voteFirstTime").show();
                $("#voteAgain").hide();
            };
        
            $scope.getAll = function() {
                console.log("reached getAll route");
                return $http.get('/Character').success(function(data) {
                    angular.copy(data, $scope.characters);
                });
            };
            $scope.getAll();
        }
    ]);

