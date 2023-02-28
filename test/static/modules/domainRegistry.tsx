import {customModule, customElements, Control, Button, Input, Module} from '@ijstech/components';
import {Wallet, WalletPlugin} from '@ijstech/eth-wallet';
import {Contracts} from '@ijstech/sc-core';

@customModule
@customElements('i-domain-registry')
export class DomainRegistry extends Module{
    _wallet: Wallet;
    btnAddDomain: Button;
    edtDomainName: Input;
    edtContractAddress: Input;
    edtCid: Input;
    constructor(parent?: Control, options?: any) {  
        console.dir('Domain Registry')      
        super(parent, options);             
    };
    get wallet(): Wallet{
        if (!this._wallet)
            this._wallet = new Wallet()
        return this._wallet;
    }
    async btnAddDomainClick(){
        let contract = new Contracts.DomainInfo(this.wallet, this.edtContractAddress.value);
        let result = await contract.updateDomainInfo({
            domainName: this.edtDomainName.value,
            ipfsCid: this.edtCid.value
        });
    };
    async btnGetDomainClick(){        
        let accounts = await this.wallet.accounts;        
        let contract = new Contracts.DomainInfo(this.wallet, this.edtContractAddress.value);
        let result = await contract.getDomainInfo({
            domainName: this.edtDomainName.value,
            owner: accounts[0]
        });
        this.edtCid.value = result;
    }
    async btnDeployClick(){
        let contract = new Contracts.DomainInfo(this.wallet);
        let result = await contract.deploy();
        this.edtContractAddress.value = result;
    }
    async btnConnectClick(){
        this.wallet.connect(WalletPlugin.MetaMask);
    }
    render(){
        return <i-panel>
            <i-panel float='left' width={800}>
                <i-label width={160} caption="Contract Address"></i-label>
                <i-input id="edtContractAddress" width={400} value="0x0314224bBB92a82A344c1b61b60543d51da50614"></i-input>
            </i-panel>                
            <i-panel float='left' width={800}>
                <i-label width={160} caption="Domain Name"></i-label>
                <i-input id="edtDomainName" width={400} value={window.location.hostname}></i-input>
            </i-panel>                
            <i-panel float='left' width={800}>
                <i-label width={160} caption="Package CID"></i-label>
                <i-input id="edtCid" width={400} value=""></i-input>
            </i-panel>                
            <i-panel float='left' width={500}>
                <i-button id='btnConnect' caption="Connect" onClick={this.btnConnectClick}></i-button>
                <i-button id='btnDeploy' caption="Deploy" onClick={this.btnDeployClick}></i-button>
                <i-button id='btnGetDomain' caption="Get Info" onClick={this.btnGetDomainClick}></i-button>
                <i-button id='btnAddDomain' caption="Register" onClick={this.btnAddDomainClick}></i-button>
            </i-panel>                
        </i-panel>
    }
};
export default DomainRegistry;