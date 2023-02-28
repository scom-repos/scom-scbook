import {application, customElements, Module, Panel, observable, Styles} from '@ijstech/components';

@customElements('i-launcher')
export class Launcher extends Module{
    private pnlMain: Panel;
    private modules: {[modulePath: string]: Module} = {};
    async handleLoadModule(){
        let module = await this.loadModule('./module1.js');        
        if (module)
            this.pnlMain.append(module)
    }
    async loadModule(modulePath: string): Promise<Module|null>{
        if (this.modules[modulePath])
            return this.modules[modulePath];
        return await application.newModule(modulePath);
    }
    render(): any {
        return <i-panel>
            <i-button caption='Load Module' onClick={this.handleLoadModule}></i-button>
            <i-panel id="pnlMain"></i-panel>
        </i-panel>
    }
}