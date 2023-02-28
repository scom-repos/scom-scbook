import {customElements, Control, Button, Module, observable, Iframe, Radio} from '@ijstech/components';
import {Wallet} from "@ijstech/eth-wallet";

@customElements('i-module2')
export class Module2 extends Module{        
    private btnAddress: Button;
    private btnBalance: Button;
    private btnConnect: Button;
    private wallet: Wallet;

    @observable()
    private walletInfo = {
        address: '',
        balance: '',
        networkId: ''
    }
    constructor(parent?: Control, options?: any) {        
        super(parent, options);        
        this.wallet = new Wallet();        
    }
    async initWallet(){
        this.wallet.onAccountChanged = (address: string)=>{
            this.walletInfo.address = address;
        }                
        this.walletInfo.address = this.wallet.address;
    }
    async btnBalanceClick(source: Control){                
        let balance = await this.wallet.balance;
        this.walletInfo.balance = balance.toString();   
    }    
    async btnAddressClick(source: Control){                
        this.walletInfo.address = this.wallet.address;
    }    
    btnConnectClick(source: Control, event: Event){
        this.wallet.metaMask.connect();
    }
    handleOnChange(source: Control, value: any){
        console.dir('handleOnChange')
        console.dir(source)
        console.dir(value);
    }
    render(){
        return <i-panel left={40} top={40}>
                <i-label id="label1" top={10} caption="Address:"></i-label>
                <i-label id="label2" top={10} left={100} width={120} caption={this.walletInfo.address}></i-label>                
                <i-label id="label1" top={40} caption="Balance:"></i-label>
                <i-label id="label2" top={40} left={100} width={120} caption={this.walletInfo.balance}></i-label>                
                <i-button id="btnConnect" icon="grip-lines" top={70} caption='Connect' onClick={this.btnConnectClick}></i-button>                
                <i-button id="btnAddress" top={70} left={100} caption='Address' onClick={this.btnAddressClick}></i-button>
                <i-button id="btnBalance" top={70} left={200} caption='Balance' onClick={this.btnBalanceClick}></i-button>                
            </i-panel>
    }
}