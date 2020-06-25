function playGame(1,2,3){

    playerInput(arg1); /* "jak napiszesz zadeklarujesz funkcję która przyjmuje jeden argument? nazwij ten argument jak chcesz" */

    function getMoveName(argMoveId){
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

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let argComputerMove = getMoveName(randomNumber);

    printMessage('Mój ruch to: ' + argComputerMove);

    /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.'); */
    let argPlayerMove = getMoveName(playerInput);
    console.log('Gracz wpisał: ' + playerInput);

    printMessage('Twoj ruch to: ' + argPlayerMove);

    console.log('moves:', argComputerMove, argPlayerMove);

    function displayResult(argComputerMove, argPlayerMove) {
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

    
playGame(3);