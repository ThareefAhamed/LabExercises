import { Component } from '@angular/core';

@Component({
  selector: 'app-thumbs-demo',
  templateUrl: './thumbs-demo.component.html',
  styleUrls: ['./thumbs-demo.component.css']
})
export class ThumbsDemoComponent {
  changeImg(){
    var img = document.getElementById("thumbsImg") as HTMLImageElement;
    img.style.transform= 'rotate(180deg)';
  }

}
