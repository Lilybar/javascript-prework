function playGame(){
    
    let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

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



    console.log('Gracz wpisał: ' + playerInput);
    /* let argPlayerMove = getMoveName(playerInput); */

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