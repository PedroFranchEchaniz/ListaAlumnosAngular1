import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { Sex, Student } from 'src/app/models/alumno.interface';

const TOTAL_HOURS = 50;
const STUDENTS: Student[] = [
  {
    id: '1',
    name: 'Miguel',
    lastname: 'Campos',
    sex: Sex.Female,
    age: 25,
    subjects: [
      {
        name: 'Math',
        hours: 5
      },
      {
        name: 'Spanish',
        hours: 4
      }
    ],
    paid: true
  },
  {
    id: '2',
    name: 'Pepe',
    lastname: 'García',
    sex: Sex.Female,
    age: 25,
    subjects: [
      {
        name: 'Math',
        hours: 10
      },
      {
        name: 'Spanish',
        hours: 30
      }
    ],
    paid: false
  }
];


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  studentList = STUDENTS;


percentHours(student: Student): number{
  let totalHours = 0;
  student.subjects.forEach(subject => {
    totalHours += subject.hours;
  });
  let percent = parseFloat((totalHours*100/50).toFixed(2));
  return percent;
}

  getProgressBarClasses(student: Student){
    let percent = this.percentHours(student)
    if(percent < 50){
      return 'progress-bar progress-bar-striped bg-danger'
    }else{
      return 'progress-bar progress-bar-striped bg-success';
    }
  }
}
