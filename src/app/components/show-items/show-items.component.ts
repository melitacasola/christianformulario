import { Component, Input } from '@angular/core';
import { IStudent } from '../../interfaces/istudent.interface';

@Component({
  selector: 'app-show-items',
  templateUrl: './show-items.component.html',

})
export class ShowItemsComponent {

@Input() students : IStudent[] | undefined;

}
