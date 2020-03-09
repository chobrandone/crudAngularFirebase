import { Injectable } from '@angular/core';
import { Student } from './student';
import { AngularFirestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  formData: Student;

  constructor(private db: AngularFirestore) { }

  addStudent(newStudent){
    return this.db.collection('students').add(newStudent)
  }

  getStudent(){
    return this.db.collection('students').snapshotChanges();
  }

  upDateStudent(id,up){
    this.db.doc('students/'+id).update(up);
  }

  deleteStudent(id){
    this.db.doc('students/'+id).delete();
  }
}
