import { customElements, Control, Input, Button, Module, observable, Styles, Checkbox, CheckboxGroup, ComboBox, Range } from '@ijstech/components';

const options = ['Option 1', 'Option 2', 'Option 3'];

const dataList = [
    'Happy Ever After - (1999)',
    'Witness to a Prosecution - (1999)',
    'Take My Word For It - (2002)',
    'Witness to a Prosecution 2 - (2003)',
    'A Pillow Case of Mystery - (2006)',
    'Dicey Business - (2006)',
    'Forensic Heroes - (2006)',
    'Forensic Heroes 2 - (2008)',
    'House of Spirits - (2016)',
]

const labels = ['1', '2', '3', '4', '5']

@customElements('i-module5')
export class Module1 extends Module {
    private checkgroup1: CheckboxGroup;
    private checkboxAll: Input;
    private checkboxGroup: CheckboxGroup;
    private comboBox: Input
    private range: Input

    handleOnChange(source: Control, value: any) {
        console.dir('handleOnChange', value)
        console.dir(source)
        console.dir(value);
    }
    handleCheckAll(source: Control, value: any) {
        // console.log("handleCheckAll")
        const data = value ? options : [];
        this.checkboxGroup.values = JSON.stringify(data);
        (this.checkboxAll.inputControl as Checkbox).indeterminate = false;
    }
    handleCheckGroup(source: Control, value: any) {
        const checkedCount = JSON.parse(value).length;
        this.checkboxAll.value = checkedCount === options.length;
        (this.checkboxAll.inputControl as Checkbox).indeterminate = checkedCount > 0 && checkedCount < options.length;
    }
    handleRadioChange(source: Control, value: any) {
        // console.log('radio ', value)
    }
    render() {
        return <i-panel left={40} top={40}>
            <i-input id="edit1" top={10} width={140} height={25} caption="Edit1" value="test"></i-input>
            <i-input id="edit2" top={10} left={180} width={160} height={25} captionWidth={65} inputType="password" caption="password"></i-input>
            <i-input id="checkbox1" inputType="checkbox" top={50} width={140} height={25} caption="Checkbox title" value="true"></i-input>
            <i-input id="checkbox2" inputType="checkbox" top={80} captionWidth={120} height={25} value="false" checked={true} enabled={false} caption="Checkbox title 1" />

            <i-label top={110} width={200} caption={this.checkgroup1.values}></i-label>
            <i-checkbox-group id="checkgroup1" top={130} values={JSON.stringify([])} width={300}>
                <i-input inputType="checkbox" checked={true} caption="Option 1" />
                <i-input inputType="checkbox" caption="Option 2" />
            </i-checkbox-group>

            <i-input id="checkboxAll" inputType="checkbox" top={160} value="false" indeterminate={false} caption="All" onChange={this.handleCheckAll} />
            <i-checkbox-group id="checkboxGroup" top={180} values={JSON.stringify([])} width={400} onChange={this.handleCheckGroup}>
                <i-input inputType="checkbox" caption="Option 1" />
                <i-input inputType="checkbox" caption="Option 2" />
                <i-input inputType="checkbox" caption="Option 3" />
            </i-checkbox-group>

            <i-label top={10} left={400} width={200} caption="Bobby' movies"></i-label>
            <i-input id="comboBox" inputType="combobox" top={30} left={400} width={180} height={28} value={dataList[0]} items={JSON.stringify(dataList)} icon="angle-double-down"></i-input>
            <i-label id="label1" top={70} left={400} width={200} caption={this.comboBox.value}></i-label>
            <i-input
                inputType="date"
                top={210}
                width={200}
                height={25}
                caption="date"
                captionWidth={35}
                dateFormat="DD-MM-YYYY"
                value="01/01/2001"
            ></i-input>
            <i-input
                inputType="dateTime"
                top={250}
                width={250}
                height={25}
                caption="datetime"
                captionWidth={60}
                dateFormat="DD-MM-YYYY hh:mm A"
            ></i-input>
            <i-input
                inputType="time"
                top={290}
                width={200}
                height={25}
                caption="time"
                captionWidth={35}
                dateFormat="hh:mm A"
            ></i-input>
            <i-input id="range" inputType="range" top={330} width={300} height={25} captionWidth={90} caption="Range (1-10)" min={1} max={10} value="5"></i-input>
            <i-label id="label2" top={330} left={315} width={100} caption={this.range.value}></i-label>
            <i-input id="range2" inputType="range" top={370} width={400} height={25} captionWidth={70} caption="Rate (1-5)" min={1} max={5} labels={JSON.stringify(labels)}></i-input>
            <i-label top={430} width={100} caption="Gender"></i-label>
            <i-input top={455} id='gender1' inputType="radio" name='gender' value='m' caption='Male' checked={true}></i-input>
            <i-input top={455} left={100} id='gender2' inputType="radio" name='gender' value='f' caption='Female' checked={false}></i-input>
            <i-input top={455} left={200} id='gender3' inputType="radio" name='gender' value='o' caption='Other' checked={false}></i-input>
            <i-radio-group top={550} value='1' width={400} onChange={this.handleRadioChange}>
                <i-input inputType="radio" value='1' caption="Value 1" />
                <i-input inputType="radio" value='2' caption="Value 2" />
                <i-input inputType="radio" value='3' caption="Value 3" />
            </i-radio-group>
        </i-panel>
    }
}
