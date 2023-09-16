import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-histogram-charts',
  templateUrl: './histogram-charts.component.html',
  styleUrls: ['./histogram-charts.component.css']
})
export class HistogramChartsComponent implements OnInit {


  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['Catégorie 1', 'Catégorie 2', 'Catégorie 3'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    { data: [12, 19, 3], label: 'Exemple d\'histogramme' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
