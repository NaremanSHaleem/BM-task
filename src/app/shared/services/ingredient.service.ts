import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  ingredient;
  result;
  constructor() { }

  setIngredient(ing: any[]) {
    this.ingredient = ing;

  }

  getIngredient() {
    return this.ingredient;
  }

  setResult(res: any) {
    this.result = res;
  }

  getResult() {
    return this.result;
  }

}
