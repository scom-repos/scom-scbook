import {
  customElements,
  Module,
  Styles,
  Control,
  Loading
} from '@ijstech/components';
import './layout.css';
const Theme = Styles.Theme.ThemeVars;
Styles.Theme.applyTheme(Styles.Theme.darkTheme);

var tableData: any[] = [];
const fields = ['from', 'to', 'time', 'leave_type', 'start_date', 'start_time_frame', 'end_date', 'end_time_frame', 'remark'];
const columnCaptions = fields.map((field: string) => field.replace(/\_/g, " ").toUpperCase());
const searchObj = { 
	placeholder: 'Search by ID',
	realTime: true
}
var dataProp = JSON.stringify({
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [10, 230, 224, 218, 135, 147, 260],
      type: 'line',
    },
  ],
});

var timeLineData = JSON.stringify([{
  label: 'INDEXING',
  list: ['Dex Aggreator (BSC)', 'Strategic Partnership', 'Range & Group Queues (Testnet)']
},{
  label: 'PROGRESS 100%',
  list: ['Dex Aggreator (BSC)', 'Strategic Partnership', 'Range & Group Queues (Testnet)']
}]);

@customElements('i-module-layout')
export class ModuleLayout extends Module {
  private largeLoading: Loading;
  constructor(parent?: Control, options?: any) {
		super(parent, options);
    tableData = this.generateTableData(99);
  }

  generateTableData(len: number): any[] {
		const name = [
			'Babbie', 'Dasi', 'Horacio', 'Bartel', 'Tann', 'Warren', 'Maisey', 'Uriah', 'Moise', 'Alvan',
			'Bjorn', 'Hamid', 'Hattie', 'Callie', 'Carry', 'Elmo', 'Cullie', 'Ellerey', 'Natty', 'Pinchas'
		];
		const data = [];

		for (let i = 0; i < len; i++) {
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
  
  queryClick() {}
  
  signalClick() {}

  init() {
    super.init();
    setTimeout(() => {
      this.largeLoading && (this.largeLoading.spinning = false);
    }, 3000)
  }

  render() {
    return (
      <i-panel width='100%'>
        <i-loading size="large" id="largeLoading" body>
          <i-container>
            <i-header>
              <i-menu class="hidden-xs-only">
                <i-menu-item title='Products' hasChildren>
                  <i-menu isDropdown>
                    <i-menu-item
                      title='Graph Explorer'
                      content='Explore subgraphs and interact with the protocol'
                      isDropdown
                    />
                    <i-menu-item
                      title='Subgraph Studio'
                      content='Create, manage and publish subgraphs and API keys'
                      isDropdown
                    />
                    <i-menu-item
                      title='Hosted Service'
                      content='Create and explore subgraphs on the Hosted Service'
                      isDropdown
                    />
                  </i-menu>
                </i-menu-item>
                <i-menu-item title='Blog' href='#' />
                <i-menu-item
                  title='Security'
                  href='#'
                />
              </i-menu>
              <i-menu
                title='The graph'
                platform='mobile'
                class="hidden-sm-and-up right"
              >
                <i-slot name='The graph'>
                  <i-menu-item title='Products' hasChildren platform='mobile' />
                  <i-menu-item
                    title='Blog'
                    href='#'
                    platform='mobile'
                  />
                  <i-menu-item
                    title='Security'
                    href='#'
                    platform='mobile'
                  />
                </i-slot>
                <i-slot name='Products'>
                  <i-menu-item
                    title='Graph Explorer'
                    platform='mobile'
                    isDropdown
                  />
                  <i-menu-item
                    title='Subgraph Studio'
                    platform='mobile'
                    isDropdown
                  />
                  <i-menu-item
                    title='Hosted Service'
                    platform='mobile'
                    isDropdown
                  />
                </i-slot>
              </i-menu>
            </i-header>
            <i-main>
              
              {/* Alert */}
              <i-alert
                width='100%'
                class="mb-2"
                title='Be careful curating subgraphs'
                content='Subgraphs may not be deployed by the project teams and the value of curation shares can fluctuate significantly up or down.'
              ></i-alert>

              {/* Page Header */}
              <i-row
                gutter={15}
                flex
                wrap={false}
                align='middle'
                class="mb-2"
              >
                <i-col sm={2}>
                  <i-image url="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" />
                </i-col>
                <i-col sm={6}>
                  <i-icon name="user" fill="#fff" width="12px" height="12px"/>
                  <i-label caption="0x4bb4—7ca0a0"></i-label>
                  <i-label caption="PoolTogether v3_1_0" class="heading" displayType="block"></i-label>
                </i-col>
                <i-col sm={4} class="text-right">
                  <i-button caption='Query' onClick={this.queryClick} class="custom-btn"></i-button>
                </i-col>
              </i-row>

              {/* Layout */}
              <i-container>
                <i-row gutter={70} flex justify='space-around'>
                  <i-col xs={12} sm={6} md={3} lg={3}>
                    <i-section class='i-col-custom'>
                      <i-image
                        width='100%'
                        height='200px'
                        url='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg'
                      />
                      <i-section class='i-col-content'>
                        <i-label
                          caption='The Graph Network In Depth'
                          class='title'
                        ></i-label>
                        <i-label caption='Brandon Ramirez'></i-label>
                        <i-label caption='October 17,2019' class='date'></i-label>
                      </i-section>
                    </i-section>
                  </i-col>
                  <i-col xs={12} sm={6} md={3} lg={3}>
                    <i-section class='i-col-custom'>
                      <i-image
                        width='100%'
                        height='200px'
                        url='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg'
                      />
                      <i-section class='i-col-content'>
                        <i-label
                          caption='Modeling Crypto-economic Protocols'
                          class='title'
                        ></i-label>
                        <i-label caption='Brandon Ramirez'></i-label>
                        <i-label caption='February 12,2020' class='date'></i-label>
                      </i-section>
                    </i-section>
                  </i-col>
                  <i-col xs={12} sm={6} md={3} lg={3}>
                    <i-section class='i-col-custom'>
                      <i-image
                        width='100%'
                        height='200px'
                        url='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg'
                      />
                      <i-section class='i-col-content'>
                        <i-label caption='The Path to Web3' class='title'></i-label>
                        <i-label caption='Yaniv Tal'></i-label>
                        <i-label caption='February 12,2020' class='date'></i-label>
                      </i-section>
                    </i-section>
                  </i-col>
                </i-row>
              </i-container>

              <i-divider width='100%' class='divider'>
                <i-icon
                  width={16}
                  height={16}
                  name='draw-polygon'
                  fill='grey'
                ></i-icon>
              </i-divider>

              {/* Tabs */}
              <i-section>
                <i-label class='heading-title' caption='Live Products'></i-label>
                <i-label
                  class='heading-title_sub'
                  caption='Many of the best projects are using The Graph in production today.'
                ></i-label>
                <i-tabs
                  class='tab-auto'
                  activePageIndex={0}
                  vertical={true}
                  width='80%'
                >
                  <i-tab caption='Uniswap' tabSheetId='home'></i-tab>
                  <i-tab caption='Synthetix' tabSheetId='profile'></i-tab>
                  <i-tab caption='Decentraland' tabSheetId='contact'></i-tab>
                  <i-tab-sheet id='home'>
                    <i-image url='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg' />
                  </i-tab-sheet>
                  <i-tab-sheet id='profile'>
                    <i-image url='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg' />
                  </i-tab-sheet>
                  <i-tab-sheet id='contact'>
                    <i-image url='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg' />
                  </i-tab-sheet>
                </i-tabs>
              </i-section>

              <i-section class='mb-2'>
                <i-timeline data={timeLineData} pointColor={Theme.colors.success.dark} titleColor='#fff' textColor='#fff' popupColor='#2f1e3b' ></i-timeline>
              </i-section>
    
              <i-section>
                <i-tabs class='tab-justified' activePageIndex={0} width="100%">
                  <i-tab caption='Overview' tabSheetId='overview'></i-tab>
                  <i-tab caption='Indexers' tabSheetId='index'></i-tab>
                  <i-tab caption='Curators' tabSheetId='cur'></i-tab>
                  <i-tab caption='Playground' tabSheetId='play'></i-tab>
                  <i-tab-sheet id='overview'>
                    <i-row gutter={15}>
                      <i-col md={6} xs={12}>
                        <i-label
                          class="mb-2"
                          displayType="block"
                          caption="Subgraph for PoolTogether v3_1_0 prize pools and Multiple Winners prize strategies."
                        ></i-label>
                        <i-section class="mb-2">
                          <i-label
                            displayType="block"
                            caption="DEPLOYMENT ID"
                          ></i-label>
                          <i-label displayType="block" caption="QmTKXLEdMD6Vq7Nwxo8XAfnHpG6H1TzL1AGwiqLpoae3Pb"></i-label>
                        </i-section>
                        <i-section class="mb-2">
                          <i-label displayType="block" caption="TOKEN ID"></i-label>
                          <i-section>
                            <i-label caption="397589—208259"></i-label>
                            <i-clipboard value='397589—208259' class="ml-1"/>
                          </i-section>
                        </i-section>
                        <i-section class="mb-2">
                          <i-panel float="left" responsive={false}>
                            <i-label displayType="block" caption="CREATED"></i-label>
                            <i-label displayType="block" caption="a year ago"></i-label>
                          </i-panel>
                          <i-panel float="right" responsive={false}>
                            <i-label displayType="block" caption="LAST UPDATED"></i-label>
                            <i-label displayType="block" caption="19 days ago"></i-label>
                          </i-panel>
                        </i-section>
                      </i-col>
                      <i-col md={6} xs={12}>
                        <i-line-chart id="linechart" data={dataProp} width='100%' height={600}></i-line-chart>
                      </i-col>
                    </i-row>
                  </i-tab-sheet>
                  <i-tab-sheet id='index'>
                    <i-data-table
                      id="table1"
                      paging={JSON.stringify({position: 'both'})}
                      search={JSON.stringify(searchObj)}
                      ordering={true}
                      fields={JSON.stringify(fields)}
                      columnCaptions={JSON.stringify(columnCaptions)}
                      data={JSON.stringify(tableData)}
                    ></i-data-table>
                  </i-tab-sheet>
                  <i-tab-sheet id='cur'>
                    <i-label id='label1' caption='Phone Num: XXXX-XXXX'></i-label>
                  </i-tab-sheet>
                  <i-tab-sheet id='play'>
                    <i-code-editor id="editor1" language="typescript" width="100%" height="100%"></i-code-editor>
                  </i-tab-sheet>
                </i-tabs>
              </i-section>

              <i-section class="mb-2">
                <i-row gutter={15}>
                  <i-col md="7">
                    <i-panel>
                      <i-section class="mb-2">
                        <i-input width="100%" height={40} caption="DISPLAY NAME" value="" placeholder="Display Name"></i-input>
                      </i-section>
                      <i-section class="mb-2">
                        <i-input width="100%" height={40} caption="SUBGRAPH DESCRIPTION" value="" placeholder="Subgraph Description"></i-input>
                      </i-section>
                    </i-panel>
                  </i-col>
                  <i-col md="5">
                      <i-collapse expanded={true}>
                        <i-collapse-summary>
                          <i-icon name="chevron-circle-right" width="32px" height="32px" fill="#fff"></i-icon>
                          <i-label caption="INSTALL GRAPH CLI"></i-label>
                        </i-collapse-summary>
                        <i-collapse-details>
                          <i-label caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget."></i-label>
                        </i-collapse-details>
                      </i-collapse>
                      <i-collapse>
                        <i-collapse-summary>
                          <i-icon name="chevron-circle-right" width="32px" height="32px" fill="#fff"></i-icon>
                          <i-label caption="INIT"></i-label>
                        </i-collapse-summary>
                        <i-collapse-details>
                          <i-label caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget."></i-label>
                        </i-collapse-details>
                    </i-collapse>
                    <i-collapse>
                      <i-collapse-summary>
                        <i-icon name="chevron-circle-right" width="32px" height="32px" fill="#fff"></i-icon>
                        <i-label caption="AUTH & DEPLOY"></i-label>
                      </i-collapse-summary>
                      <i-collapse-details>
                        <i-label caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                          malesuada lacus ex, sit amet blandit leo lobortis eget."></i-label>
                      </i-collapse-details>
                    </i-collapse>
                  </i-col>
                </i-row>
                </i-section>
              
            </i-main>
            <i-footer><i-label caption="Footer"></i-label></i-footer>
          </i-container>
        </i-loading>
      </i-panel>
    )
  }
}
