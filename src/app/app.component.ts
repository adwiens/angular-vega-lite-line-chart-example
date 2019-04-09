import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { range, random } from 'lodash';

import { lineChart, Point2D } from './chart';

const values: Point2D[][] = range(100).map(x => [{ x, y: x + random(50) }, { x, y: x + random(50) }]);
const series: string[] = ['thing1', 'thing2'];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('graph') graph: ElementRef;
  ngAfterViewInit() {
    lineChart(this.graph.nativeElement, { values, series });
  }
}
