import {customElements, Control, Module} from '@ijstech/components';

@customElements('i-frame-module')
export class IframeModule extends Module{        
    constructor(parent?: Control, options?: any) {        
        super(parent, options);        
    }
    
    render(){
        return <i-panel left={40} top={40}>
                <i-iframe width="700" height="500" top={150} left={20} url="https://www.youtube.com/embed/tgbNymZ7vqY" ></i-iframe>
            </i-panel>
    }
}