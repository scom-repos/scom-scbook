import { customElements, Module, Styles, Control } from '@ijstech/components';
import './nav.css';
const Theme = Styles.Theme.ThemeVars;
Styles.Theme.applyTheme(Styles.Theme.darkTheme);

@customElements('i-nav')
export class Nav extends Module {
  render() {
    return (
      <i-panel>
        <i-container>
          <i-header height="auto">
            <i-row flex align="middle">
              <i-col span={7}>
                <i-image url='../assets/logo_transparent.png'></i-image>
                <i-label caption='SECCOM' class="logo"></i-label>
              </i-col>
              <i-col span={5}>
                <i-menu class="hidden-xs-only">
                  <i-menu-item title='HOME' href='../page1/page1.html' />
                  <i-menu-item title='SECCOM Project' href='../page2/page2.html' />
                </i-menu>
              </i-col>
            </i-row>
          </i-header>
        </i-container>
      </i-panel>
    )
  }
}

@customElements('i-nav-full')
export class NavFull extends Module {
  render() {
    return (
      <i-panel class="nav">
        <i-container>
          <i-header height="auto">
            <i-row flex align="middle">
              <i-col span={6} xs={6} sm={9}>
                <i-row flex justify="space-between" align="middle">
                  <i-panel class="logo">
                    <i-row flex align="middle">
                      <i-image width={100} height={100} url="../assets/logo_transparent.png" onClick={() => window.location.assign('../page1/page1.html')} />
                      <i-label caption='SECCOM'></i-label>
                    </i-row>
                  </i-panel>
                  <i-menu class="hidden-xs-only">
                    <i-menu-item title='HOME' href='../page1/page1.html' />
                    <i-menu-item title='SECCOM PROJECT' href='../page2/page2.html' />
                    <i-menu-item title='ANLACHART' href='#' />
                  </i-menu>
                </i-row>
              </i-col>
              <i-col span={6} xs={6} sm={3}>
                <i-row flex justify="end">
                  <i-button class="btn-outline-primary" caption="Connect" height={40} width={160}></i-button>
                </i-row>
              </i-col>
            </i-row>
          </i-header>
        </i-container>
      </i-panel>
    )
  }
}