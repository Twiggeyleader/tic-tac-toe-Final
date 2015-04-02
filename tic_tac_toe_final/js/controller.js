angular
    .module('mainApp')
    .controller('MainController', MainController);

    function MainController(){
        var self = this;
        // self.isPlayed = false;
        //testing angular is connected

        self.theory = theory;
        function theory($index) {
            console.log("controller is working!");
            // self.isPlayed = true;
            self.gameBoard[$index].isPlayed = true;
 
        }




        self.gameBoard = [];

// for loop creates 9 divs and isPlayed is created to change background
//  to red to demonstrate click function

        for(var i = 0; i < 9; i++){
            self.gameBoard.push({square: " ", isPlayed: false});
        }


    }
   



    // }
// get winner function//
function getWinner(){
    if (winnerIsX()) {
        return 'X'
    }
    if(winnerIsO()){
        return 'O'
    }

    function winnerIsX(){
        return winsRowX() || winsColumnX || winsDiagonalX()
    }
     // function for determing x winner through rows
    function winsRowX(){
        return allThreeX(cell(0), cell(1), cell(2)) ||
         allThreeX(cell(3), cell(4), cell(5)) ||
         allThreeX(cell(6), cell(7), cell(8));
    }
}





// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  //                     create a ng click function that displays either "X" or "O"
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//     function click(){

//     }

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

    

  













