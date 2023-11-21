import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion'; 
import { MatChipsModule } from '@angular/material/chips'; 
import { MatSlideToggleModule } from '@angular/material/slide-toggle'; 
import { MatDialogModule } from '@angular/material/dialog';
import { MatBadgeModule } from '@angular/material/badge';

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatGridListModule,
  MatCardModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatFormFieldModule, 
  MatSelectModule,
  MatInputModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatChipsModule,
  MatSlideToggleModule,
  MatDialogModule,
  MatBadgeModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [ ...MATERIAL_MODULES ],
})
export class MaterialModule { }