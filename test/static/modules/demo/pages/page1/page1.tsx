import { customElements, Module, Styles, Control } from '@ijstech/components';
import './page1.css';
const Theme = Styles.Theme.ThemeVars;
Styles.Theme.applyTheme(Styles.Theme.darkTheme);

const defaultCaption = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,';
const featureList = [
  { title: 'Instant settlement', desc: defaultCaption },
  { title: 'Flexibility', desc: defaultCaption },
  { title: 'Blockchain technology', desc: defaultCaption },
  { title: 'Experienced team', desc: defaultCaption },
  { title: 'Connect free', desc: defaultCaption },
  { title: 'AI matching', desc: defaultCaption },
  { title: 'Low cost', desc: defaultCaption },
  { title: 'Digital personas', desc: defaultCaption }
];

@customElements('i-home')
export class Home extends Module {

  genderListItem(title: string, order: number) {
    const imagePath = `../assets/f${order}.png`;
    return (
      <i-col xs={12} sm={6} md={6} lg={3}>
        <i-section class="feature">
          <i-image url={imagePath}></i-image>
          <i-label displayType="block" caption={title} />
          <i-label displayType="block" caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s," />
        </i-section>
      </i-col>
    )
  }

  genderUpcommingItem() {
    return (
      <i-list-view-item borderless blurredOverlay={false} background="none">
        <i-image width="10px" height="10px" url="../assets/point.svg" />
        <i-label caption="Lorem Ipsum"></i-label>
      </i-list-view-item>
    )
  }

  render() {
    return (
      <i-panel class="landing">
        <i-container class="section-1 bg-overlay">
          <i-row flex align="middle" height="100%">
            <i-col sm={12} md={JSON.stringify({ span: 4, offset: 2 })} class="py-2">
              <i-label class="lb-intro" caption="Discover a new ways to enjoy your world"></i-label>
              <i-section>
                <i-label
                  class="lb-intro--lg"
                  caption="We build the future. You have the future."
                />
              </i-section>
              <i-label
                displayType="block"
                class="lb-intro--sm"
                caption="We have over 10 year experience in business consulting arena. We have over 10 year experience in business consulting arena and crypto."
              />
              <i-section class="btn-group">
                <i-button class="btn mb-1" caption="LEARN MORE"></i-button>
                <i-button class="btn mb-1" caption="CONTACT US"></i-button>
              </i-section>
            </i-col>
            <i-col sm={12} md={6}>
              <i-image url="../assets/home_1.png"></i-image>
            </i-col>
          </i-row>
        </i-container>

        <i-container class="section-2 bg-default">
          <i-section class="text-center m-auto" width="80%">
            <i-image class="mb-2-5" url="../assets/group_1.png"></i-image>
            <i-label class="lb-title mb-1" displayType="block" caption="How It Works"></i-label>
            <i-label class="lb-subtitle" displayType="block" caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></i-label>
          </i-section>
          <i-section class="p-12 mt-4" height="100%">
            <i-row flex align="middle" height="100%" gutter={50}>
              <i-col sm={12} md={6}>
                <i-image url="../assets/home_2.png"></i-image>
              </i-col>
              <i-col sm={12} md={6}>
                <i-list-view class="section-2_list" marginTop={0}>
                  <i-list-view-item>
                    <i-section class="list-number-wrap">
                      <i-label class="list-number" caption="1"></i-label>
                    </i-section>
                    <i-section>
                      <i-label class="lb-subtitle bold mb-1" displayType="block" caption="Powerful Online Platform"></i-label>
                      <i-label class="lb-subtitle" displayType="block" caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,"></i-label>
                    </i-section>
                  </i-list-view-item>
                  <i-list-view-item>
                    <i-section class="list-number-wrap">
                      <i-label class="list-number" caption="2"></i-label>
                    </i-section>
                    <i-section>
                      <i-label class="lb-subtitle bold mb-1" displayType="block" caption="Brings More Transparency And Speed"></i-label>
                      <i-label class="lb-subtitle" displayType="block" caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,"></i-label>
                    </i-section>
                  </i-list-view-item>
                  <i-list-view-item>
                    <i-section class="list-number-wrap">
                      <i-label class="list-number" caption="3"></i-label>
                    </i-section>
                    <i-section>
                      <i-label class="lb-subtitle bold mb-1" displayType="block" caption="Special For Multiple Use Capabilities"></i-label>
                      <i-label class="lb-subtitle" displayType="block" caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,"></i-label>
                    </i-section>
                  </i-list-view-item>
                </i-list-view>
              </i-col>
            </i-row>
          </i-section>
        </i-container>

        <i-container class="section-2 text-center bg-overlay">
          <i-section class="text-center m-auto" width="80%">
            <i-image class="mb-2-5" url="../assets/group_1.png"></i-image>
            <i-label class="lb-title mb-1" displayType="block" caption="Our Main Feature"></i-label>
          </i-section>
          <i-section class="p-12 grid" height="100%">
            <i-row flex align="middle" gutter={70} class="mt-2">
              {this.genderListItem(featureList[0].title, 1)}
              {this.genderListItem(featureList[1].title, 2)}
              {this.genderListItem(featureList[2].title, 3)}
              {this.genderListItem(featureList[3].title, 4)}
            </i-row>
            <i-row flex align="middle" gutter={70} class="mt-2">
              {this.genderListItem(featureList[4].title, 5)}
              {this.genderListItem(featureList[5].title, 6)}
              {this.genderListItem(featureList[6].title, 7)}
              {this.genderListItem(featureList[7].title, 8)}
            </i-row>
          </i-section>
        </i-container>

        <i-container class="section-2 bg-overlay">
          <i-section class="text-center m-auto" width="80%">
            <i-image class="mb-2-5" url="../assets/group_1.png"></i-image>
            <i-label class="lb-title mb-1" displayType="block" caption="How It Works"></i-label>
          </i-section>
          <i-section class="p-12 mt-4" height="100%">
            <i-row flex align="middle" height="100%" gutter={50}>
              <i-col sm={12} md={6}>
                <i-label class="lb-2 mb-1-875" displayType="block" caption="We complete every project with extra care for customers" />
                <i-label class="lb-subtitle mb-1-875" displayType="block" caption={defaultCaption} />
                <i-label class="lb-subtitle mb-1-875" displayType="block" caption={defaultCaption} />
                <i-label class="lb-subtitle mb-1-875" displayType="block" caption={defaultCaption} />
              </i-col>
              <i-col sm={12} md={6}>
                <i-image url="../assets/home_3.svg"></i-image>
              </i-col>
            </i-row>
          </i-section>
        </i-container>

        <i-container class="section-2 bg-overlay">
          <i-section class="text-center m-auto" width="80%">
            <i-image class="mb-2-5" url="../assets/group_1.png"></i-image>
            <i-label class="lb-title mb-1" displayType="block" caption="Upcoming Function"></i-label>
          </i-section>
          <i-section class="p-12 mt-4" height="100%">
            <i-row flex align="middle" height="100%" gutter={50}>
              <i-col sm={12} md={6}>
                <i-image url="../assets/home_4.png"></i-image>
              </i-col>
              <i-col sm={12} md={6}>
                <i-list-view class="upcomming" marginTop={0} columns={2} type="grid">
                  {this.genderUpcommingItem()}
                  {this.genderUpcommingItem()}
                  {this.genderUpcommingItem()}
                  {this.genderUpcommingItem()}
                  {this.genderUpcommingItem()}
                  {this.genderUpcommingItem()}
                  {this.genderUpcommingItem()}
                  {this.genderUpcommingItem()}
                </i-list-view>
              </i-col>
            </i-row>
          </i-section>
        </i-container>

      </i-panel>
    )
  }
}
