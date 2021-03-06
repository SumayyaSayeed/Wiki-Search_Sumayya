import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';


//separate module for angular material

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatInputModule
  ],
  exports :[
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatInputModule
  ]
})
export class MaterialModule { }
