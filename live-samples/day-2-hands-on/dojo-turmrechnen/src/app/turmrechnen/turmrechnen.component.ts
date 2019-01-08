import { Component, OnInit } from '@angular/core';
import { ITurmrechnenResult } from './turmrechnen-result';
import { EnumThingy } from './enumtest';

type DirectionType =
  | 'Northfsd'
  | 'East'
  | 'South'
  | 'West';

type NumberTypeTest =
  | 1
  | 2
  | 3
  | 4;


@Component({
  selector: 'app-turmrechnen',
  templateUrl: './turmrechnen.component.html',
  styleUrls: ['./turmrechnen.component.css']
})
export class TurmrechnenComponent implements OnInit {

  public startValue = 4;
  public height = 5;
  public calcResult: any;

  public direction: DirectionType;
  public numberEnum: NumberTypeTest;

  private classicEnum: EnumThingy;

  constructor() {
    this.classicEnum = 4;

    this.classicEnum = 6;

    // this.direction = 'North';
  }

  ngOnInit() {
  }

  public calculate() {
    this.calcResult = [];
    let lastResult = this.startValue;
    for (let count = 2; count <= this.height; count++) {
      const result = <ITurmrechnenResult>{
        left: lastResult,
        operation: '*',
        middle: count,
        right: lastResult * count
      };
      this.calcResult.push(result);
      lastResult = result.right;
    }
    for (let count = 2; count <= this.height; count++) {
      const result = {
        left: lastResult,
        operation: '/',
        middle: count,
        right: lastResult / count
      };
      this.calcResult.push(result);
      lastResult = result.right;
    }
  }
}


