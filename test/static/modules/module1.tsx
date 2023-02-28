import {customModule, customElements, Control, Input, Button, Module, observable, Styles, Checkbox, CheckboxGroup} from '@ijstech/components';

const options = ['Option 1', 'Option 2', 'Option 3'];

@customModule
@customElements('i-module1')
export class Module1 extends Module{    
    private edit1: Input;
    private button1: Button;
    private button3: Button;
    private btnChangeTheme: Button;
    private checkbox1: Checkbox;
    private checkbox2: Checkbox;
    private checkgroup1: CheckboxGroup;
    private checkboxAll: Checkbox;
    private checkboxGroup: CheckboxGroup;

    @observable()
    private store = {
        address: {
            city: 'hk',
            region: 'shatin'
        }
    }
    button1Click(target: Control){                
        this.edit1.value = 'hello';
    }
    button2Click(target: Control, event: Event){
        this.store.address.city = this.edit1.value;
    }
    button3Click(target: Control, event: Event){
        this.button3.caption = this.button1.enabled?'Disable':'Enable';        
        this.button1.enabled = !this.button1.enabled;
    }
    btnChangeThemeClick(target: Control, Event: Event){
        if (this.btnChangeTheme.data == 1){
            this.btnChangeTheme.data = 0;
            Styles.Theme.applyTheme(Styles.Theme.defaultTheme)
            this.btnChangeTheme.caption = 'Dark Theme'
        }
        else{
            this.btnChangeTheme.data = 1
            Styles.Theme.applyTheme(Styles.Theme.darkTheme);
            this.btnChangeTheme.caption = 'Default Theme';
        }
    }
    handleOnChange(source: Control, value: any){
        console.dir('handleOnChange', value)
        console.dir(source)
        console.dir(value);
    }
    handleCheckAll(source: Control, value: any) {
        const data = value ? options : [];
        this.checkboxGroup.values = JSON.stringify(data);
        this.checkboxAll.indeterminate = false;
    }
    handleCheckGroup(source: Control, value: any) {
        const checkedCount = JSON.parse(value).length;
        this.checkboxAll.value = checkedCount === options.length;
        this.checkboxAll.indeterminate = checkedCount > 0 && checkedCount < options.length;
    }
    render(){                
        return <i-panel left={40} top={40}>
                <i-icon  top={10} width={16} height={16} name="pen" fill="blue"></i-icon>
                <i-label id="label1" top={10} left={20} caption={this.edit1.value}></i-label>
                <i-label id="label2" top={10} left={100} width={120} caption={this.store.address.city}></i-label>
                <i-input id="edit1" top={30} width={140} height={25} caption="Edit1" value="test"></i-input>
                <i-button id="button1" icon="pen" top={60} width={80} caption='Hello' onClick={this.button1Click}></i-button>
                <i-button id="button2" icon="address-book" top={60} left={100}  width={80} caption='Address' onClick={this.button2Click}></i-button>
                <i-button id="button3" top={60} left={200}  width={80} caption='Disable' onClick={this.button3Click}></i-button>
                <i-button id="btnChangeTheme" top={60} left={300}  width={120} caption='Dark Theme' onClick={this.btnChangeThemeClick}></i-button>
                <i-image top={90} url="https://via.placeholder.com/50"></i-image>
                <i-image top={90} left={100} rotate={45} url="https://via.placeholder.com/50"></i-image>
                <i-tree-view top={150} width={400} height={200}>
                    <i-tree-view-node caption="Level 0, Node 1">
                        <i-tree-view-node caption="Level 1, Node 1">
                            <i-tree-view-node caption="Level 2, Node 1"></i-tree-view-node>
                            <i-tree-view-node caption="Level 2, Node 1"></i-tree-view-node>
                        </i-tree-view-node>
                        <i-tree-view-node caption="Level 1, Node 1"></i-tree-view-node>
                    </i-tree-view-node>
                    <i-tree-view-node caption="Level 0, Node 2">
                        <i-tree-view-node caption="Level 1, Node 1"></i-tree-view-node>
                        <i-tree-view-node caption="Level 1, Node 1"></i-tree-view-node>
                    </i-tree-view-node>
                </i-tree-view>
                <i-tabs class='tab-justified' left={435} activePageIndex={0}>
                    <i-tab caption='Home' tabSheetId='home'></i-tab>
                    <i-tab caption='Profile' tabSheetId='profile'></i-tab>
                    <i-tab caption='Contact' tabSheetId='contact'></i-tab>
                    <i-tab caption='Disabled' tabSheetId='test' enabled={false}></i-tab>
                    <i-tab-sheet id='home'>
                        <i-label id="label1" caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."></i-label>
                    </i-tab-sheet>
                    <i-tab-sheet id='profile'>
                        <i-label id="label1" caption="Name: "></i-label>
                    </i-tab-sheet>
                    <i-tab-sheet id='contact'>
                        <i-label id="label1" caption="Phone Num: XXXX-XXXX"></i-label>
                    </i-tab-sheet>
                    <i-tab-sheet id='test'></i-tab-sheet>
                </i-tabs>
                <i-tabs class='tab-justified' left={1050} activePageIndex={0} vertical={true}>
                    <i-tab caption='Home' tabSheetId='home'></i-tab>
                    <i-tab caption='Profile' tabSheetId='profile'></i-tab>
                    <i-tab caption='Contact' tabSheetId='contact'></i-tab>
                    <i-tab caption='Disabled' tabSheetId='test' enabled={false}></i-tab>
                    <i-tab-sheet id='home'>
                        <i-label id="label1" caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."></i-label>
                    </i-tab-sheet>
                    <i-tab-sheet id='profile'>
                        <i-label id="label1" caption="Name: "></i-label>
                    </i-tab-sheet>
                    <i-tab-sheet id='contact'>
                        <i-label id="label1" caption="Phone Num: XXXX-XXXX"></i-label>
                    </i-tab-sheet>
                    <i-tab-sheet id='test'></i-tab-sheet>
                </i-tabs>
                {/* <i-label top={200} left={0} caption={"Checkbox 1: "}></i-label> */}
                {/* <i-label top={200} left={100} caption={this.checkbox1.value}></i-label> */}
                <i-checkbox id="checkbox1" top={220} captionWidth={120} height={25} value="true" caption="Checkbox title" />
                {/* <i-label top={250} left={0} caption={"Checkbox 2: "}></i-label> */}
                {/* <i-label top={250} left={100} caption={this.checkbox2.value}></i-label> */}
                <i-checkbox id="checkbox2" top={250} captionWidth={120} height={25} value="false" checked={true} enabled={false} caption="Checkbox title 1" />
                
                <i-label top={300} caption={this.checkgroup1.values}></i-label>
                <i-checkbox-group id="checkgroup1" top={320} values={JSON.stringify([])} width={300}>
                    <i-checkbox checked={true} caption="Option 1" />
                    <i-checkbox caption="Option 2" />
                </i-checkbox-group>

                <i-checkbox id="checkboxAll" top={350} value="false" indeterminate={false} caption="All" onChange={this.handleCheckAll} />
                <i-checkbox-group id="checkboxGroup" top={370} values={JSON.stringify([])} width={400} onChange={this.handleCheckGroup}>
                    <i-checkbox caption="Option 1" />
                    <i-checkbox caption="Option 2" />
                    <i-checkbox caption="Option 3" />
                </i-checkbox-group>
            </i-panel>
    }
};
export default Module1;