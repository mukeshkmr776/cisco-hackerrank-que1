import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-Calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  inp1: number;
  inp2: number;
  result: number;
  symbol: string;
  count: number;

  ngOnInit() {
    this.symbol = '+';
    this.count = 0;
  }

  add() {
    this.result = this.inp1 + this.inp2;
    this.symbol = '+';
    console.log(this.result);
  }

  minus() {
    this.result = this.inp1 - this.inp2;
    this.symbol = '-';
    console.log(this.result);
  }

  divide() {
    this.result = this.inp1 / this.inp2;
    this.symbol = '/';
    console.log(this.result);
  }

  multiply() {
    this.result = this.inp1 * this.inp2;
    this.symbol = '*';
    console.log(this.result);
  }

  reset() {
    this.symbol = '+';
    this.inp1 = 0;
    this.inp2 = 0;
    this.count = 0;
  }

}
