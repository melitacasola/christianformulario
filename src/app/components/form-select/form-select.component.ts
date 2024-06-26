import { Component, OnInit, inject, Output, EventEmitter, Input } from '@angular/core';
import { ServiceDataService } from '../../services/service-data.service';
import { IStudent } from '../../interfaces/istudent.interface';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrl: './form-select.component.css'
})
export class FormSelectComponent{

  @Output() sendStudent : EventEmitter<string> = new EventEmitter();
  private fb = inject(FormBuilder);

  myForm:FormGroup;

constructor(){
  this.myForm = this.fb.group({
    searchString: new FormControl<string>("")
  })
}

// ngOnInit(){
//   console.log(this.myForm);
// }

  sendSearch(): void {
    if (this.myForm.valid) {
      this.sendStudent.emit(this.myForm.value.searchString);
    }
  }

}
