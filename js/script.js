console.log("connected!")//delete later

const cardBack = "https://iili.io/HCLFZTx.png"
const pictures = [
    "https://iili.io/HqziLFt.png", 
    "https://iili.io/HqziPMN.png",
    "https://iili.io/Hqzi6np.png", 
    "https://iili.io/HqzirtR.png", 
    "https://iili.io/HfspO8l.png", 
    "https://iili.io/HqziQcX.png",
    "https://iili.io/HfspO8l.png", 
    "https://iili.io/Hqzi6np.png", 
    "https://iili.io/HqziPMN.png",
    "https://iili.io/HqzirtR.png", 
    "https://iili.io/HqziQcX.png",
    "https://iili.io/HqziLFt.png", 
   
]

let clickCount = 0;
let matchCount = 0;
const pickedCardsArray = []
const parentEl = document.querySelector(".parent")
parentEl.addEventListener("click", function(evt) {
    evt.target.setAttribute("src", `${pictures[evt.target.id]}`)
    pickedCardsArray.push([evt.target])
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
        if (matchCount === 6) {
            if (clickCount <= 10) {
                document.getElementById("win").innerHTML = "YOU WIN!!";
            } else {
                document.getElementById("win").innerHTML = "SORRY, TRY AGAIN!";
            }
        }
    }
})


/*----- app's state (variables) -----*/

/*----- cached element references -----*/

/*----- event listeners -----*/
/*----- functions -----*/
function refresh(){
    window.location.reload("Refresh")
  }