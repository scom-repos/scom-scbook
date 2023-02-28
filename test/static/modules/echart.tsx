import {customElements, Control, Module} from '@ijstech/components';

@customElements('i-line-chart-module')
export class EchartModule extends Module{      
    constructor(parent?: Control, options?: any) {        
        super(parent, options);        
    }
    render(){
        var data = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                data: [10, 230, 224, 218, 135, 147, 260],
                type: 'line'
                }
            ]
        };
        var dataProp = JSON.stringify(data);
        return <i-line-chart id="LineChart1" data={dataProp} top={40} width={1000} height={600}></i-line-chart>;
    }
}