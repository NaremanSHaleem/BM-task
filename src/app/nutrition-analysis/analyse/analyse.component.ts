import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IngredientService } from 'src/app/shared/services/ingredient.service';
import { Ingredient } from 'src/app/shared/utilities/ingredient';

@Component({
  selector: 'app-analyse',
  templateUrl: './analyse.component.html',
  styleUrls: ['./analyse.component.scss']
})
export class AnalyseComponent implements OnInit {

  analyseForm;
  constructor(
    private router: Router,
    private ingredientService: IngredientService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.analyseForm = new FormGroup({
      ingredients: new FormControl(`1 fresh ham, prepared by your butcher (See Step 1)
7 cloves garlic, minced
1 tablespoon caraway seeds, crushed
4 teaspoons salt
- Freshly ground pepper to taste
1 teaspoon olive oil
1 medium onion, peeled and chopped
3 cups sourdough rye bread, cut into 1/2-inch cubes
1/4 cups coarsely chopped pitted prunes
1/4 cups coarsely chopped dried apricots
1 large tart apple, peeled and cored and cut into 1/2-inch cubes
2 teaspoons chopped fresh rosemary
1 egg, lightly beaten
1 cup chicken broth, homemade or low-sodium canned`, [Validators.required])
    });
  }

  async onSubmit() {
    let ing = this.analyseForm.controls.ingredients.value;
    let ingArr = [];
    ingArr.push(...ing.split(/\n/g));
    ingArr.forEach(item => { item.replace(/\s/g, "") })
    await this.ingredientService.setIngredient(ingArr);
    this.router.navigate(['analysis/ingredients']);
  }

}
