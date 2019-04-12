/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
// let scores, roundScore, activePlayer, gamePlaying
// init();
// const diceDOM = document.querySelector('.dice');

// //監聽按下.btn-roll事件
// document.querySelector('.btn-roll').addEventListener('click', function() {
//   if (gamePlaying) {

//     // 1. Random number

//     // Math.floor(1.3) 無條件捨去小數點，就會 = 1
//     // Math.random() 會在0到1之間隨機出現數字，所以Math.random() * 6就會在0~6隨機出現數字，但六出現的機率很小，所以用Math.floor()包起來，就變成0~5隨機機率一樣的出現數字
//     const dice = Math.floor(Math.random() * 6) + 1


//     // 2. Display the result

//     //把骰子圖片顯示
//     diceDOM.style.display = 'block';

//     // 把骰子照片的路徑也改成骰子分數
//     diceDOM.src = 'dice-' + dice + '.png';


//     // 3. Update the round score IF the rolled number was NOT a 1

//     if (dice !== 1) {
//       // Add score

//       roundScore += dice;

//       // 把目前玩家骰到分數顯示，textContent是純文字內容，innerHTML可以改整個html包括標籤
//       // document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//       document.querySelector('#current-' + activePlayer).textContent = roundScore;
//     } else {
//       // Next player
//       nextPlayer();
//     }
//   }
// })


// //監聽按下'.btn-hold'事件
// document.querySelector('.btn-hold').addEventListener('click', function() {

//   const finalScoreInput = document.getElementById('finalScoreInput');
//   let finalScore;
//   // Undefined, 0, null or "" are COERCED to false
//   // Anything else is COERCED to true
//   if (finalScoreInput.value) {
//     let finalScore = finalScoreInput.value;
//   } else {
//     finalScore = 100;
//   }

//   if (gamePlaying) {

//     // 1. Add CURRENT score to GLOBAL score
//     scores[activePlayer] += roundScore;

//     // 2. Update the UI
//     document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];


//     // 3. Check if player won the game

//     if (scores[activePlayer] >= finalScore) {
//       document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
//       diceDOM.style.display = 'none';
//       document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
//       document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
//       gamePlaying = false;
//     } else {
//       // Next player
//       nextPlayer();
//     }
//   }

// });

// //因會重複使用，故另創function
// function nextPlayer() {
//   roundScore = 0;
//   document.querySelector('#current-' + activePlayer).textContent = roundScore;

//   // if activePlayer = 0， activePlay = 1 ，else = 0
//   activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

//   document.querySelector('.player-0-panel').classList.toggle('active');
//   document.querySelector('.player-1-panel').classList.toggle('active');
//   document.querySelector('.dice').style.display = 'none';
// }

// document.querySelector('.btn-new').addEventListener('click', init);

// function init() {
//   scores = [0, 0];
//   activePlayer = 0;
//   roundScore = 0;
//   document.querySelector('.dice').style.display = 'none';
//   document.getElementById('score-0').textContent = '0';
//   document.getElementById('score-1').textContent = '0';
//   document.getElementById('current-0').textContent = '0';
//   document.getElementById('current-1').textContent = '0';
//   document.querySelector('.player-0-panel').classList.remove('winner');
//   document.querySelector('.player-1-panel').classList.remove('winner');

//   //先remove掉，不然.active會一直疊加
//   document.querySelector('.player-0-panel').classList.remove('active');
//   document.querySelector('.player-0-panel').classList.add('active');
//   document.querySelector('.player-1-panel').classList.remove('active');
//   document.getElementById('name-0').textContent = 'Player 1';
//   document.getElementById('name-1').textContent = 'Player 2';
//   gamePlaying = true;

// }



// roll dice

function RollDiceBtn() {
  // 1.radom 1~6

  // 2.img change,current change

  // 3.if roll 1, current score back to 0,and change other player
}
