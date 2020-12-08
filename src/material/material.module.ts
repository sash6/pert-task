import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';


import {
  MatButtonModule,
  MatToolbarModule, 
  MatIconModule,
  MatBadgeModule,
  MatSidenavModule,
  MatListModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatChipsModule,
  MatTooltipModule,
  MatTableModule,
  MatPaginatorModule,
  MatCardModule,
  MatMenuModule,
  MatDividerModule,
  MatButtonToggleModule,
  MatExpansionModule,
  MatRippleModule,
  MatStepperModule,
  MatCheckboxModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSlideToggleModule, 
  MatSortModule,
  MatTabsModule
} from '@angular/material';

const modules = [
  CommonModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatBadgeModule,
  MatListModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatChipsModule,
  MatTooltipModule,
  MatTableModule,
  MatPaginatorModule,
  MatMenuModule,
  MatDividerModule,
  MatButtonToggleModule,
  MatExpansionModule,
  MatRippleModule,
  MatStepperModule,
  MatCheckboxModule,
  DragDropModule,
  MatDialogModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSlideToggleModule, 
  MatSortModule,
  MatTabsModule
];

@NgModule({
  declarations: [],
  imports: [modules],
  exports: modules
})
export class MaterialModule { }
