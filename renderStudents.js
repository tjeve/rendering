
function renderStudents(students) {

    //  /* change the background color */
    function changeColor (obj) {
        if (obj.isPresent === false) {
            return "tomato"
        } else {return "lightgreen"}
    }

    /* change T/F to Present/Absent */
    function changeName (obj) {
        if (obj.isPresent === false) {
            return "Absent"
        } else {return "Present"}
    }

    function rollCall (obj) {
        
        return `<div class="student-container">
                    <div style="background-color: ${obj.isPresent ? "lightgreen" : "tomato"}" class="student-names">${obj.name}</div>
                    <div style="background-color: ${obj.isPresent ? "lightgreen" : "tomato"}" class="student-attendance">${changeName(obj)}</div> 
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

// ${obj.isPresent ? "Present" : "Absent"}