$(document).foundation()

//Simple 'submit' command
const megaroster = {
    //Set it to an array
    students: [],
    
    init(listSelector) {
        this.studentList = document.querySelector(listSelector)
        this.max = 0
        document
            .querySelector('#new-student')
            .addEventListener('submit', this.addStudent.bind(this)) //'this' is the submission of a new name
    },

    addStudent(ev) {
        ev.preventDefault()
        const f = ev.target
        const student = {
            id: this.max + 1,
            name: f.studentName.value,
        }
        this.buildListItem(student)
        this.max ++
    },

    buildListItem(student) {
        console.log(student)
    },
}
megaroster.init('#studentList')