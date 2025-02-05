import { Component } from '@angular/core';

@Component({
  selector: 'app-thumbs-demo',
  templateUrl: './thumbs-demo.component.html',
  styleUrls: ['./thumbs-demo.component.css']
})
export class ThumbsDemoComponent {
  changeImg() {
    var img = document.getElementById("thumbsImg") as HTMLImageElement;
    if (img.style.transform === 'rotate(180deg)') {
      img.style.transform = 'rotate(0deg)';
    }
    else {
      img.style.transform = 'rotate(180deg)';
    }
  }

}
