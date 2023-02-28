import { customElements, Module, Styles, Control, LineChart } from '@ijstech/components';
import './page4.css';
import { RadioGroup } from '@ijstech/radio/radio';
const Theme = Styles.Theme.ThemeVars;
Styles.Theme.applyTheme(Styles.Theme.darkTheme);

var chartData: string = '';
var versionList: (string | undefined)[] = [];
const chartsData: { [key: string]: any } = {
  'fee': {
    '1W': {
      xAxis: ['MAR 16', 'MAR 17', 'MAR 18', 'MAR 19', 'MAR 20'],
      series: [0, 0, 0, 0, 0]
    },
    '1M': {
      xAxis: ['FEB 21', 'FEB 26', 'MAR 06', 'MAR 11', 'MAR 16', 'MAR 22'],
      series: [0, 1.8, 0, 0, 0, 0]
    },
    'ALL TIME': {
      xAxis: ['JUN 28 21', 'AUG 09 21', 'SEP 28 21', 'NOV 29 21', 'JAN 28', 'MAR 22'],
      series: [~0, 0, 0, 0, 0, ~0]
    }
  },
  'curation': {
    '1W': {
      xAxis: ['MAR 16', 'MAR 17', 'MAR 18', 'MAR 19', 'MAR 20'],
      series: [199.8, 199.8, 199.8, 199.8, 199.8]
    },
    '1M': {
      xAxis: ['FEB 21', 'FEB 26', 'MAR 06', 'MAR 11', 'MAR 16', 'MAR 22'],
      series: [200, 199.8, 199.8, 199.8, 199.8, 199.8]
    },
    'ALL TIME': {
      xAxis: ['JUN 28 21', 'AUG 09 21', 'SEP 28 21', 'NOV 29 21', 'JAN 28', 'MAR 22'],
      series: [116, 116, 154, 174, 174, 180]
    }
  }
}

const indexFields = ['indexers', 'allocated_stake', 'query_fee', 'index_rewards', 'fee_cut', 'reward_cut', 'member_since'];
const curFields = ['curator', 'signaled', 'shares', 'shares_value', 'query_fee', 'subgraphs', 'curating_since'];
var indexColumnCaptions: string[] = [];
var curColumnCaptions: string[] = [];
const searchObj = { 
	placeholder: 'Search by ID',
	realTime: true,
  width: 250,
  height: 38,
  clearable: true,
  column: 0
};
const languageObj = {
	emptyTable: "No data",
  info: "Total _END_ of _TOTAL_",
  infoEmpty: "Total 0 of 0",
	infoFiltered: "",
	zeroRecords: "No results",
};
const indexerData = new Array(8).fill({
  indexers: '0xd3-76035',
  allocated_stake: '1.0',
  query_fee: 172.1,
  index_rewards: '8.9K',
  fee_cut: '80%',
  reward_cut: '80%',
  member_since: '2022-02-20'
});
const curData = new Array(8).fill({
  curator: '0xd3-76035',
  signaled: '5.00',
  shares: '1.0',
  shares_value: '5.00',
  query_fee: '~0',
  subgraphs: '',
  curating_since: '2022-02-20'
});
const indexColumnDefs = [{
  targets: 0,
  render: '<div class="cell-group"><i-image url="../assets/avatar.png"></i-image>_DATA_</div>'
}]
const curColumnDefs = [{
  targets: 0,
  render: '<div class="cell-group"><i-image url="../assets/avatar.png"></i-image>_DATA_</div>'
}, {
  targets: [1, 3, 4],
  render: '<span>_DATA_ <sup>GRT</sup></span>'
}, {
  targets: 5,
  render: '<div class="cell-group"><i-image url="../assets/openswap.png"></i-image><i-image url="../assets/dune_analytics.png"></i-image></div>'
}]

@customElements('i-view')
export class View extends Module {
  private linechart: LineChart;
  private chartControl1: RadioGroup;
  private chartControl2: RadioGroup;

  constructor(parent?: Control, options?: any) {
		super(parent, options);
    this.generateChartData();
    this.generateList();
    indexColumnCaptions = this.generateColumnCaptions(indexFields);
    curColumnCaptions = this.generateColumnCaptions(curFields);
  }

  generateChart(event: any, type: string) {
    this.generateChartData();
  }

  generateChartData() {
    const value1 = this.chartControl1?.value || 'fee';
    const value2 = this.chartControl2?.value || '1W';
    const data = chartsData[value1][value2];
    if (!data) return;
    const chartObj = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'line',
          label: {
            show: false
          }
        },
        backgroundColor: Theme.background.default,
        borderColor: Theme.background.default,
        textStyle: {
          color: Theme.text.primary
        },
        formatter: '<div class="text-center">{b0} <br /> <strong>{c0}</strong> GRT</div>'
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: data.xAxis,
        axisLine: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          color: '#fff'
        },
        axisTick: {
          show: false
        }
      },
      grid: {
        height: 300
      },
      yAxis: {
        type: 'value',
        splitLine: {
          show: false
        },
        axisLabel: {
          color: '#fff'
        },
        splitNumber: 4
      },
      series: [
        {
          data: data.series,
          type: 'line',
          stack: 'a',
          areaStyle: {},
          itemStyle: {
            color: 'rgb(97, 84, 233)'
          },
          emphasis: {
            label: {
              show: false
            }
          }
        },
      ]
    };
    chartData = JSON.stringify(chartObj);
    if (this.linechart) this.linechart.datas = chartData;
  }

  generateList() {
    versionList = [
      'v1.0.0',
      'v1.0.1',
      'v1.0.2',
      'v1.0.3'
    ]
  }

  buttonClick() { }

  generateColumnCaptions(fields: string[]) {
    return fields.map((field: string) => field.replace(/\_/g, " ").toUpperCase());
  }

  render() {
    return (
      <i-panel>
        <i-container class="mt-4">
          <i-row
            gutter={15}
            flex
            align='middle'
            class="mb-2"
          >
            <i-col xs={12} md={4} class="flex overflow">
              <i-image url="../assets/openswap.png" />
              <i-section class="ml-1">
                <i-label class="mb-1" displayType="block" caption="0x0a03—7747a4"></i-label>
                <i-label class="lb-2 mb-1-2-5" displayType="block" caption="OpenSwap"></i-label>
                <i-combo-box
                  class="version-combobox"
                  height="40px"
                  value={versionList[0]}
                  items={JSON.stringify(versionList)}
                  icon="arrow-down"
                ></i-combo-box>
              </i-section>
            </i-col>
            <i-col xs={12} md={4}>
              <i-section>
                <i-label displayType='block' caption="INDEX NETWORK"></i-label>
                <i-label displayType='block' caption="Mainnet"></i-label>
              </i-section>
              <i-row class="mt-4">
                <i-col span={6}>
                  <i-label class="mb-0-7-5" displayType='block' caption="Query ID"></i-label>
                  <i-label displayType='block' caption="KJDNFJF8H"></i-label>
                </i-col>
                <i-col span={6}>
                  <i-label displayType='block' caption="Query Url"></i-label>
                  <i-label caption="/query/id/KJDNFJF8H"></i-label>
                  <i-clipboard value='/query/id/KJDNFJF8H' class="ml-1" succeedCaption="Copy!" />
                </i-col>
              </i-row>
            </i-col>
            <i-col xs={12} md={4} class="text-right">
              <i-button class="mr-2-5 btn btn-info" caption='Query'></i-button>
              <i-button-dropdown
                class="btn-dropdown"
                id="button2"
                data-position="left center"
                caption="Signal"
                height="50px"
              >
                <i-dropdown-item
                  caption="Signal"
                  onClick={this.buttonClick}
                ></i-dropdown-item>
                <i-dropdown-item
                  caption="Unsignal"
                  onClick={this.buttonClick}
                ></i-dropdown-item>
              </i-button-dropdown>
            </i-col>
          </i-row>
        </i-container>

        <i-container class="mt-4">
          <i-section>
            <i-progress percent={92} steps={10}>
              <i-progress-item class="progress-item" percent={92}>
                <i-label class="lb-progress" caption="Updated: 28-01-2022" />
              </i-progress-item>
            </i-progress>
          </i-section>
        </i-container>

        <i-container class="mt-4">
          <i-tabs class='view-tabs' activePageIndex={0} width='100%' borderless scrollable gap={60} marginBottom={40}>
            <i-tab caption='Overview' tabSheetId='overview'></i-tab>
            <i-tab caption='Indexers' tabSheetId='index'></i-tab>
            <i-tab caption='Curators' tabSheetId='cur'></i-tab>
            <i-tab caption='Playground' tabSheetId='play'></i-tab>
            <i-tab-sheet id='overview'>
              <i-row gutter={45}>
                <i-col md={6} xs={12}>
                  <i-section class="graph-info">
                    <i-label class="mb-1-2-5" displayType="block" caption="OpenSwap is an integrated DeFi Hub designed for the evolving decentralized landscape. More than just an AMM exchange, OpenSwap aims to be a one-stop platform offering the best on-chain pricing through its integrated portal. By enabling trades with other leading AMM DEXs and a cross-chain bridge to enable a future of multi-chain arbitrage and trading, OpenSwap will also offer Fixed Staking Re" />
                    <i-label class="mb-1-2-5 lb-small" displayType="block" caption="https://www.openswap.xyz/#/" />
                    <i-section class="info-row lb-small">
                      <i-label displayType='block' caption='DEPLOYMENT ID'></i-label>
                      <i-label displayType='block' caption='HKHKSDOHKD9GVANCKKL97842HKJBDDAQ'></i-label>
                    </i-section>
                    <i-section class="info-row lb-small">
                      <i-label class="bold" displayType='block' caption='TOKEN ID'></i-label>
                      <i-section class="inline-flex">
                        <i-clipboard value='123213-23112' class="mr-1" succeedCaption="Copy!" />
                        <i-label displayType='block' caption='123213-23112'></i-label>
                      </i-section>
                    </i-section>
                    <i-section class="info-row lb-small">
                      <i-label class="bold" displayType='block' caption='CREATED DATE'></i-label>
                      <i-label displayType='block' caption='14-02-2022'></i-label>
                    </i-section>
                    <i-section class="info-row lb-small">
                      <i-label class="bold" displayType='block' caption='LAST UPDATED'></i-label>
                      <i-label displayType='block' caption='02-03-2022'></i-label>
                    </i-section>
                    <i-section class="lb-small">
                      <i-label class="bold mb-1" displayType='block' caption='CATEGORIES'></i-label>
                      <i-section class="list-group cate-group">
                        <i-label caption="DEFI"></i-label>
                        <i-label caption="SWAP"></i-label>
                        <i-label caption="INFRASTRUCTURE"></i-label>
                      </i-section>
                    </i-section>
                  </i-section>
                </i-col>
                <i-col md={6} xs={12}>
                  <i-section class="chart-group">
                    <i-row>
                      <i-col span={6}>
                        <i-radio-group id="chartControl1" value='fee' onChange={this.generateChart} class="btn-chart-group">
                          <i-input inputType="radio" value='fee'>
                            <i-slot>
                              <i-label displayType="block" caption="Query Fees⬩30D"></i-label>
                              <i-label class="lb-number" caption="0.0"></i-label>
                              <i-label caption="GRT"></i-label>
                            </i-slot>
                          </i-input>
                          <i-input inputType="radio" value='curation'>
                            <i-slot>
                              <i-label displayType="block" caption="Curation"></i-label>
                              <i-label class="lb-number" caption="199.8"></i-label>
                              <i-label caption="GRT"></i-label>
                            </i-slot>
                          </i-input>
                        </i-radio-group>
                      </i-col>
                      <i-col span={6} class="text-right">
                        <i-radio-group id="chartControl2" value='1W' onChange={this.generateChart} class="btn-chart--sm-group">
                          <i-input inputType="radio" value="1W" caption="1W"></i-input>
                          <i-input inputType="radio" value="1M" caption="1M"></i-input>
                          <i-input inputType="radio" value="ALL TIME" caption="ALL TIME"></i-input>
                        </i-radio-group>
                      </i-col>
                    </i-row>
                    <i-section>
                      <i-line-chart
                        id='linechart'
                        data={chartData}
                        width='100%'
                        height={400}
                      ></i-line-chart>
                    </i-section>
                  </i-section>
                </i-col>
              </i-row>
              <i-section class="graph-info mt-2 lb-small graph-info--custom">
                <i-row gutter={40}>
                  <i-col md={3}>
                    <i-label class="bold" displayType="block" caption="INDEXERS" />
                    <i-section class="img-list">
                      <i-image width="18px" height="18px" url="../assets/avatar.png"></i-image>
                      <i-image width="18px" height="18px" url="../assets/avatar.png"></i-image>
                      <i-image width="18px" height="18px" url="../assets/avatar.png"></i-image>
                    </i-section>
                  </i-col>
                  <i-col md={3}>
                    <i-label class="bold" displayType="block" caption="CURATORS" />
                    <i-section class="img-list">
                      <i-image class="ml-1" width="18px" height="18px" url="../assets/avatar.png"></i-image>
                      <i-image width="18px" height="18px" url="../assets/avatar.png"></i-image>
                      <i-image width="18px" height="18px" url="../assets/avatar.png"></i-image>
                    </i-section>
                  </i-col>
                  <i-col md={6}>
                    <i-label class="bold" displayType="block" caption="Entity Types" />
                    <i-section class="list-group type-group">
                      <i-label caption="Token"></i-label>
                      <i-label caption="TokenPair"></i-label>
                      <i-label caption="Pool"></i-label>
                      <i-label caption="Option"></i-label>
                      <i-label caption="BlockHistory"></i-label>
                    </i-section>
                  </i-col>
                </i-row>
              </i-section>
            </i-tab-sheet>
            <i-tab-sheet id='index'>
              <i-data-table
                id="indexTable"
                tableClasses="stripe hover"
                paging={false}
                search={JSON.stringify(searchObj)}
                ordering={true}
                fields={JSON.stringify(indexFields)}
                columnCaptions={JSON.stringify(indexColumnCaptions)}
                data={JSON.stringify(indexerData)}
                language={JSON.stringify(languageObj)}
                columnDefs={JSON.stringify(indexColumnDefs)}
              ></i-data-table>
            </i-tab-sheet>
            <i-tab-sheet id='cur'>
              <i-data-table
                id="curTable"
                tableClasses="stripe hover"
                paging={false}
                search={JSON.stringify(searchObj)}
                ordering={true}
                fields={JSON.stringify(curFields)}
                columnCaptions={JSON.stringify(curColumnCaptions)}
                data={JSON.stringify(curData)}
                language={JSON.stringify(languageObj)}
                columnDefs={JSON.stringify(curColumnDefs)}
              ></i-data-table>
            </i-tab-sheet>
            <i-tab-sheet id='play'></i-tab-sheet>
          </i-tabs>
        </i-container>
      </i-panel>
    )
  }
}
