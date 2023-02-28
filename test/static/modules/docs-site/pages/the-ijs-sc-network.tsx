import { ControlElement } from '@ijstech/base/index'
import { customElements, Module } from '@ijstech/components'
import './the-ijs-sc-network.css'

export interface TheIjsScNetworkElement extends ControlElement {}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['i-the-ijs-sc-network']: TheIjsScNetworkElement
    }
  }
}

@customElements('i-the-ijs-sc-network')
export class TheIjsScNetwork extends Module {
  render() {
    this.style.width = '100%'
    this.style.height = 'auto'

    return (
      <i-panel>
        <i-markdown
          src="https://api.github.com/repos/parc6502/hours-frontend/contents/README.md"
          // caption="## The IJS Secure Compute Network
          // The IJS Secure Compute Network consists of developers, SC Runners, Auditors, and Curators to provide services to the Network, and serve the web3 applications development and deployment. End users will find and use the web3 applications in the marketplace on the network.
          // To ensure economic security of The Secure Compute Network and the integrity of web3 applications, participants stake and use IJS token (IJST). IJST is a work token that is an ERC-20 on the Ethereum (BEP20 on the Binance Smart Chain) blockchain, used to allocate resources in the network. Developers, Runners, and Curators can provide services and earn income from the network, proportional to the amount of work they perform and their IJST stake."
        ></i-markdown>
      </i-panel>
    )
  }
}
