import {customElements, Control, Module} from '@ijstech/components';

@customElements('i-pie-chart-module')
export class BarEchartModule extends Module{      
    constructor(parent?: Control, options?: any) {        
        super(parent, options);        
    }
    render(){
        var data = {
            title: {
              text: 'Referer of a Website',
              subtext: 'Fake Data',
              left: 'center'
            },
            tooltip: {
              trigger: 'item'
            },
            legend: {
              orient: 'vertical',
              left: 'left'
            },
            series: [
              {
                name: 'Access From',
                type: 'pie',
                radius: '50%',
                data: [
                  { value: 1048, name: 'Search Engine' },
                  { value: 735, name: 'Direct' },
                  { value: 580, name: 'Email' },
                  { value: 484, name: 'Union Ads' },
                  { value: 300, name: 'Video Ads' }
                ],
                emphasis: {
                  itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              }
            ]
        };
        var dataProp = JSON.stringify(data);
        return <i-pie-chart id="pieChart1" data={dataProp} top={1300} width={1000} height={600}></i-pie-chart>;
    }
}