$(document).foundation()

const megaroster = {
  students: [],

  init(listSelector) {
    this.studentList = document.querySelector(listSelector)
    this.max = 0
    this.setupEventListeners()  
  },
  
  setupEventListeners() {
    document
      .querySelector('#new-student')
      .addEventListener('submit', this.addStudent.bind(this))
  },

  save() {
    localStorage.setItem('roster', JSON.stringify(this.students))
  },

  removeStudent(ev) {
    const btn = ev.target
   const id = btn.closest('.student')

    for (let i = 0; i < this.students.length; i++) {
        if (this.students[i].id === id.dataset.id) {
            this.students.splice(i, 1)
            break
            }
        } 
        
        id.remove()
        this.save()
    },

  addStudent(ev) {
    ev.preventDefault()
    const f = ev.target
    const student = {
      id: (this.max + 1).toString(),
      name: f.studentName.value,
    }
    this.students.unshift(student)

    const listItem = this.buildListItem(student)
    this.prependChild(this.studentList, listItem)

    this.max ++
    f.reset()
    this.save()
  },

  prependChild(parent, child) {
    parent.insertBefore(child, parent.firstChild)
  },

  buildListItem(student) {
    const template = document.querySelector('.student.template')
    const li = template.cloneNode(true)
    this.removeClassName(li, 'template')
    li.querySelector('.student-name').textContent = student.name
    li.dataset.id = student.id

    li
      .querySelector('button.remove')
      .addEventListener('click', this.removeStudent.bind(this))
  //  li
  //     .querySelector('button.up')
  //     .addEventListener('click', this.moveUpLink.bind(this))
   
    return li 

  },

  removeClassName(el, className){
    el.className = el.className.replace(className, '').trim()
  }
}
megaroster.init('#studentList')