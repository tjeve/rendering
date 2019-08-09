
function renderNametags(nametags) {

    //Use a map function to create a div that houses two other divs that creates the nametag/ or create a for loop

    // let nameTagArray = []
    // console.log(nametags[0])
    // console.assert(nametags[0] === 'Kamilah', "nametags is not written correcly")
    // function createNameTag (nametags) {
    //     for (let idx = 0; idx < nametags.length; idx++) {
    //         let div = `<div style="width: 40px; padding-top: 10px; padding-bottom: 10px;">
    //                          <div style= "backround-color: blue; text-align: center;">Hello, my name is:</div>
    //                          <div>${nametags}</div>
    //                     </div>`
    //         createNameTag.push(nameTagArray)
    //     }
    
    // }
    // console.log(createNameTag)
    // return `<div class="text-center mt-5">
    //                 ${nameTagArray}
    //             </div>`

    function createNameTag (person) {
        
        return `<div style="margin-top: 30px; margin-bottom: 20px; border: solid thin gray; display: flex; flex-direction: column; width: 200px;">
                    <div style= "font-weight: bold; padding: 5px; border-bottom: solid thin gray; color: white; background-color: blue; text-align: center; flex: 1">Hello, my name is:</div>
                    <div style= "padding: 15px; text-align: center; width: 200px; flex: 4">${person}</div>
                </div>`
    }

    let newArr = nametags.map(createNameTag)

    return newArr.join('')

    // return `
    //     <div class="text-center mt-5">
    //         ${newArray}
    //     </div>
    // `
}

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}