
function renderRestaurants(restaurants) {
/*  //This function changes the priceRating number amount into dollar signs. Turns out you don't even need it. Use the repeat method inline!
    function dollars (price) {

        let dollarSign = '$'    //defines dollarSign
        let dollarAmount = ''    //accumulator
        
        // for (let idx = 0; idx < price.priceRating; idx++) { //for every number between 0 and obj.priceRating
        //     dollarAmount += dollarSign                      // .repeat() does the same thing a for loop does.                         
        // }
        dollarAmount = dollarSign.repeat(price.priceRating)
        return dollarAmount
    }
    // This function can also be written like this:
            return '$'.repeat(price.priceRating)
*/
    function restaurantCards (restaurantInfo) {
        return `<div class="restContainer">
            <div class="restName">${restaurantInfo.name}</div>
            <div class="restType">${restaurantInfo.type}</div>
            <div class="restPrice">${'$'.repeat(restaurantInfo.priceRating)}</div>
        </div>`
    }

    let presentation = restaurants.map(restaurantCards).join('')
    console.log(presentation)
    return `
        <div class="text-center mt-5 restBox">
            ${presentation}
        </div>
    `
}

function restaurants() {
    var content = document.getElementById('content');

    var restaurantsAbstraction = [
        {
            name: "McDonald's",
            type: "Fast Food",
            priceRating: 1
        },
        {
            name: "Gunshow",
            type: "Date Night Dining",
            priceRating: 5
        },
        {
            name: "Iron Age",
            type: "Korean BBQ",
            priceRating: 4
        },
    ];

    content.innerHTML = renderRestaurants(restaurantsAbstraction);

}