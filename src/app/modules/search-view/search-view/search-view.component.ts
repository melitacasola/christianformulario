import { Component, OnInit, inject } from '@angular/core';

import { IStudent } from '../../../interfaces/istudent.interface';
import { ServiceDataService } from '../../../services/service-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrl: './search-view.component.css'
})
export class SearchViewComponent {

  searchedStudents: IStudent[] = [];
  // private studentService= inject(ServiceDataService);

  // onSearch(search: string): void {
  //   this.searchedStudents = this.studentService.getSearchItems(this.searchedStudents, search);
  // }

  private fb = inject(FormBuilder);

  myForm: FormGroup;

  constructor() {
    this.myForm = this.fb.group({
      searchString: ["", Validators.required]
    })
  }


  students: IStudent[] = [
    {
      "id": 1,
      "name": "Luca",
      "email": "luca@gmail.com",
      "gender": "male"
    },
    {
      "id": 2,
      "name": "Lilly",
      "email": "lilly@gmail.com",
      "gender": "female"
    },
    {
      "id": 3,
      "name": "Anna",
      "email": "anna@gmail.com",
      "gender": "female"
    },
    {
      "id": 4,
      "name": "John",
      "email": "john@gmail.com",
      "gender": "male"
    },
    {
      "id": 5,
      "name": "Mary",
      "email": "mary@gmail.com",
      "gender": "female"
    }
  ];


  searchStudents(search: string) {
    this.searchedStudents = ServiceDataService.getSearchItems(this.students, search);

  }
}
