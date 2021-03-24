import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AnalyseService } from 'src/app/shared/services/analyse.service';
import { IngredientService } from 'src/app/shared/services/ingredient.service';
import { Ingredient } from 'src/app/shared/utilities/ingredient';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.scss']
})
export class IngredientListComponent implements OnInit {

  @ViewChild('resultContainer') resultContainer: ElementRef;
  ingredients: Ingredient[] = [];
  ingredientsObj;
  result;
  showResult = false;
  totalNutritioItems = [
    'FAT',
    'CHOLE',
    'NA',
    'FIBTG',
    'SUGAR',
    'PROCNT',
    'VITA_RAE',
    'CA',
    'FE',
    'K',
  ];
  totalNutrients;
  loading = false;
  constructor(
    private ingredientService: IngredientService,
    private analyseService: AnalyseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.ingredientsObj = this.ingredientService.getIngredient();

    if (this.ingredientsObj == undefined) {
      this.router.navigateByUrl('');
    } else { this.mapIngredients(); }
  }

  ngAfterViewChecked() {
    if (this.showResult == true) {
      this.resultContainer.nativeElement.scrollIntoView({ behavior: 'smooth', block: "start" });
    }
  }

  mapIngredients() {
    for (let index = 0; index < this.ingredientsObj.length; index++) {
      let ingr_quantity = this.ingredientsObj[index].substr(0, this.ingredientsObj[index].indexOf(' '));
      let ingr_foodname = (this.ingredientsObj[index].substr(this.ingredientsObj[index].indexOf(' ') + 1)).split(',')[0];
      let ingr_unit = (this.ingredientsObj[index].substr(this.ingredientsObj[index].indexOf(' ') + 1)).split(',')[1];
      this.ingredients.push(
        {
          quantity: ingr_quantity,
          foodName: ingr_foodname,
          unit: ingr_unit
        }
      );
    }
  }

  async getTotalNutrition() {
    this.loading = true;
    await this.analyseService.analyse(this.ingredientsObj).subscribe(
      response => {
        this.loading = false;
        this.ingredientService.setResult(response);
        this.result = response;
        this.showResult = true;
        this.totalNutrients = this.mapResults();
      },
      error => { alert(error) }
    );
  }

  mapResults() {
    let totalItems = [];
    this.totalNutritioItems.forEach(el => {
      totalItems.push(
        this.result['totalNutrients'][el]
      )
    })
    return totalItems
  }

}
