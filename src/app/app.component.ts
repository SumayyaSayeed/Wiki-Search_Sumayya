import { Component } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
 data:string = "";
results:any;
items:any;
gotdata=0;
displayedColumns:string[];
dataSource:string[10]; 

constructor(private searchService: SearchService){
     
}
search(){
    this.searchService.getGetResult(this.data)
    .subscribe(res =>{
      this.results = res;
      console.log(this.results.query.search);
      this.items=this.results.query.search;
      this.displayedColumns= ['title', 'snippet', 'wordcount'];
     this.dataSource = this.items;
     this.gotdata=1; 
    }) 
     
}
}
