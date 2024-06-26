import { Injectable } from '@angular/core';
import { IStudent } from '../interfaces/istudent.interface';

interface Data {
  id: number;
  name: string;
  email: string;
  gender: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServiceDataService {


  static getSearchItems(list:IStudent[],search:string): IStudent[]{
    let students:IStudent[] = [];
    list.forEach((item:IStudent)=>{
        if(item.name.toLowerCase().includes(search.toLowerCase())){
          students.push(item);
        }
      })
      return students;
  }


  getData() {
    return [
      {
        "id": 1,
        "name": "melita",
        "email": "melita@melita.com"
      }
    ]
  }

}

