import { Component, OnInit } from '@angular/core';

declare var Chart:any;

@Component({
  templateUrl: '/app/home.component.html'
})
export class HomeComponent  {
}
/*import { Component, OnInit } from '@angular/core';

declare var Chart:any;

@Component({
  styles: [`
    .chart {
      display: block;
    }
  `],
  template: `
    <base-chart
      class="chart"
      [datasets]="datasets"
      [labels]="labels"
      [options]="options"
      [chartType]="'line'">
    </base-chart>

  `
})
export class HomeComponent  {
 private datasets = [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3]
    }
  ];

  private labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];

  private options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };
}*/
