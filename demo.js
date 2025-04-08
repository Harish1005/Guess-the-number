var number = document.getElementById("number")
var result = document.getElementById("result")
var score = document.getElementById("score")

var random = Math.floor(Math.random() * 10) + 1
    
var total = 0
function checkfunction(){
  var input = number.value
    if (random == input){
      total = 0
      console.log("Right")
      result.textContent = "You're Right !"
      alert("You Won !")
    } else {
      total +=1
      console.log("Wrong")
      result.textContent = "You're Wrong !"
      score.textContent = "Score : " + total
    }

    if (input == ""){
      alert("You want to give input !!")
    }
    }