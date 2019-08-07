
function renderRectangle(rectangle) {
    console.log(rectangle.width)                   //renderRectangle takes rectangle as a parameter. Rectangle is a function.
    return `
        <div class="text-center mt-5">
            <div style = "
                width: ${rectangle.width}px;
                height: ${rectangle.height}px;
                background-color: ${rectangle.color}">
             </div>
        </div>
    `                                                   //this function returns HTML code that is then given to content
}

function rectangle() {
    var content = document.getElementById('content');   //defines where to find the content in the DOM

    var rectangleAbstraction = {                        //this is the abstracted rectangle information: w,h,& color
        width: 100,
        height: 200,
        color: "#FF00FF"
    }

    content.innerHTML = renderRectangle(rectangleAbstraction);    //this changes HTML of the content element to render the rectangle

}