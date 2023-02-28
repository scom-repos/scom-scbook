import {customElements, Control, Module} from '@ijstech/components';

@customElements('i-bar-negative-chart-module')
export class BarEchartModule extends Module{      
    constructor(parent?: Control, options?: any) {        
        super(parent, options);        
    }
    render(){
        var data = {
            title: {
              text: 'Bar Chart with Negative Value'
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            grid: {
              top: 80,
              bottom: 30
            },
            yAxis: {
              type: 'value',
              position: 'top',
              splitLine: {
                lineStyle: {
                  type: 'dashed'
                }
              }
            },
            xAxis: {
              type: 'category',
              axisLine: { show: false },
              axisLabel: { show: false },
              axisTick: { show: false },
              splitLine: { show: false },
              data: [
                'ten',
                'nine',
                'eight',
                'seven',
                'six',
                'five',
                'four',
                'three',
                'two',
                'one'
              ]
            },
            series: [
              {
                name: 'Cost',
                type: 'bar',
                stack: 'Total',
                label: {
                  show: true,
                  formatter: '{b}'
                },
                data: [
                  { value: -0.07 },
                  { value: -0.09 },
                  0.2,
                  0.44,
                  { value: -0.23 },
                  0.08,
                  { value: -0.17 },
                  0.47,
                  { value: -0.36 },
                  0.18
                ]
              }
            ]
        };
        var dataProp = JSON.stringify(data);
        return <i-bar-chart id="bar-chart-1" data={dataProp} top={4300} width={1000} height={600}></i-bar-chart>;
    }
}