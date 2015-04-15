angular
    .module('mainApp')
    .controller('MainController', MainController);

MainController.$inject = ['$firebaseObject'];

function MainController($firebaseObject) {
    var self = this;
    self.scoretest1= 'Player 1';
    self.scoretest2= 'Player 2';
    //  var playerOne = "X";
    // var playerTwo = "O";
    self.game = syncGameWithFirebase()
    self.makeMove = makeMove
    self.getWinner = getWinner;

    // self.isPlayed = false;
    //testing angular is connected
    function syncGameWithFirebase() {
        // firebase sync attempt for JS constructor to make a reference to  database
        var ref = new Firebase("https://tictactoefinal.firebaseio.com/")
            // AngularFire library to download our data into a local object
        var gameObject = $firebaseObject(ref);
      
            gameObject.$loaded(function() {
            gameObject.gameBoard = [];
            gameObject.counter = 0;
            gameObject.scoretest1= "Player 1";
            gameObject.scoretest2= "Player 2";

            for (var i = 0; i < 9; i++) {
                gameObject.gameBoard.push({
                    circle: false,
                    isPlayed: false
                });
            } 
            gameObject.$save();

        });

            return gameObject;

    }


    // fucntion that makes move for each click.


    function makeMove($index) {



            // first if statment checks to see if a move isPlayed (which = red) and a move by circle(which = purple)
            if ((self.game.gameBoard[$index].isPlayed !== true) && (self.game.gameBoard[$index].circle !== true)) {
                //if statement that starts the decision process that will either elect red or purlpe
                if ((self.game.gameBoard[$index].isPlayed === false) && (self.game.counter % 2 === 0)) {
                    self.game.gameBoard[$index].isPlayed = true;
                    self.game.counter++;
                    console.log(self.game.counter);
                } else if (self.game.counter % 2 === 1) {
                    self.game.gameBoard[$index].circle = true;
                    console.log('this will be purple');
                    self.game.counter++;
                }
                getWinner();
            }
            // END !!!!!If statement that starts the decision process that will either elect red or purlpe

                self.game.$save();
            //  else {console.log('its fucked');}
        } //end makeMove curly

    // set up a counter so that each time something is clicked it adds 1.

    // self.game.gameBoard = [];

    // for loop creates 9 divs and isPlayed is created to change background
    //  to red to demonstrate click function

    // for (var i = 0; i < 9; i++) {
    //     self.game.gameBoard.push({
    //         circle: false,
    //         isPlayed: false
    //     });
    // }

    // function for determing x winner through rows
    function getWinner() {
            var winner = true
            var zero = self.game.gameBoard[0]
            var one = self.game.gameBoard[1]
            var two = self.game.gameBoard[2]
            var three = self.game.gameBoard[3]
            var four = self.game.gameBoard[4]
            var five = self.game.gameBoard[5]
            var six = self.game.gameBoard[6]
            var seven = self.game.gameBoard[7]
            var eight = self.game.gameBoard[8]
                //  START if statements for winner by rows
            if (zero.circle === true && one.circle === true && two.circle === true) {
                // self.gameObject.scoretest1 = "isPlayed"
                alert ("O wins");
            } else if (zero.isPlayed === true && one.isPlayed === true && two.isPlayed === true) {
                alert("isPlayed wins");
            }


            if (three.circle === true && four.circle === true && five.circle === true) {
                console.log("circle wins");
            } else if (three.isPlayed === true && four.isPlayed === true && five.isPlayed === true) {
                console.log("isPlayed wins");
            }

            if (six.circle === true && seven.circle === true && eight.circle === true) {
                console.log("circle wins");
            } else if (six.isPlayed === true && seven.isPlayed === true && eight.isPlayed === true) {
                console.log("isPlayed wins");

            }
            // END  if statment for winner rows

            // START if statments for columns
            if (zero.circle === true && three.circle === true && six.circle === true) {
                console.log("circle wins");
            } else if (zero.isPlayed === true && three.isPlayed === true && six.isPlayed === true) {
                console.log("isPlayed wins");
            }
            if (one.circle === true && four.circle === true && seven.circle === true) {
                console.log("circle wins");
            } else if (one.isPlayed === true && four.isPlayed === true && seven.isPlayed === true) {
                console.log("isPlayed wins");
            }
            if (two.circle === true && five.circle === true && eight.circle === true) {
                console.log("circle wins");
            } else if (two.isPlayed === true && five.isPlayed === true && eight.isPlayed === true) {
                console.log("isPlayed wins");
            }

            // END if statment for column wins

            // START if statment for wins
            if (zero.circle === true && four.circle === true && eight.circle === true) {
                console.log("circle wins");
            } else if (zero.isPlayed === true && four.isPlayed === true && eight.isPlayed === true) {
                console.log("isPlayed wins");
            }
            if (two.circle === true && four.circle === true && six.circle === true) {
                console.log("circle wins");
            } else if (two.isPlayed === true && four.isPlayed === true && six.isPlayed === true) {
                console.log("isPlayed wins");
            }
            // End if statment for wins



        } ////end get winner curleys 
}//////////end firebase Array////////////






// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  //                     create a ng click function that displays either "X" or "O"
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////              End ng- click function          //////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // I want to set the game board to and empty string. 
// // then make condiiontals from 0-8 setting each trio for the winner.
// //start horizantal winner
// if 0 =1, and 1=2 and 0=2 then winner;
// if 3=4 and 4=5 and 3=5 then winner;
// if 6=7 and 7-8 ad 6=8 then winner;
// // end horizantal winner

// // start vertical winner
// if 0=3 and 3=6 and 0=6 then winner
// if 1=4 and 4= 7 and 1=7 thne winner
// if 2=5 and 5=8 and 2=8 then winner
// // end vertical winner

// // start diagonal winner
// if 0=4 and 4=8 and 0=8 then winner
// if 2=4 and 4=6 and 2=6 then winner
// //end  diagonal winner

// if 0===1 && 1===2 && 0===2