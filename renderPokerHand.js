
function renderPokerHand(pokerHand) {
    // HINT: You can use <img /> tags that point to the card images in the /cards folder

    //<img src="cards/${obj.value}${obj.suit}.png">
    function displayHand (obj) {
        return `<div class="poker-cards"><img src="cards/${obj.value}${obj.suit}.png"></div>`
    }
    let renderHand = pokerHand.map(displayHand)
    console.log(renderHand);
    return `
        <div class="text-center mt-5 poker-cards">
            ${renderHand.join('')}
        </div>
    `
}

function pokerHand() {
    var content = document.getElementById('content');

    var pokerHandAbstraction = [
        {
            value: "K",
            suit: "C"
        },
        {
            value: "K",
            suit: "D"
        },
        {
            value: "9",
            suit: "S"
        },
        {
            value: "2",
            suit: "H"
        },
        {
            value: "9",
            suit: "H"
        }
    ];

    content.innerHTML = renderPokerHand(pokerHandAbstraction);

}

/*
What I learned:
- while debugging, console.log() your functions. You should see what you're looking for
if not somethings wrong.
- Make sure that all of your functions have a return value. If not they will return undefined.
- This means that if your function returns undefined, you probably forgot to specifiy the
return value.
*/