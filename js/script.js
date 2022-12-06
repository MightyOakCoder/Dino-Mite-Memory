console.log("connected!")//delete later

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

let clickCount = 0;
const pickedCardsArray = []
let matchCount = 0;
const parentEl = document.querySelector(".parent")
parentEl.addEventListener('click', function(evt) {
    console.log(evt.target.id)
    console.log(pictures[evt.target.id])
    // console.log(evt.target.id)
    // console.log(pictures[evt.target.id])
    evt.target.setAttribute("src", `${pictures[evt.target.id]}`)
    pickedCardsArray.push([evt.target])
    console.log(pickedCardsArray)
    if (pickedCardsArray.length === 2) {
        clickCount++;
        document.getElementById("count").innerText = clickCount;
        if(pickedCardsArray[0][0].src !== pickedCardsArray[1][0].src){
            setTimeout(function() {
                pickedCardsArray[0][0].setAttribute("src", cardBack)
                pickedCardsArray[1][0].setAttribute("src", cardBack)
                pickedCardsArray.length = 0
            }, 1000)
         
        } else {
            matchCount++;
            document.getElementById("matches").innerText = matchCount;
            pickedCardsArray.length = 0
        }
        // if(pickedCardsArray[0][0].src === pickedCardsArray[1][0].src){
        //     matchesArray.push(pickedCardsArray.length)
        //     console.log(matchesArray)
        // }
    }
})

console.log(clickCount)

document.getElementById("matches").innerText = matchesArray.length/2;

function refresh(){
    window.location.reload("Refresh")
  }
/*----- app's state (variables) -----*/
 
  /*----- cached element references -----*/

  /*----- event listeners -----*/
  /*----- functions -----*/
//randomize the images
// window.onload = choosePic;

// function choosePic() {
    // window.onload = choosePic;
        function choosePic() {
        var randomNum = Math.floor(Math.random() * pictures.length);
        $('.back').attr('src',pictures[randomNum]);
    }

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
