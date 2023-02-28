import {customElements, Control, Form} from '@ijstech/components';

@customElements('i-count-module')
export class CounterModule extends Form {        
    constructor(parent?: Control, options?: any) {        
        super(parent, {
            width: 800,
            height: 600,
        });       
    }
    
    render(){
        return <i-panel left={40} top={40}>
                <i-count-down title="hello 1" link="#" left={40} top={40} width={400} height={200} value={500} ></i-count-down>
                <i-count-down title="hello 2" left={500} top={40} width={400} height={200} value={1000} ></i-count-down>
                <i-count-down title="hello 3" link="#" left={40} top={300} width={400} height={200} value={10000} ></i-count-down>
                <i-count-down title="hello 4" left={500} top={300} width={400} height={200} value={100} ></i-count-down>
            </i-panel>
    }
}