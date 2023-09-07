//board initiazliation
//create 2 players assign them with marks
//event listener to capture the box clicked then link it with the arrya 
//sicne the array is already filled withe empty strings, replace it with the mark
//rnder it 
//check for winner



const gameBoard = (()=>{
    let board= ['','','','','','','','',''];
    console.log(board);
    return {board}; 
})();
    

const player = (name, symbol) =>{
    return {name,symbol}
}

const player1  =player("Krish", "O");
const player2 =player("Test","X");


const game = (()=>{

        const {board} = gameBoard; 
        let symbol = '';
        const winner= document.querySelector(".win-display");
        let winningPlayer = '';
        
        
        const boxes = document.querySelectorAll('.box');
        boxes.forEach((box)=>{
            box.addEventListener('click',MarkSpot);
        })
        
        function MarkSpot(e){
            if (symbol==="" || symbol ==player2.symbol){
                symbol = player1.symbol;
                board[e.target.id] = symbol;
                winningPlayer = player1.name;
            }else if (symbol===player1.symbol){
                symbol = player2.symbol; 
                board[e.target.id] = symbol;
                winningPlayer = player1.name;
            }
            console.log(board);

            const {renderMove} = renderReset;
            renderMove();
            checkWinner();
        }


        function checkWinner(){
            if (board[0] === board[1] && board[1] === board[2] && board[0] !== '') {removeClick(); winner.textContent= `${winningPlayer} Wins!`; symbol = ''; return;} 
            if (board[3] === board[4] && board[4] === board[5] && board[3] !== '') {removeClick(); winner.textContent= `${winningPlayer} Wins!`; symbol = ''; return;} 
            if (board[6] === board[7] && board[7] === board[8] && board[6] !== '') {removeClick(); winner.textContent= `${winningPlayer} Wins!`; symbol = ''; return;}
            if (board[0] === board[3] && board[3] === board[6] && board[0] !== '') {removeClick(); winner.textContent= `${winningPlayer} Wins!`; symbol = ''; return;}
            if (board[1] === board[4] && board[4] === board[7] && board[1] !== '') {removeClick(); winner.textContent= `${winningPlayer} Wins!`; symbol = ''; return;}
            if (board[2] === board[5] && board[5] === board[8] && board[2] !== '') {removeClick(); winner.textContent= `${winningPlayer} Wins!`; symbol = ''; return;}
            if (board[0] === board[4] && board[4] === board[8] && board[0] !== '') {removeClick(); winner.textContent= `${winningPlayer} Wins!`; symbol = ''; return;}
            if (board[2] === board[4] && board[4] === board[6] && board[2] !== '') {removeClick(); winner.textContent= `${winningPlayer} Wins!`; symbol = ''; return;}
            if (board[0] !== '' && board[1] !== '' && board[2] !== '' && board[3] !== '' && board[4] !== '' && board[5] !== '' && board[6] !== '' && board[7] !== '' && board[8] !== '') {winner.textContent = "DRAW!"};
        }


        function removeClick(){
            boxes.forEach((box)=>{
                box.removeEventListener('click',MarkSpot);
            })
        }

})();

const renderReset= (()=>{
    const {board} = gameBoard; 
    console.log("works");
    function renderMove(){
        for (let i = 0 ; i<board.length; i++){
            const targetBox = document.getElementById(`${i}`);
            console.log(targetBox);
            targetBox.innerText = board[i];    
        }
    }
    return {renderMove};

})();



game;










    // function addIcon(){
    //     if (Math.random()==1){

    //         let x = document.createElement('span');
    //         x.classList.add("material-symbols-outlined");
    //         x.innerText = `close`;
    //         x.id = "X";
    //         return x;
    //     }
        
    //     let O = document.createElement('span');
    //     O.classList.add("material-symbols-outlined");
    //     O.innerText = `radio_button_unchecked`;
    //     O.id = "O";
    //     return O;
    // }





// const win_combo = [
//     [0,1,2],
//     [0,3,6],
//     [3,4,5],
//     [6,7,8],
//     [1,4,7],
//     [2,4,6],
//     [2,5,8],
//     [0,4,8]

