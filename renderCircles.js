
function renderCircles(circles) {                      //function that renders circles
    // HINT: You probably need to write a for loop!
    //       Or, if you're feeling fancy, use .map()

/* for Loop Method <-- This is correct Code and it works too!!!!
    let circleDivs = []                                 //Accumulator that will hold the new array
    for (let idx = 0; idx < circles.length; idx++) {    //for loop will cycle through the function cirlesb elow 
        let width = circles[idx].radius
        let height = circles[idx].radius
        let color = circles[idx].color

        let div = `<div id= "circles" style= "border-radius: 50%; background-color: ${color}; height: ${2 * height}px; width: ${2 * width}px; margin-bottom: 10px;"></div>`

        circleDivs.push(div)        //pushes the div you created to the circleDivs array
    }
    console.dir(circleDivs)       
    // return circleDivs.join('\n')     //returns circleDivs array as a string with spaces in between rather than commas. This works.
    return `
    <div class="text-center mt-5" style="width: 200px; align-items: center;">
        ${circleDivs.join('\n')}
    </div>`        
*/

    /* My .Map method: it works! but is not centered. */
    function buildCircleHtml(obj) {
        // This function applies the properties of circlesAbstraction inside of circles() to circles.
        return `<div style="border-radius: 50%; background-color: ${obj.color}; height: ${2 * obj.radius}px; width: ${2 * obj.radius}px; margin-bottom: 10px;"></div>`
    }
    let newArr = circles.map(buildCircleHtml).join('') //Map creates a new array from performing a function on another array. let newArr = oldArray.map(function)
    return `<div class="text-center mt-5" style="width: 200px; align-items: center;">
                 ${newArr}
             </div>`  

}

function circles() {                                    //this function has contains an array of objects with information that will be given to renderCircles
    var content = document.getElementById('content');

    var circlesAbstraction = [
        {
            radius: 50,
            color: "#FF00FF"
        },
        {
            radius: 30,
            color: "#FF99AA"
        },
        {
            radius: 60,
            color: "#0000FF"
        },
        {
            radius: 10,
            color: "#000000"
        },
    ];

    content.innerHTML = renderCircles(circlesAbstraction);
}