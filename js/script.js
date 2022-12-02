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


const parentEl = document.querySelector(".parent")
parentEl.addEventListener('click', function(evt) {
    console.log(evt.target.id)
    console.log(pictures[evt.target.id])
    evt.target.setAttribute("src", `${pictures[evt.target.id]}`)
})

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