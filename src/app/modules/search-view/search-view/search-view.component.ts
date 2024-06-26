import { Component, OnInit, inject } from '@angular/core';

import { IStudent } from '../../../interfaces/istudent.interface';
import { ServiceDataService } from '../../../services/service-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrl: './search-view.component.css'
})
export class SearchViewComponent{

  searchedStudents: IStudent[] = [];

  studentService = inject(ServiceDataService);

  reciveSearch(search: string): void {
    this.searchedStudents = this.studentService.searchStudents(search);
  }

  // students: IStudent[] = [
  //   {
  //     "id": 1,
  //     "name": "Luca",
  //     "email": "luca@gmail.com",
  //     "gender": "male"
  //   },
  //   {
  //     "id": 2,
  //     "name": "Lilly",
  //     "email": "lilly@gmail.com",
  //     "gender": "female"
  //   },
  //   {
  //     "id": 3,
  //     "name": "Anna",
  //     "email": "anna@gmail.com",
  //     "gender": "female"
  //   },
  //   {
  //     "id": 4,
  //     "name": "John",
  //     "email": "john@gmail.com",
  //     "gender": "male"
  //   },
  //   {
  //     "id": 5,
  //     "name": "Mary",
  //     "email": "mary@gmail.com",
  //     "gender": "female"
  //   }
  // ];


}
