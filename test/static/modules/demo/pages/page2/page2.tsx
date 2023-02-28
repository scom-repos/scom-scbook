import { customElements, Control, Module, Styles, ListView, Button, Input, Icon } from '@ijstech/components';
import { viewType } from '@ijstech/list-view/listView';
import './page2.css';

const dataList = ["Alphabetical", "Date Updated"];

Styles.Theme.applyTheme(Styles.Theme.darkTheme);


const generateData = (idx: number): any[] => {
  const title = ["OpenSwap", "GraphQL", "Dune Analytics"];
  const summary = [
    "An Integrated One-Stop DeFi Hub. Designed to Revolutionize On-Chain Liquidity.",
    "Composed into a global graph of all the world's public information.",
    "Free crypto analytics by and for the community."
  ]
  const updateDate = ['2022-01-28', '2022-01-29', '2022-01-30']

  return [
    {
      name: 'token',
      content: "0x0a03-7747a4",
      contentType: "small"
    },
    {
      name: 'title',
      content: title[idx] || '',
      contentType: "title"
    },
    {
      name: 'description',
      content: summary[idx] || '',
      contentType: "summary"
    },
    {
      name: 'updateDate',
      content: updateDate[idx] || '2022-03-15',
      contentType: "subtitle",
      prefix: 'Updated: '
    }
  ]
}
const data0 = generateData(0);
const data1 = generateData(1);
const data2 = generateData(2);

const background0 = {
  list: "transparent linear-gradient(90deg, #B9383F 0%, #4D1635 26%, #000000 100%) 0% 0% no-repeat padding-box",
  grid: "transparent radial-gradient(closest-side at 50% 68%, #B9383F 0%, #4D1635 200%) 0% 0% no-repeat padding-box"
}
const background1 = {
  list: "transparent linear-gradient(90deg, #484BAF 0%, #202053 25%, #000000 100%) 0% 0% no-repeat padding-box",
  grid: "transparent radial-gradient(closest-side at 50% 68%, #484BAF 0%, #202053 200%) 0% 0% no-repeat padding-box"
}
const background2 = {
  list: "transparent linear-gradient(90deg, #BF432A 0%, #983947 25%, #000000 100%) 0% 0% no-repeat padding-box",
  grid: "transparent radial-gradient(closest-side at 50% 68%, #BF432A 0%, #582876 200%) 0% 0% no-repeat padding-box"
}

@customElements('i-list-grid-view')
export class Module1 extends Module {
  private listGridView: ListView;
  private sortBtn: Button;
  private listBtn: Button;
  private gridBtn: Button;
  private clearIcon: Icon;
  private searchInput: Input;
  private sortCombobox: Input;
  private asc: boolean;
  private timeout: NodeJS.Timeout;
  private prevComboVal: string;

  constructor(parent?: Control, options?: any) {
    super(parent, options);
    this.asc = true;
    this.prevComboVal = dataList[0];
  }

  setViewType(value: viewType) {
    if (this.listGridView.type == value) return;
    this.listGridView.type = value;
    this.listBtn.classList.toggle('active');
    this.gridBtn.classList.toggle('active');
  }

  redirect() {
    window.location.assign('../page4/page4.html');
  }

  onSort() {
    this.asc = !this.asc;
    this.sortBtn.icon = this.asc ? "arrow-up" : "arrow-down";
    this.onSortByValue();
  }

  onSortByValue() {
    let value = '';
    switch (this.sortCombobox.value) {
      case "Alphabetical":
        value = 'title';
        break;
      case "Date Updated":
        value = 'updateDate';
        break;
    }
    this.listGridView.sort(value, this.asc);
  }

  onSelect(value: string) {
    if (this.prevComboVal != value) {
      this.onSortByValue();
      this.prevComboVal = value;
    }
  }

  onSearch(input: any) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.listGridView.search(input.value);
    }, 300);
  }

  clearInputValue() {
    this.listGridView.search(this.searchInput.value);
  }

  render() {
    return (
      <i-panel>
        <i-container>
          <i-panel class='custom-panel --info'>
            <i-row>
              <i-col xs={7} sm={9}>
                <i-label class='heading-title' caption='SECCOM Project'></i-label>
                <i-label class='desc' caption='View subgraphs on the decentralized Graph Network, indexed by network participants. View subgraphs on the Hosted Service here.'></i-label>
              </i-col>
              <i-col xs={5} sm={3}>
                <i-row flex justify="end">
                  <i-button class="btn-primary" caption="Create Project" height={40} width={160}></i-button>
                </i-row>
              </i-col>
            </i-row>
          </i-panel>
        </i-container>
        <i-container>
          <i-panel class='action-panel'>
            <i-row flex justify="end" align="middle">
              <i-col>
                <i-panel id="optPanel">
                  <i-icon width={36} height={36} name="search" fill="white"></i-icon>
                  <i-input id="searchInput" width={250} height={38} placeholder="Search" onKeyUp={this.onSearch} clearable clearCallback={this.clearInputValue}></i-input>
                  <i-input
                    id="sortCombobox"
                    inputType="combobox"
                    width={180}
                    height={38}
                    value={dataList[0]}
                    items={JSON.stringify(dataList)}
                    onSelect={this.onSelect}
                    readOnly
                  ></i-input>
                  <i-button id="sortBtn" icon="arrow-up" height={38} width={38} onClick={this.onSort}></i-button>
                  <i-button id="listBtn" icon="list-ul" class="active" height={38} width={38} onClick={() => this.setViewType('list')}></i-button>
                  <i-button id="gridBtn" icon="th-large" height={38} width={38} onClick={() => this.setViewType('grid')}></i-button>
                </i-panel>
              </i-col>
            </i-row>
          </i-panel>
        </i-container>
        <i-container class="mb-2">
          <i-panel class="list-panel">
            <i-list-view id="listGridView">
              <i-list-view-item
                imgUrl="../assets/openswap.png"
                data={JSON.stringify(data0)}
                autoRender={true}
                background={JSON.stringify(background0)}
                borderless={true}
                onClick={this.redirect}
                stake={333.3}
                queryFee={333.3}
                unit="Openswap"
              />
              <i-list-view-item
                imgUrl="../assets/graphQL.png"
                data={JSON.stringify(data1)}
                autoRender={true}
                background={JSON.stringify(background1)}
                borderless={true}
                onClick={this.redirect}
                stake={333.3}
                queryFee={333.3}
                unit="Openswap"
              />
              <i-list-view-item
                imgUrl="../assets/dune_analytics.png"
                data={JSON.stringify(data2)}
                autoRender={true}
                background={JSON.stringify(background2)}
                borderless={true}
                onClick={this.redirect}
                stake={333.3}
                queryFee={333.3}
                unit="Openswap"
              />
            </i-list-view>
          </i-panel>
        </i-container>
      </i-panel>
    )
  }
}