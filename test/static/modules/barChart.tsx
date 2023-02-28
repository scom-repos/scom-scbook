import {customElements, Control, Module} from '@ijstech/components';

@customElements('i-bar-chart-module')
export class BarEchartModule extends Module{      
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
                type: 'bar'
                }
            ]
        };
        var dataProp = JSON.stringify(data);
        return <i-bar-chart id="LineChart1" data={dataProp} top={650} width={1000} height={600}></i-bar-chart>;
    }
}