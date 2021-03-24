import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyseComponent } from './analyse/analyse.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';

const routes: Routes = [
  {path:'', component: AnalyseComponent},
  {path:'ingredients', component: IngredientListComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [AnalyseComponent,IngredientListComponent]
})
export class NutritionAnalysisModule { }
