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
        this.students.push(student) 
        const listItem = this.buildListItem(student)
        this.studentList.appendChild(listItem)
        this.max ++
        f.reset()
    },

    buildListItem(student) {
       const li = document.createElement('li')
       li.textContent = student.name
    //    li.setAttribute('data-id', student.id)
       li.dataset.id = student.id
       return li
    },
}
megaroster.init('#studentList')