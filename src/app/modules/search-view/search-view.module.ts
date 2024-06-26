import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchViewRoutingModule } from './search-view-routing.module';
import { SearchViewComponent } from './search-view/search-view.component';
import { FormSelectComponent } from '../../components/form-select/form-select.component';
import { ShowItemsComponent } from '../../components/show-items/show-items.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SearchViewComponent,
    FormSelectComponent,
    ShowItemsComponent
  ],
  imports: [
    CommonModule,
    SearchViewRoutingModule,
    ReactiveFormsModule

  ]
})
export class SearchViewModule { }
