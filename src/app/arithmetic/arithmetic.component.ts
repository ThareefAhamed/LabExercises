import { Component } from '@angular/core';

@Component({
  selector: 'app-arithmetic',
  templateUrl: './arithmetic.component.html',
  styleUrls: ['./arithmetic.component.css']
})
export class ArithmeticComponent {
  fnum: any;
  snum: any;
  res: any;
  add() {
    this.res = this.fnum + this.snum;
  }
  sub() {
    this.res = this.fnum - this.snum;
  }
  mul() {
    this.res = this.fnum * this.snum;
  }
  div() {
    this.res = this.fnum / this.snum;
  }
  mod() {
    this.res = this.fnum % this.snum;
  }

}
