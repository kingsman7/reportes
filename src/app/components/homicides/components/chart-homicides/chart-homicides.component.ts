import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, inject, ViewChild, OnInit } from '@angular/core';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import { BarChart } from 'echarts/charts';
import { GridComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { EChartsOption } from 'echarts/types/dist/shared';
import { HttpClient } from '@angular/common/http';
echarts.use([
  BarChart,
  GridComponent,
  CanvasRenderer
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
export class ChartHomicidesComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
    this.dataSort();
  }
  @ViewChild('chartContainer') chartContainer!: ElementRef;
  chart!: echarts.ECharts;
  isLoad: boolean = false;
  private http = inject(HttpClient);

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isLoad = true;
      this.initChart();

    }, 2000)
  }
  data = [
    { name: 'Amazonas', value: Math.round(Math.random() * 1000000) },
    { name: 'Anzoátegui', value: Math.round(Math.random() * 1000000) },
    { name: 'Apure', value: Math.round(Math.random() * 1000000) },
    { name: 'Aragua', value: Math.round(Math.random() * 1000000) },
    { name: 'Barinas', value: Math.round(Math.random() * 1000000) },
    { name: 'Bolívar', value: Math.round(Math.random() * 1000000) },
    { name: 'Carabobo', value: Math.round(Math.random() * 1000000) },
    { name: 'Cojedes', value: Math.round(Math.random() * 1000000) },
    { name: 'Delta Amacuro', value: Math.round(Math.random() * 1000000) },
    { name: 'Falcón', value: Math.round(Math.random() * 1000000) },
    { name: 'Guárico', value: Math.round(Math.random() * 1000000) },
    { name: 'Lara', value: Math.round(Math.random() * 1000000) },
    { name: 'Mérida', value: Math.round(Math.random() * 1000000) },
    { name: 'Miranda', value: Math.round(Math.random() * 1000000) },
    { name: 'Monagas', value: Math.round(Math.random() * 1000000) },
    { name: 'Nueva Esparta', value: Math.round(Math.random() * 1000000) },
    { name: 'Portuguesa', value: Math.round(Math.random() * 1000000) },
    { name: 'Sucre', value: Math.round(Math.random() * 1000000) },
    { name: 'Táchira', value: Math.round(Math.random() * 1000000) },
    { name: 'Trujillo', value: Math.round(Math.random() * 1000000) },
    { name: 'Yaracuy', value: Math.round(Math.random() * 1000000) },
    { name: 'Zulia', value: Math.round(Math.random() * 1000000) },
    { name: 'Distrito Capital', value: Math.round(Math.random() * 1000000) },
    { name: 'Dependencias Federales', value: Math.round(Math.random() * 1000000) },
  ];

  dataSort() {
    this.data.sort((a, b) => {
      return a.value - b.value;
    })
  }

  initChart(): void {
    this.chart = echarts.init(this.chartContainer.nativeElement);
    this.initMap();
    const mapOption: EChartsOption = {
      visualMap: {
        left: 'right',
        min: 500000,
        max: 38000000,
        inRange: {
          // prettier-ignore
          color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
        },
        text: ['High', 'Low'],
        calculable: true
      },
      series: [
        {
          id: 'population',
          type: 'map',
          roam: true,
          map: 'USA',
          animationDurationUpdate: 1000,
          universalTransition: true,
          data: this.data
        }
      ]
    };

    const optionsBar: EChartsOption = {
      xAxis: {
        type: 'value'
      },
      yAxis: {
        type: 'category',
        axisLabel: {
          rotate: 30
        },
        data: this.data.map(function (item) {
          return item.name;
        })
      },
      animationDurationUpdate: 1000,
      series: {
        type: 'bar',
        id: 'population',
        data: this.data.map(function (item) {
          return item.value;
        }),
        universalTransition: true
      }
    };

    let currentOption = mapOption;

    this.chart.setOption(mapOption);

    setInterval( () => {
      currentOption = currentOption === mapOption ? optionsBar : mapOption;
      this.chart.setOption(currentOption, true);
    }, 5000);

  }
  initMap() {
    this.http.get('assets/geoVenezuela.json').subscribe((usaJson: any) => {
      echarts.registerMap('USA', usaJson, {
        Alaska: {
          // 把阿拉斯加移到美国主大陆左下方
          left: -131,
          top: 25,
          width: 15
        },
        Hawaii: {
          left: -110, // 夏威夷
          top: 28,
          width: 5
        },
        'Puerto Rico': {
          // 波多黎各
          left: -76,
          top: 26,
          width: 2
        }
      });

    })
  }

}
