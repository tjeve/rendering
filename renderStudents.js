
function renderStudents(students) {

    function attendance (obj) {

        return `<div style="background-color: green; display: flex; flex-direction: column; background-color: pink; width: 100px;">
                    <div style="font-size: 20px; justify-content:-start; align-items: center; width: 100px; flex: 1;">${obj.name}</div>
                    <div style="font-size: 15px; align-items: center; width: 100px; flex: 1;">${obj.isPresent}</div>
                </div>`
    }

    let studentAttendance = students.map(attendance)
    console.log(studentAttendance)
    return `
        <div class="text-center mt-5" style="padding: 10px; width: 120px;">
            <h4>Roll Call!</h4>
            ${studentAttendance}
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