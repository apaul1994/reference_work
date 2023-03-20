import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit{
  ngOnInit(): void {
    let dataY = [190, 1000, 3, 500, 2, 600,900];
    let dataX = [0,1,2,3,4,5,6];
    let sum = dataY.reduce((a,b)=>a+b);
    let avg = sum/dataY.length;
    // let avgPlot = dataY.map(a=>avg);
    let pointAvg = dataY.map(a=>'transparent')
    let point = dataY.map(a=>'black')
    let sumX = dataX.reduce((a,b)=>a+b)
    let sumXX = dataX.reduce((a,b)=>a*a+b*b)
    let sumY = dataY.reduce((a,b)=>a+b)
    let sumYY = dataY.reduce((a,b)=>a*a+b*b)
    let XY = dataX.map((x,index)=>{return dataY[index]*x});
    let sumXY = XY.reduce((a,b)=>a+b)
    let n = dataY.length
    let slop = (n * sumXY - sumX * sumY)/(n*sumXX -sumX*sumX);
    let intercept = (sumY - slop*sumX)/n;

    // let xDash = [0,0];
    // let yDash = [0,0];
    // xDash[0]=dataX[0];
    // xDash[1]=dataX[n-1];
    // yDash[0]= intercept;
    // yDash[1] = (xDash[1]*slop)+intercept;
    // pointAvg = xDash.map(a=>'transparent')

    let avgPlot = dataX.map((a)=>{return (a*slop+1)*intercept});
    console.log(avgPlot)

    
    var ctx = document.getElementById('myChart');
var myChart = new Chart("okCanvas2", {
    type: 'line',
    data: {
        labels: dataX,
        datasets: [{
            data: dataY,
            backgroundColor: [
                'transparent'
            ],
            borderColor: [
                'black'
            ],
            pointBorderColor:point,
            lineTension:0,
            borderWidth: 1
        },
        {
          data: avgPlot,
            backgroundColor: [
                'transparent'
            ],
            borderColor: [
                'red'
            ],
            pointBackgroundColor:pointAvg,
            pointBorderColor:pointAvg,
            borderDash:[6,6],
            lineTension:0,
            borderWidth: 1
        }
      ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
  }

}
