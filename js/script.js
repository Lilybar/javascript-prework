{

    function playGame(playerInput){

        clearMessages();

        const getMoveName = function(argMoveId){
            if(argMoveId == 1){
            return 'kamień';
            }
            else if(argMoveId == 2){
                return 'papier';
            }
            else if(argMoveId == 3){
                return 'nożyce';
            }
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
        }

        const randomNumber = Math.floor(Math.random() * 3 + 1),
            argComputerMove = getMoveName(randomNumber),
            argPlayerMove = getMoveName(playerInput);
        
        console.log('Wylosowana liczba to: ' + randomNumber);

        printMessage('Mój ruch to: ' + argComputerMove);

        console.log('Gracz wpisał: ' + playerInput);

        printMessage('Twoj ruch to: ' + argPlayerMove);

        console.log('moves:', argComputerMove, argPlayerMove);

        /* function displayResult(argComputerMove, argPlayerMove) */
        const displayResult = function(argComputerMove, argPlayerMove) {
            if( argComputerMove == 'kamień' && argPlayerMove == 'papier' || argComputerMove == 'papier' && argPlayerMove == 'nożyce' || argComputerMove == 'nożyce' && argPlayerMove == 'kamień' ){
            printMessage( 'Ty wygrywasz! ');
            } else if( argComputerMove == argPlayerMove ){
                printMessage( 'Remis!' );
            } else {
                printMessage( 'Przegrywasz' );
            }
        }

        displayResult(argComputerMove, argPlayerMove);

        console.log(displayResult);

    }

    document.getElementById('play-rock').addEventListener('click', function() {
        playGame(1);
    });
    document.getElementById('play-paper').addEventListener('click', function() {
        playGame(2);
    });
    document.getElementById('play-scissors').addEventListener('click', function() {
        playGame(3);
    });

}