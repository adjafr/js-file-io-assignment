'use strict'

const fs = require('fs')
// const employeeArray = require('?')

// employeeArray.forEach(emp =>
//   {
//
//   new employee
//   })

class Employee {
  constructor (name, title, salary) {
    // TODO
      this.name = name
      this.title = title
      this.salary = salary
    }


    static parseFromFilePath(filePath)  //fileStream with JSON
      {

        let x = (JSON.parse(fs.readFileSync(filePath)))

        return x.map(x => new Employee(x.name, x.title, x.salary))
      }

      promote(title, salary)
      {
        this.title = title
        this.salary = salary

      }




  // TODO ???
}

// TODO ???

module.exports = {
  Employee
}
