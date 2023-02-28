import {customElements, Control, Module} from '@ijstech/components';

@customElements('i-radio-module')
export class RadioModule extends Module{        
    constructor(parent?: Control, options?: any) {        
        super(parent, options);        
    }
    
    render(){
        return <i-panel left={40} top={40}>
                <i-radio top={20} left={50} id='111' name='test' value='1' caption='abc1' checked={true}></i-radio>
                <i-radio top={20} left={150} id='112' name='test' value='2' caption='abc2' checked={false}></i-radio>
                <i-radio top={20} left={300} id='113' name='test' value='3' caption='abc3' checked={false}></i-radio>
            </i-panel>
    }
}