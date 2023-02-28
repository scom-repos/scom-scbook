import {
  customElements,
  ComboBox,
  Module,
  Toast,
  Styles,
} from '@ijstech/components'

@customElements('i-module4')
export class Module4 extends Module {
  private comboBox: ComboBox
  private toast: Toast = new Toast()

  private buttonClick() {
    this.toast.warning('Inconceivable!', 'Title here', {
      closeButton: true,
      progressBar: true,
      positionClass: 'toast-top-right',
      showDuration: 200,
      onShown: function () {
        // console.log('call back onShown!')
      },
      hideDuration: 1500,
      onHidden: function () {
        // console.log('call back onHidden!')
      },
    })
  }

  render() {
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

    Styles.Theme.applyTheme(Styles.Theme.darkTheme)
    return (
      <i-panel float="none">
        <i-menu top={40} left={20}>
          <i-menu-item title="Products" hasChildren>
            <i-menu isDropdown>
              <i-menu-item
                title="Graph Explorer"
                content="Explore subgraphs and interact with the protocol"
                isDropdown
              />
              <i-menu-item
                title="Subgraph Studio"
                content="Create, manage and publish subgraphs and API keys"
                isDropdown
              />
              <i-menu-item
                title="Hosted Service"
                content="Create and explore subgraphs on the Hosted Service"
                isDropdown
              />
            </i-menu>
          </i-menu-item>
          <i-menu-item title="Blog" href="#" />
          <i-menu-item title="Security" href="#" />
        </i-menu>

        <i-menu top={40} right={40} title="The graph" platform="mobile">
          <i-slot name="The graph">
            <i-menu-item title="Products" hasChildren platform="mobile" />
            <i-menu-item
              title="Blog"
              href="#"
              platform="mobile"
            />
            <i-menu-item
              title="Security"
              href="#"
              platform="mobile"
            />
          </i-slot>
          <i-slot name="Products">
            <i-menu-item title="Graph Explorer" platform="mobile" isDropdown />
            <i-menu-item title="Subgraph Studio" platform="mobile" isDropdown />
            <i-menu-item title="Hosted Service" platform="mobile" isDropdown />
          </i-slot>
        </i-menu>

        <i-label
          top={90}
          left={20}
          width={200}
          caption="Bobby' movies"
        ></i-label>
        <i-combo-box
          id="comboBox"
          top={110}
          left={20}
          width={180}
          height={28}
          value={dataList[0]}
          items={JSON.stringify(dataList)}
          icon="angle-double-down"
        ></i-combo-box>
        <i-label
          id="label1"
          top={150}
          left={20}
          width={200}
          caption={this.comboBox.value}
        ></i-label>
        <i-button
          id="button1"
          data-tooltip="Test Tooltip"
          data-placement="right"
          top={180}
          left={20}
          width={80}
          caption="Toast"
          onClick={this.buttonClick}
        ></i-button>
        <i-button-dropdown
          id="button2"
          data-tooltip="Test Tooltip"
          data-placement="right"
          top={240}
          left={20}
          caption="Signal"
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
        <i-alert
          top={110}
          left={250}
          width="386"
          title="Be careful curating subgraphs"
          content="Subgraphs may not be deployed by the project teams and the value of curation shares can fluctuate significantly up or down."
        ></i-alert>
        <i-toast />
        <i-tooltip />
      </i-panel>
    )
  }
}
