
function renderCircles(circles) {                      //function that renders circles
    // HINT: You probably need to write a for loop!
    //       Or, if you're feeling fancy, use .map()

    let circleData = []
    for (let index = 0; index < circles.length; index++) { // iterate through the length of the circles function. The for loop can't access circlesAbstraction, but can access circles() so use circles.length
        let radius = circles[index].radius
        let color = circles[index].color

        let div = `<div style = "border-radius: ${radius}; color: ${color}"></div>`

        circleData.push(div)                  
    }
    console.log(circleData)


    //create a new array with the information in circles() then use the new array to input information. You can do this using the map function!

    // function createCircleHTML (obj) {  //this function is supposed to create a div for html
    //     let div = `<div style = "border-radius: ${circles.radius} color: ${circles.color}"</div>`
    //     return div
    // }

    // //map function that uses create createCircleHTML

    // let newArr = circles.map(createCircleHTML)

    // console.log(circles.map())


    let circleDivs = circleData.join()
    console.log(circleDivs)

    return `
        <div class="text-center mt-5">
           <div>${circleDivs}</div>
        </div>
    `
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