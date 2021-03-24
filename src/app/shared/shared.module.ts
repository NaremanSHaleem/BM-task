import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IngredientService } from './services/ingredient.service';
import { AnalyseService } from './services/analyse.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    NavbarComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [SharedComponent, NavbarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers:[]
})
export class SharedModule { }
