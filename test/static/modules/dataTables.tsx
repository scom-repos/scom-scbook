import { customElements, Control, Input, Button, Module, observable, Styles, DataTables } from '@ijstech/components';

var data: any[] = [];
const fields = ['from', 'to', 'time', 'leave_type', 'start_date', 'start_time_frame', 'end_date', 'end_time_frame', 'remark'];
const columnCaptions = fields.map((field: string) => field.replace(/\_/g, " ").toUpperCase());
const searchObj = { 
	placeholder: 'Searching ...',
	realTime: true
}
const languageObj = {
	emptyTable: "No data",
  info: "Total _END_ of _TOTAL_",
  infoEmpty: "Total 0 of 0",
	infoFiltered: "",
	zeroRecords: "No results",
}

@customElements('i-data-table-module')
export class Module1 extends Module {
	private button1: Button;
	private btnChangeTheme: Button;
	private table1: DataTables;

	constructor(parent?: Control, options?: any) {
		super(parent, options);
		data = this.generateData(99);
	}

	generateData(len: number): any[] {
		var name = [
			'Babbie', 'Dasi', 'Horacio', 'Bartel', 'Tann', 'Warren', 'Maisey', 'Uriah', 'Moise', 'Alvan',
			'Bjorn', 'Hamid', 'Hattie', 'Callie', 'Carry', 'Elmo', 'Cullie', 'Ellerey', 'Natty', 'Pinchas'
		];
		const data = [];

		for (var i = 0; i < len; i++) {
			const fromIdx = Math.floor(Math.random() * 20);
			const toIdx = Math.floor(Math.random() * 20);
			const days = Math.floor(Math.random() * 5);
			const startDate: Date = this.randomDate(new Date(2000, 1, 1), new Date());
			const endDate: Date = new Date(startDate);
			endDate.setDate(startDate.getDate() + days);
			data.push({
				from: name[fromIdx],
				to: name[toIdx],
				time: startDate.toLocaleString('sv-SE'),
				leave_type: 'Annual',
				start_date: startDate.toLocaleDateString('sv-SE'),
				start_time_frame: startDate.toLocaleTimeString('sv-SE'),
				end_date: endDate.toLocaleDateString('sv-SE'),
				end_time_frame: endDate.toLocaleTimeString('sv-SE'),
				remark: 'xzc',
			});
		}

		return data;
	}

	randomDate(start: Date, end: Date): Date {
		return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
	}

	addRow() {
		const newData = this.generateData(1)[0];
		this.table1.addRow(newData);
	}

	onRowClick(sender: any, $row:any, data: any, event: any) {
		console.log('data: ', data);
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

	render() {
		return <i-panel left={20} top={20}>
			<i-button id="btnChangeTheme" width={120} caption='Dark Theme' onClick={this.btnChangeThemeClick}></i-button>
			<i-button id="button1" width={80} caption='add row' onClick={this.addRow}></i-button>
			<i-data-table
				id="table1"
				// top={10}
				heading="My voting"
				paging={JSON.stringify({position: 'both'})}
				// select={true}
				// search={true}
				search={JSON.stringify(searchObj)}
				ordering={true}
				fields={JSON.stringify(fields)}
				columnCaptions={JSON.stringify(columnCaptions)}
				data={JSON.stringify(data)}
				onRowClick={this.onRowClick}
				language={JSON.stringify(languageObj)}
			></i-data-table>
		</i-panel>
	}
}