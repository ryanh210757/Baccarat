let player = {
    chips: 500
}

const inputField = document.getElementById("input-field")
const addbutton = document.getElementById("add-button")
let user = document.getElementById("balance")
let hasBaccarat = false

user.textContent = "Balance: $" + player.chips

function checkBalance(){
    let inputValue = inputField.value
    if (player.chips < inputValue){
        console.log("you do not have enough chips")
    }else{
        player.chips -= inputValue
        user.textContent = "Balance: $" + player.chips
        console.log(`You have ${player.chips} remaining`)
    }
}

function playGame(){
 
     fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=4")
        .then(response => response.json())
        .then(data => {
            let playerCards = (data.cards.slice(0, 2))
            let bankerCards = (data.cards.slice(2, 4))
            console.log(playerCards)
            console.log(bankerCards)
            let sum = 0 
           
            playerCards.forEach(element => {
                
                html = `
                        <div>
                            <img class=image src="${element.image}"/>
                        </div>
                        `
                document.getElementById("player").innerHTML += html
                inte = Number(element.value)
                sum += inte
                if(isNaN(sum)){
                    console.log("isnana")
                }
            });

            bankerCards.forEach(element => {
                
                html = `
                        <div>
                            <img class=image src="${element.image}"/>
                        </div>
                        `
                console.log(element)
                document.getElementById("banker").innerHTML += html
            });
            
            console.log(data.cards)
            console.log(` Player value is : ${sum}`)
            
        }  
        )
}

addbutton.addEventListener("click", function(){
    checkBalance()
    playGame()
    console.log(`You have chosen ${document.querySelector('input[name="choice"]:checked').value} with a wager of ${inputField.value}`)
    console.log("DRAWING CARDS.. GOOD LUCK")
})


