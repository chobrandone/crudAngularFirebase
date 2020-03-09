import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private service: StudentService) { }
  
  ngOnInit() {
    this.clearForm()
  }

  clearForm(form?: NgForm){
    if(form != null)
      form.resetForm()
    this.service.formData = {
      id: null,
      fullName: '',
      department: '',
      country: '',
      contact: null
    }
  }

  onSubmit(form: NgForm){
    let data = Object.assign({}, form.value);
    delete data.id;
    if(form.value.id != null){
      this.service.upDateStudent(form.value.id,data);
    }else {
      this.service.addStudent(data)
    }

    this.clearForm(form)
  }

}
