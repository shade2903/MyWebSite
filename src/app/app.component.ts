import { Component } from '@angular/core';
import { APIService } from 'src/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public categories: any [] = [];
  public recipies: any [] = [];

   constructor(private apiService: APIService){
     this.loadCategories();
     
   }
  
   async loadCategories(){
     this.categories = await this.apiService.getCategories() as any[];
     console.log(this.categories);
   }
   async loadRecepies(catId: number){
      this.recipies = await this.apiService.getRecipes(catId) as any[];
      console.log(this.recipies)

   }
}
