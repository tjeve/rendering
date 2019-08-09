
function renderStudents(students) {

    //  /* change the background color */
    // function changeColor (obj) {
    //     if (obj.isPresent === false) {
    //         return "tomato"
    //     } else {return "lightgreen"}
    // } 
    //I rewrote this code using a conditional ternary operator. The other way to do this is using the if/else statement below for the changeName function

    /* change T/F to Present/Absent */
    function changeName (person) {
        // if (person.isPresent === false) { //What if the key isPresent isn't in the array below? What if it had a value of null, or undefined?
        //     return "Absent"               //This function would then mark it as present. Which is probably not what you want. This would be 
        // } else {return "Present"}         //an example of not wanting to be explicit by using ===, you might want to use truthy, falsy here

        return person.isPresent ? "Present" : "Absent" // a function like "isPresent" starting with is implies a boolean value. So you just have
                                                        // to say if ...then the word, because it will return a boolean value anyway.
        if (person.isPresent) return "Present" //Line 18 and line 20 and 21 are a good way to represent these.
        return "Absent"


    }

    function rollCall (person) {
        
        return `<div class="student-container">
                    <div style="background-color: ${person.isPresent ? "lightgreen" : "tomato"}" class="student-names">${person.name}</div>
                    <div style="background-color: ${person.isPresent ? "lightgreen" : "tomato"}" class="student-attendance">${changeName(person)}</div> 
                </div>`
    }
    //I want to pass a color to the main css not to here. 
    let studentAttendance = students.map(rollCall)
    console.dir(studentAttendance)
    return `
        <div class="text-center mt-5" style="padding: 10px; width: 120px;">
            <h4>Roll Call!</h4>
            ${studentAttendance.join('')}
        </div>
    `
}
function students() {
    var content = document.getElementById('content');

    var studentsAbstraction = [
        {
            name: "Kamilah",
            isPresent: true
        },
        {
            name: "Kim",
            isPresent: true
        },
        {
            name: "Stuart",
            isPresent: false
        },
        {
            name: "Ron",
            isPresent: true
        },
        {
            name: "Krissy",
            isPresent: false
        }
    ]

    content.innerHTML = renderStudents(studentsAbstraction);
}
/*
What I learned:
- Using inline styles can be useful for something quick, but over using them can be annoying later on when
you go back to manipulate the page later on.
- If you're manipulating CSS using ${} notation, you cannot do this on a CSS file, so that likely needs to be done in your JS file
- if/else statements require {} notation for the action part of it ex: if(something){do this}else{do this}.
- Conditional Ternary statements are quick ways to write if/eles statements in line in JS so that your code doesn't look as bulky.
However, you should not use them for anything that is too complex. They are probably best used for single word replacements.
*/
// ${obj.isPresent ? "Present" : "Absent"}