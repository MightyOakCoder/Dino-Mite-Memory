console.log("connected!")//delete later

/*----- constants -----*/
// const lookup = {
//     "1": "Player 1",
//     "-1": "Player 2"
//     "null": "Null"
// };
const cardBack = "https://iili.io/Hf4LFi7.png"
const pictures = [
    "https://iili.io/HqziLFt.png", 
    "https://iili.io/HqziPMN.png",
    "https://iili.io/Hqzi6np.png", 
    "https://iili.io/HqzirtR.png", 
    "https://iili.io/HfspO8l.png", 
    "https://iili.io/HqziQcX.png",
    "https://iili.io/HqziLFt.png", 
    "https://iili.io/HqziPMN.png",
    "https://iili.io/Hqzi6np.png", 
    "https://iili.io/HqzirtR.png", 
    "https://iili.io/HfspO8l.png", 
    "https://iili.io/HqziQcX.png",
]

const parentEl = document.querySelector(".parent")
parentEl.addEventListener('click', function(evt) {
    console.log(evt.target.id)
    console.log(pictures[evt.target.id])
    evt.target.setAttribute("src", `${pictures[evt.target.id]}`)
})

/*----- app's state (variables) -----*/
 
  /*----- cached element references -----*/

  /*----- event listeners -----*/
  
  /*----- functions -----*/


// const clicks = 0

// function onClick() {
//     clicks += 1;
//     document.getElementById("clicks").pictures = clicks;
// }
// console.log(clicks)


// var button = pictures,
//   count = 0;
// button.onclick = function() {
//   count += 1;
//   button.innerHTML = "Click me: " + count;
// };
// console.log(count)



// const timesClicked = 0
// function stopClick() {
//     timesClicked++;
//     if (timesClicked > 2) {
//         parentEl.removeEventListener("click", stopClick)
//     } else //continue to allow clicks
// };

// function flipCard(cardChosen) {
//     if (cardChosen != pictures[0] + pictures[6])
//     setAttribute
// }

// If cards match
//     then they stay up
//     else they flip over

// $('.parent div img').on('click', function (evt){
//     console.log(evt.target.id)
//     // evt.target.currentSrc = "https://iili.io/HqziLFt.png"
// });


// const status = 
    // const #card1 = $card1;
// const .back = $imgBack
// $(document).ready(function(){
//     $imgBack.click(function(){
//       $card1.toggle();
//     });
//   });
  
// $card1.fadeOut(function() {
//   trigger: 'click'
// });

// $(document).ready(function(){
//   $img.click(function(){
//     $card1.toggle();
//   });
// });


//What is said on screen when game is over
// function render() {
//     // board.forEach(function(sq, idx) {
//     //     squares[idx].style.background = lookup[sq];
//     //   });
//       if (winner === 'T') {
//       message.innerHTML = "It's a tie!";
//     } else if (winner) {
//       message.innerHTML = `Congrats ${lookup[winner].toUpperCase()}!`;
//     } else {
//       message.innerHTML = `Congrats ${lookup[turn].toUpperCase()}!`;
//     }
//   }

//randomize the images
window.onload = choosePic;

var randomPics = pictures

function choosePic() {
    var randomNum = Math.floor(Math.random() * randomPics.length);
    document.getElementsById("main").src = randomPics(randomNum);
}