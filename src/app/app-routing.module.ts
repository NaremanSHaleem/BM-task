import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'analysis'},
  {
    path: '', component: NavbarComponent,
    children: [
      {
        path: 'analysis',
        loadChildren: () => import('./nutrition-analysis/nutrition-analysis.module').then(m => m.NutritionAnalysisModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
