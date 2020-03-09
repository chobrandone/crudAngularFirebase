import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  listOfStudents: Student[];
  constructor(private service: StudentService) { }

  ngOnInit() {
    this.service.getStudent().subscribe(el => {
      this.listOfStudents = el.map(data => {
        return {
          id: data.payload.doc.id,
          ...data.payload.doc.data()
        } as Student
      })
    })
  }

  onEdit(student) {
    this.service.formData = student;
  }

  onDelete(id){
    this.service.deleteStudent(id);
  }

}
