import { Component } from '@angular/core';

@Component({
  selector: 'app-name-sorting',
  templateUrl: './name-sorting.component.html',
  styleUrls: ['./name-sorting.component.css']
})
export class NameSortingComponent {
  names:string="";
  sortedNames:string[] = [];
  desSortedNames:string[] = [];
  sort(){
    this.sortedNames = this.names.split(",").sort();
    this.desSortedNames = this.names.split(",").sort().reverse();
  }
  clear(){
    this.sortedNames=[];
    this.desSortedNames=[];
    this.names="";
  }

}
