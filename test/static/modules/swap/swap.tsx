import { customElements, Control, Module, Styles, Row, Panel, Button, Label, Input} from '@ijstech/components';
import './swap.css'
Styles.Theme.applyTheme(Styles.Theme.darkTheme);

@customElements('i-swap')
export class Module1 extends Module {
  private payContainer: Row;
  private receiveContainer: Row;
  private swapModal: Panel;
  private btnSelected: any;
  private listRouting: Panel;
  private balanceReceive1: Label;
  private selectTokenCount: number = 0;
  private routeFound: Label;
  private toggleRoutes: Panel;
  constructor(parent?: Control, options?: any) {
    super(parent, options);
  }
  
  onSwap() {
    this.payContainer.appendChild(this.receiveContainer.childNodes[1]);
    this.receiveContainer.appendChild(this.payContainer.childNodes[1]);
  }

  tipFormatter(value: any) {
    return `${value}%`;
  }
  showModal(source: any) {
    this.btnSelected = source;
    this.swapModal.classList.remove('hidden');
  }
  hideModal (){
    this.swapModal.classList.add('hidden');
  }
  hanldeSelectToken(source: Control) {
    if (this.selectTokenCount <=1 ) {
      this.selectTokenCount++;
    }
    this.btnSelected.id = source.id;
    this.btnSelected.children[0].url = source.children[0].getAttribute('url') || '';
    this.btnSelected.caption = source.children[1].getAttribute('caption') || '';
    this.hideModal();
    if (this.selectTokenCount > 1) {
      this.hanldeAddRoute();
    }
    
  }
  hanldeListSelectToken(source: Control) {
    if (this.selectTokenCount <=1 ) {
      this.selectTokenCount++;
    }
    this.btnSelected.id = source.id;
    this.btnSelected.children[0].url = source.children[0].getAttribute('url') || '';
    this.btnSelected.caption = source.children[1].children[0].getAttribute('caption') || '';
    this.hideModal();
    if (this.selectTokenCount > 1) {
      this.hanldeAddRoute();
    }
  }
  copyToken(source: Control){
    navigator.clipboard.writeText(source.id);
  }
  connectMetaMask(){

  }
  hanldeAddRoute(){
    var self = this;
    let listRouting = [{
      name: ['PancakeSwap'],
      listConnected: ['DAI', 'WBNB'],
      balance: 0.02286,
      saving:  0.06,
      second: {
        name: ['(AVAX) Pangolin', 'Trader Joe'],
        listConnected: ['DAI','USDT' ,'WBNB'],
      }
    },
    {
      name: ['(AVAX) Pangolin', 'Trader Joe'],
      listConnected: ['DAI','USDT' ,'WBNB'],
      balance: 0.02284,
      second: {
        name: ['PancakeSwap'],
        listConnected: ['DAI', 'WBNB'],
      }
    }]
    this.listRouting.innerHTML = '';
    listRouting.forEach((element, index) => {
      self.listRouting.append(self.addRoute(element,index));
    });
    this.routeFound.caption = listRouting.length + ' Route(s) Found';
    this.toggleRoutes.classList.remove('hidden');
  }
  addRoute(value: any, index: number) {
    let listName: any[] = [];
    value.name.forEach((element: string, index: number) => {
      if (index == value.name.length - 1) {
        listName.push(<i-label class="routing-name" caption={element}></i-label>) 
      } else {
        listName.push(<i-label class="routing-name" caption={element}></i-label>)
        listName.push(<i-icon class="route-icon" width={14} height={14} fill="#fff" name="angle-right" onClick={this.copyToken}></i-icon>)
      }
    });

    let listName2: any[] = [];
    value.second.name.forEach((element: string, index: number) => {
      if (index == value.second.name.length - 1) {
        listName2.push(<i-label class="routing-name" caption={element}></i-label>) 
      } else {
        listName2.push(<i-label class="routing-name" caption={element}></i-label>)
        listName2.push(<i-icon class="route-icon" width={14} height={14} fill="#fff" name="angle-right" onClick={this.copyToken}></i-icon>)
      }
    });

    let listConnected: any[] = [];
    value.listConnected.forEach((element: string, index: number) => {
      if (index == value.listConnected.length - 1) {
        listConnected.push(<i-label class="route-caption" caption={element}></i-label>) 
      } else {
        listConnected.push(<i-label class="route-caption" caption={element}></i-label>)
        listConnected.push(<i-icon class="route-icon" width={14} height={14} fill="#fff" name="arrow-right" onClick={this.copyToken}></i-icon>)
      }
    })

    let listConnected2: any[] = [];
    value.second.listConnected.forEach((element: string, index: number) => {
      if (index == value.second.listConnected.length - 1) {
        listConnected2.push(<i-label class="route-caption" caption={element}></i-label>) 
      } else {
        listConnected2.push(<i-label class="route-caption" caption={element}></i-label>)
        listConnected2.push(<i-icon class="route-icon" width={14} height={14} fill="#fff" name="arrow-right" onClick={this.copyToken}></i-icon>)
      }
    })

    let classRouting = index == 0 ? "pnl-routing routing-selected" : "pnl-routing";
    if (index == 0 ) {
      this.balanceReceive1.innerHTML = value.balance;
    }
    return  <i-panel class={classRouting}>
              <i-row class="mb-1" flex justify="space-between" align="middle" width="100%">
                <i-panel>
                  {listName}
                  <i-panel>
                    <i-row flex justify="start" align="middle" width="100%">
                     {listConnected}
                    </i-row>
                  </i-panel>
                </i-panel>
                <i-panel>
                  <i-panel>
                    <i-label class="ml-auto balanceValue" caption={value.balance}></i-label>
                  </i-panel>
                  {index == 0 ? 
                    <i-panel>
                      <i-label class="ml-auto price-percent" caption={'Save ' + value.saving + '%'}></i-label>
                    </i-panel> 
                    : <i-panel>
                    <i-label class="ml-auto" caption=''></i-label>
                  </i-panel> 
                  }
                </i-panel>
                {index == 0 ?  
                  <i-label class="best-price" caption='Best Price'></i-label>
                  : <i-panel class="no-price"></i-panel>
                }
              </i-row>
              <i-row flex justify="start" align="middle" width="100%">
                <i-panel>
                  {listName2}
                  <i-panel>
                    <i-row flex justify="start" align="middle" width="100%">
                     {listConnected2}
                    </i-row>
                  </i-panel>
                </i-panel>
              </i-row>
            </i-panel>
  }
  hanldeListSelectRoute(source: Control){
    let routes = this.getElementsByClassName('pnl-routing');
    for (let index = 0; index < routes.length; index++) {
      const element = routes[index];
      element.classList.remove('routing-selected');
    }
    if (source.parentElement)
      source.parentElement.classList.add('routing-selected');
    let balanceValue: any = source.getElementsByClassName('balanceValue')[0];
    let balanceReceive = this.getElementsByClassName('balance-receive')[0];
    balanceReceive.innerHTML = balanceValue.caption || '';
  }
  toggleShowRoutes (source: Control) {
    this.listRouting.classList.toggle('active');
    let label: any = source.children[0];
    let icon: any = source.children[1];
    let classRouting = this.listRouting.className.split(" ");
    if (classRouting.indexOf('active') != -1) {
      icon.name = 'angle-up'
      label.caption = "Show Less";
    } else {
      icon.name = 'angle-down'
      label.caption = "Show More";
    }
  }
  filterSearch(source: Input) {
    var filter, ul, li, a, i, txtValue, txtValue1;
    filter = source.value.toUpperCase();
    ul = document.getElementById("listToken");
    if (ul != null) {
      li = ul.getElementsByClassName("pnl-token");
      for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName('div');
          txtValue = a[0].textContent || a[0].innerHTML;
          txtValue1 = a[1].textContent || a[1].innerHTML;
          if (txtValue.toUpperCase().indexOf(filter) > -1 || txtValue1.toUpperCase().indexOf(filter) > -1) {
            li[i].classList.remove('hidden')
          } else {
            li[i].classList.add('hidden')
          }
      }
    }
}
  render() {
    return (
      <i-panel>
        <i-container id="swap-container">
          <i-panel class="bill-board" width={488} height={150}>
            <i-image url="../swap/assets/swap.svg"></i-image>
          </i-panel>
          <i-panel>
            <i-row flex justify="space-between" align="middle">
              <i-panel class="icon-list">
                <i-image class="icon-item" url="../swap/assets/openswap.png"></i-image>
                <i-image class="icon-item" url="../swap/assets/pancakeswap.svg"></i-image>
                <i-image class="icon-item" url="../swap/assets/bakeryswap.svg"></i-image>
              </i-panel>
            </i-row>
          </i-panel>
          <i-panel class="content-swap">
            <i-row class="my-2" flex justify="space-between" align="middle">
              <i-label class="custom-label" caption="You Pay"></i-label>
            </i-row>
            <i-input class="custom--slider" inputType="range" width="100%" height={4} min={0} max={100} stepDots={5} enabled={false} tipFormatter={this.tipFormatter}></i-input>
            <i-panel class="token-box">
              <i-row id="payContainer" class="input--token-container" flex>
                <i-row class="balance-info" flex justify="space-between" align="middle" width="100%">
                  <i-label class="text--grey ml-auto" caption="Balance: 0"></i-label>
                  <i-button class="btn-max" caption="Max" enabled={false}></i-button>
                </i-row>
                <i-panel class="bg-box" width="100%">
                  <i-row class="input--token-box" flex align="middle" width="100%">
                    <i-col sm={6}>
                      <i-button height={41.1} icon="caret-down" iconAlign="right" caption="Select a token" onClick={this.showModal}>
                        <i-image height={22} width={22}></i-image>
                      </i-button>
                    </i-col>
                    <i-col sm={6}>
                      <i-label class="text-value text-right" caption=" - "></i-label>
                    </i-col>
                  </i-row>
                </i-panel>
              </i-row>
            </i-panel>
            <i-panel class="toggle-reverse">
              <i-icon width={32} height={32} name="exchange-alt" onClick={this.onSwap}></i-icon>
            </i-panel>
            <i-panel class="token-box">
              <i-row id="receiveContainer" class="input--token-container" flex>
                <i-row class="balance-info" flex justify="space-between" align="middle" width="100%">
                  <i-col sm={6}>
                    <i-label class="custom-label" caption="You Receive"></i-label>
                  </i-col>
                  <i-col class="text-right" sm={6}>
                    <i-label class="text--grey" caption="Balance: 0"></i-label>
                  </i-col>
                </i-row>
                <i-panel class="bg-box" width="100%">
                  <i-row class="input--token-box" flex align="middle" width="100%">
                    <i-col sm={6}>
                      <i-button height={41.1} icon="caret-down" iconAlign="right" caption="Select a token" onClick={this.showModal}>
                        <i-image height={22} width={22}></i-image>
                      </i-button>
                    </i-col>
                    <i-col sm={6}>
                      <i-label id="balanceReceive1" class="text-value text-right balance-receive" caption=" - "></i-label>
                    </i-col>
                  </i-row>
                  <i-panel id="listRouting"></i-panel>
                  <i-row flex justify="space-between" align="middle">
                    <i-label id="routeFound" class="total-routes text--grey" caption="0 Route(s) Found"></i-label>
                    <i-panel id="toggleRoutes" class="toggle-routes hidden" onClick={this.toggleShowRoutes}>
                      <i-label caption="Show More" ></i-label>
                      <i-icon width={20} height={20} fill="#fff" name="angle-down"></i-icon>
                    </i-panel>
                  </i-row>
                </i-panel>
              </i-row>
            </i-panel>
          </i-panel>
          <i-panel class="swap-btn-container" width="100%">
            <i-button class="btn-swap" height="auto" caption="Connect Wallet"></i-button>
          </i-panel>
          <i-panel class="price-info">
            <i-label class="header" caption="Price Info" />
            <i-row flex justify="space-between" align="middle">
                <i-label caption="Rate"></i-label>
                <i-label class="ml-auto" caption=" - "></i-label>
            </i-row>
            <i-row flex justify="space-between" align="middle">
                <i-label caption="Price Impact"></i-label>
                <i-label class="ml-auto" caption=" - "></i-label>
            </i-row>
            <i-row flex justify="space-between" align="middle">
                <i-label caption="Minimum Received"></i-label>
                <i-label class="ml-auto" caption=" - "></i-label>
            </i-row>
            <i-row flex justify="space-between" align="middle">
                <i-label caption="Transaction Fee"></i-label>
                <i-label class="ml-auto" caption=" - "></i-label>
            </i-row>
          </i-panel>
        </i-container>
        <i-panel id="swapModal" class="hidden">
          <i-container class="modal-container">
            <i-panel class="content-swap">
              <i-row class="modal-title" flex justify="space-between" align="middle" width="100%">
                <i-label class="text--grey mr-auto" caption="Select Token"></i-label>
                <i-icon width={20} height={20} fill="#f15e61" name="times" onClick={this.hideModal}></i-icon>
              </i-row>
              <i-input class="input-search" placeholder="Search name or paste address" onKeyUp={this.filterSearch}>
               <i-icon class="icon-search" width={20} height={20} fill="#fff" name="search" ></i-icon>
              </i-input>
              <i-label class="common-token" caption="Common Token"></i-label>
              <i-row class="wrapper-token" flex justify="start" align="middle" width="100%">
                <i-panel id="0xb32ac3c79a94ac1eb258f3c830bbdbc676483c93" class="btn-token" onClick={this.hanldeSelectToken}>
                  <i-image width={24} height={24} url='../swap/assets/openswap.png'></i-image>
                  <i-label caption="OSWAP"></i-label>
                </i-panel>
                <i-panel id="0xb32ac3c79a94ac1eb258f3c830bbdbc676483c93" class="btn-token" onClick={this.hanldeSelectToken}>
                  <i-image width={24} height={24} url='../swap/assets/BUSD.png'></i-image>
                  <i-label caption="BUSD"></i-label>
                </i-panel>
                <i-panel id="0xb32ac3c79a94ac1eb258f3c830bbdbc676483c93" class="btn-token" onClick={this.hanldeSelectToken}>
                  <i-image width={24} height={24} url='../swap/assets/DAI.png'></i-image>
                  <i-label caption="DAI"></i-label>
                </i-panel>
                <i-panel id="0xb32ac3c79a94ac1eb258f3c830bbdbc676483c93" class="btn-token" onClick={this.hanldeSelectToken}>
                  <i-image width={24} height={24} url='../swap/assets/USDT.png'></i-image>
                  <i-label caption="USDT"></i-label>
                </i-panel>
                <i-panel id="0xb32ac3c79a94ac1eb258f3c830bbdbc676483c93" class="btn-token" onClick={this.hanldeSelectToken}>
                  <i-image width={24} height={24} url='../swap/assets/WBNB.png'></i-image>
                  <i-label caption="WBNB"></i-label>
                </i-panel>
                <i-panel id="0xb32ac3c79a94ac1eb258f3c830bbdbc676483c93" class="btn-token" onClick={this.hanldeSelectToken}>
                  <i-image width={24} height={24} url='../swap/assets/BNB.png'></i-image>
                  <i-label caption="BNB"></i-label>
                </i-panel>
              </i-row>
              <i-panel id="listToken" class="list-token">
                <i-row class="pnl-token" id="0xb32ac3c79a94ac1eb258f3c830bbdbc676483c93" flex justify="start" onClick={this.hanldeListSelectToken} align="middle" width="100%">
                  <i-image width={36} height={36} url='../swap/assets/openswap.png'></i-image>
                  <i-panel>
                    <i-label caption="OSWAP"></i-label>
                    <i-panel>
                      <i-row flex justify="start" align="middle" width="100%">
                        <i-label caption="OSWAP"></i-label>
                        <i-icon id="0xb32ac3c79a94ac1eb258f3c830bbdbc676483c93" width={14} height={14} fill="#fff" name="copy" onClick={this.copyToken}></i-icon>
                        <i-image width={20} height={20} url='../swap/assets/metamask.png' onClick={this.connectMetaMask}></i-image>
                      </i-row>
                    </i-panel>
                  </i-panel>
                  <i-label class="ml-auto" caption="0"></i-label>
                </i-row>
                <i-row class="pnl-token" id="0xb32ac3c79a94ac1eb258f3c830bbdbc676483c93" flex justify="start" onClick={this.hanldeListSelectToken} align="middle" width="100%">
                  <i-image width={36} height={36} url='../swap/assets/openswap.png'></i-image>
                  <i-panel>
                    <i-label caption="BNB"></i-label>
                    <i-panel>
                      <i-row flex justify="start" align="middle" width="100%">
                        <i-label caption="MBNB"></i-label>
                        <i-icon id="0xb32ac3c79a94ac1eb258f3c830bbdbc676483c93" width={14} height={14} fill="#fff" name="copy" onClick={this.copyToken}></i-icon>
                        <i-image width={20} height={20} url='../swap/assets/metamask.png' onClick={this.connectMetaMask}></i-image>
                      </i-row>
                    </i-panel>
                  </i-panel>
                  <i-label class="ml-auto" caption="0"></i-label>
                </i-row>
                <i-row class="pnl-token" id="0xb32ac3c79a94ac1eb258f3c830bbdbc676483c93" flex justify="start" onClick={this.hanldeListSelectToken} align="middle" width="100%">
                  <i-image width={36} height={36} url='../swap/assets/openswap.png'></i-image>
                  <i-panel>
                    <i-label caption="OSWAP"></i-label>
                    <i-panel>
                      <i-row flex justify="start" align="middle" width="100%">
                        <i-label caption="OSWAP"></i-label>
                        <i-icon id="0xb32ac3c79a94ac1eb258f3c830bbdbc676483c93" width={14} height={14} fill="#fff" name="copy" onClick={this.copyToken}></i-icon>
                        <i-image width={20} height={20} url='../swap/assets/metamask.png' onClick={this.connectMetaMask}></i-image>
                      </i-row>
                    </i-panel>
                  </i-panel>
                  <i-label class="ml-auto" caption="0"></i-label>
                </i-row>
              </i-panel>
            </i-panel>
          </i-container>
        </i-panel>
      </i-panel>
    )
  }
}