import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
// import { IStudent } from '../interfaces/istudent.interface';

interface IStudent {
  id: number;
  name: string;
  email: string;
  gender: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServiceDataService {

  // private students: IStudent[] = [
  //   { id: 1, name: 'Luca', email: 'luca@gmail.com', gender: 'male' },
  //   { id: 2, name: 'Lilly', email: 'lilly@gmail.com', gender: 'female' },
  //   { id: 3, name: 'Anna', email: 'anna@gmail.com', gender: 'female' },
  //   { id: 4, name: 'John', email: 'john@gmail.com', gender: 'male' },
  //   { id: 5, name: 'Mary', email: 'mary@gmail.com', gender: 'female' }
  // ];

  static getSearchItems(list:IStudent[],search:string): IStudent[]{
    let students:IStudent[] = [];
    list.forEach((item:IStudent)=>{
      //Comprobamos que incuye el string y que no está vacío
        if(item.name.toLowerCase().includes(search) && search!=""){
          console.log("añadimos un item")
          students.push(item);
        }else{
          console.log("no se ha encontrado nada... al carre!!!! ")
        }
      })
      return students;
  }

    //aqui si aqui esta el JSON

  // getStudents(): IStudent[] {
  //   return this.students;
  // }

  // searchStudents(search: string): IStudent[] {
  //   return this.students.filter(student =>
  //     student.name.toLowerCase().includes(search.toLowerCase())
  //   );
  // }

}

