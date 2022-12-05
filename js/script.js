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

const pickedCardsArray = []
const parentEl = document.querySelector(".parent")
parentEl.addEventListener('click', function(evt) {
    // console.log(evt.target.id)
    // console.log(pictures[evt.target.id])
    evt.target.setAttribute("src", `${pictures[evt.target.id]}`)
    pickedCardsArray.push([evt.target])
    console.log(pickedCardsArray)
    if (pickedCardsArray.length === 2) {
        if(pickedCardsArray[0][0].src !== pickedCardsArray[1][0].src){
            pickedCardsArray[0][0].setAttribute("src", cardBack)
            pickedCardsArray[1][0].setAttribute("src", cardBack)
        }
    pickedCardsArray.length = 0
    }
}) 
console.log(pickedCardsArray)


/*----- app's state (variables) -----*/
 
  /*----- cached element references -----*/

  /*----- event listeners -----*/
// document.querySelector('button').addEventListener('click', initialize);

  /*----- functions -----*/
//randomize the images
// window.onload = choosePic;

// function choosePic() {
//     var randomNum = Math.floor(Math.random() * pictures.length);
//     $('.back').attr('src',pictures[randomNum]);
// }



// function initialize() {
//     board = [null, null, null, null, null, null, null, null, null];
//     // OR initialize like this:
//     // board = new Array(9).fill(null);
//     turn = 1;
//     winner = null;
//     render();
//   }

{/* <input type="button" value="Reset" onclick="clear()">
function clear(){
document.getElementById("result").value.reset();} */}
  
  // $(document).ready(function(){
//     $( '#dislink' ).click(function(){
//     $("#db") .removeAttr('href');
//     });
//     });

    
//   function checkIfMatching () {
//     if (selectedCard1 + selectedCard2) === pictures[0] && pictures[6] ||
//     (selectedCard1 + selectedCard2) === pictures[1] && pictures[7] ||
//     (selectedCard1 + selectedCard2) === pictures[2] && pictures[8] ||
//     (selectedCard1 + selectedCard2) === pictures[3] && pictures[9] ||
//     (selectedCard1 + selectedCard2) === pictures[4] && pictures[10] ||
//     (selectedCard1 + selectedCard2) === pictures[5] && pictures[11] ||
//     {
//         return true
//     } else {
//         return false
//     }
// }
// pictures[1] === pictures[7]
// pictures[2] === pictures[8]
// pictures[3] === pictures[9]
// pictures[4] === pictures[10]
// pictures[5] === pictures[11]

// const clickCounter = document.getElementById("clickme"),
//   count = 0;
// button.onclick = function() {
//   count += 1;
// };


// const clicks = 0




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
//     const #card1 = $card1;
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

// const pictures = [
//     {
//         "name": "triceratops1",
//         "img": "https://iili.io/HqziLFt.png",
//     },
//     {
//         "name": "triceratops2",
//         "img": "https://iili.io/HqziLFt.png",
//     },
//     {
//         "name": "yellowtrex1",
//         "img": "https://iili.io/HqziPMN.png",
//     },
//     {
//         "name": "yellowtrex2",
//         "img": "https://iili.io/HqziPMN.png",
//     },
//     {
//         "name": "stego1",
//         "img": "https://iili.io/Hqzi6np.png",
//     },
//     {
//         "name": "stego2",
//         "img": "https://iili.io/Hqzi6np.png",
//     },
//     {
//         "name": "purpletrex1",
//         "img": "https://iili.io/HqzirtR.png", 
//     },
//     {
//         "name": "purpletrex2",
//         "img": "https://iili.io/HqzirtR.png", 
//     },
//     {
//         "name": "ptero1",
//         "img": "https://iili.io/HfspO8l.png", 
//     },
//     {
//         "name": "ptero2",
//         "img": "https://iili.io/HfspO8l.png", 
//     },
//     {
//         "name": "bronto1",
//         "img": "https://iili.io/HqziQcX.png",
//     },
//     {
//         "name": "bronto2",
//         "img": "https://iili.io/HqziQcX.png",
//     },
//     ];

//     const checkIfMatching = pictures.some((picture) => picture.name === "bronto2");

// $("parentEl").click(function(){
//     var $click = $(this);
//     var count =  $click.data("click_count") || 0) + 1;
//     $click.data("click_count", count);
//     if ( count == 1 )
//     else if ( count == 2 )
//     else {
//     $click.unbind("click");
//     }
//     return false;
//   });