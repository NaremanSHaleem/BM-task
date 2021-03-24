import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnalyseService {

  baseURL = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }

   analyse(ingredients) {
    let ingr = ingredients;
    let body =  {"ingr": [
"1, fresh ham, about 18 pounds, prepared by your butcher (See Step 1)",
"7, cloves garlic, minced",
"1, tablespoon caraway seeds, crushed",
"4 ,teaspoons salt",
",Freshly ground pepper to taste",
"1, teaspoon olive oil",
"1 ,medium onion, peeled and chopped",
"3, cups sourdough rye bread, cut into 1/2-inch cubes",
",1/4 cups coarsely chopped pitted prunes",
" ,1/4 cups coarsely chopped dried apricots",
"1 ,large tart apple, peeled, cored and cut into 1/2-inch cubes",
"2 ,teaspoons chopped fresh rosemary",
"1 ,egg, lightly beaten",
"1 ,cup chicken broth, homemade or low-sodium canned"
  ]
  }
    const uri = "/nutrition-details";
     return this.httpClient.post(this.baseURL + uri,{ingr: ingr});
  }
}
