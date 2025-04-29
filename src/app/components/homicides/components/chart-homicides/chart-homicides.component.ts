import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import { BarChart } from 'echarts/charts';
import { GridComponent } from 'echarts/components';
import { SVGRenderer } from 'echarts/renderers';
import { EChartsOption } from 'echarts/types/dist/shared';
echarts.use([
  BarChart,
  GridComponent,
  SVGRenderer
]);

@Component({
  selector: 'app-chart-homicides',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './chart-homicides.component.html',
  styleUrl: './chart-homicides.component.scss',
  providers: [
    provideEchartsCore({echarts})
  ]
})
export class ChartHomicidesComponent implements AfterViewInit {
  @ViewChild('chartContainer') chartContainer!: ElementRef;
  chart: echarts.ECharts | undefined;

  ngAfterViewInit(): void {
    this.initChart();
  }

  initChart(): void {
    this.chart = echarts.init(this.chartContainer.nativeElement);

    const options: EChartsOption = {
      xAxis: {
        type: 'category',
        data: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'
        }
      ]
    };

    this.chart.setOption(options);
  }

}
