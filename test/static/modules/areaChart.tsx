import {customElements, Control, Module} from '@ijstech/components';

@customElements('i-area-chart-module')
export class areaChartModule extends Module{      
    constructor(parent?: Control, options?: any) {        
        super(parent, options);        
    }
    render(){
        var data = {
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
              type: 'value'
            },
            series: [
              {
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                areaStyle: {}
              }
            ]
        };
        var dataProp = JSON.stringify(data);
        return <i-line-chart id="area-chart-1" data={dataProp} top={3600} width={1000} height={600}></i-line-chart>;
    }
}