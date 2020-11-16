import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-Calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  inp1 = new FormControl('');
  inp2 = new FormControl('');
  result = new FormControl('');
  symbol: string;
  count: number;


  ngOnInit() {
    this.symbol = '+';
    this.count = 0;
  }

  add() {
    this.result.setValue(this.inp1.value + this.inp2.value);
    this.symbol = '+';
    this.count += 1;
  }

  minus() {
    this.result.setValue(this.inp1.value - this.inp2.value);
    this.symbol = '-';
    this.count += 1;
  }

  divide() {
    this.result.setValue(this.inp1.value / this.inp2.value);
    this.symbol = '/';
    this.count += 1;
  }

  multiply() {
    this.result.setValue(this.inp1.value * this.inp2.value);
    this.symbol = '*';
    this.count += 1;
  }

  reset() {
    this.symbol = '+';
    this.inp1.reset();
    this.inp2.reset();
    this.result.reset();
  }



}
