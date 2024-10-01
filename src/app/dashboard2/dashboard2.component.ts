import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from "@angular/cdk/layout";
import {map} from "rxjs/operators";
import {Observable, Subject} from "rxjs";

import { ChartConfiguration, ChartOptions } from "chart.js";

interface ChartLayout {
  columns: number;
  chart: { columnSpan: number, rowSpan: number };
}
@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css']
})
export class Dashboard2Component implements OnInit {
  chartWidth = '350'; 
  chartHeight = '350';
  chartLayout!:Observable<ChartLayout>;

  /**Line chart */

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July'
    ],
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40 ],
        label: 'Series A',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio:false
  };
  public lineChartLegend = true;



  /**Pie chart */
    public pieChartOptions: ChartOptions<'pie'> = {
      responsive: true,
      maintainAspectRatio:false
    };
    public pieChartLabels = ['Download', 'In Store', 'Mail Sales'];

    public pieChartDatasets = [ {
      data: [ 300, 500, 100 ]
    } ];
    public pieChartLegend = true;
    public pieChartPlugins = [];

    /**bar chart */
    public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    maintainAspectRatio:false
  };


  constructor(private breakpointObserver:BreakpointObserver) { 

  }

  ngOnInit(): void {
    this.chartLayout = this.breakpointObserver.observe([
      Breakpoints.HandsetPortrait,
      Breakpoints.HandsetLandscape,
      Breakpoints.TabletPortrait,
      Breakpoints.TabletLandscape,
      Breakpoints.WebPortrait,
      Breakpoints.WebLandscape
    ]).pipe(
      map((state: BreakpointState) => {
        if (state.breakpoints[Breakpoints.HandsetPortrait]) {
          this.chartWidth = '250';
          this.chartHeight = '250';
          return {
            columns: 12,
            chart: { columnSpan: 12, rowSpan: 2 }
          };
        } else if (state.breakpoints[Breakpoints.HandsetLandscape]) {
          this.chartWidth = '300';
          this.chartHeight = '300';
          return {
            columns: 12,
            chart: { columnSpan: 12, rowSpan: 2 }
          };
        } else if (state.breakpoints[Breakpoints.TabletPortrait]) {
          this.chartWidth = '400';
          this.chartHeight = '400';
          return {
            columns: 12,
            chart: { columnSpan: 6, rowSpan: 2 }
          };
        } else if (state.breakpoints[Breakpoints.TabletLandscape]) {
          this.chartWidth = '400';
          this.chartHeight = '400';
          return {
            columns: 12,
            chart: { columnSpan: 6, rowSpan: 2 }
          };
        } else if (state.breakpoints[Breakpoints.WebPortrait]) {
          this.chartWidth = '400';
          this.chartHeight = '400';
          return {
            columns: 12,
            chart: { columnSpan: 6, rowSpan: 2 }
          };
        } else if (state.breakpoints[Breakpoints.WebLandscape]) {
          this.chartWidth = '400';
          this.chartHeight = '400';
          return {
            columns: 12,
            chart: { columnSpan: 6, rowSpan: 2 }
          };
        }

        // Default fallback
        this.chartWidth = '350';
        this.chartHeight = '350';
        return {
          columns: 12,
          chart: { columnSpan: 6, rowSpan: 2 }
        };
      })
    );

  
  }

}
