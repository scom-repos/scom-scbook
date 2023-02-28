import { customElements, Module, Collapse, Clipboard, Control, observable, Modal, Slot, Upload, Panel } from '@ijstech/components';
import './moduleTest.css';

@customElements('i-module-test')
export class ModuleTest extends Module {
  private collapse1: Collapse;
  private collapse2: Collapse;
  private collapse3: Collapse;

  private uploadModal: Modal;
  private upload1: Upload;
  private uploadpanel1: Panel;

  @observable()
    
  private expandedVal: string;

  handleChange(source: Control, value: boolean) {
    this.expandedVal = source.id;
    this.collapse1.expanded = value ? this.expandedVal === 'collapse1' : false;
    this.collapse2.expanded = value ? this.expandedVal === 'collapse2' : false;
    this.collapse3.expanded = value ? this.expandedVal === 'collapse3' : false;
  }

  handlePopup() {
    this.uploadModal.visible = true;
  }

  btnCancelModalClick() {
    this.uploadModal.visible = false;
    this.upload1.resetInput();
  }

  btnConfirmModalClick() {
    this.uploadModal.visible = false;
    const files = Array.from(this.upload1.uploadedFiles);
    const elm: any = this.upload1.cropImage(files[0]);
    elm && this.uploadpanel1.appendChild(elm);
  }

  handleBeforeUpload(file: File) {
    const isLt2M = file.size / 1024 / 1024 < 2
    if (!isLt2M) {
      console.error('File size can not exceed 2MB!')
    }
    return isLt2M
  }

  handleChangeFile(source: Control, value: FileList) {
    // console.log(value);
  }

  render() {
    return (
      <i-panel top={40} width="100%">
        <i-panel class="wrapper-panel">
          <i-panel class="panel-item">
            {/* Collapse */}
            <i-panel top={0}>
              <i-collapse expanded={true}>
                <i-collapse-summary
                  icon="angle-right"
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <i-label caption="Accordion 1"></i-label>
                </i-collapse-summary>
                <i-collapse-details>
                  <i-label caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget."></i-label>
                </i-collapse-details>
              </i-collapse>
              <i-collapse>
                <i-collapse-summary
                  icon="angle-right"
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <i-label caption="Accordion 2"></i-label>
                </i-collapse-summary>
                <i-collapse-details>
                  <i-label caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget."></i-label>
                </i-collapse-details>
              </i-collapse>
            </i-panel>
            <i-panel top={200}>
              <i-collapse id="collapse1" expanded={true} onChange={this.handleChange}>
                <i-collapse-summary
                  icon="angle-right"
                  aria-expanded={this.expandedVal === 'collapse1'}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <i-label caption="Accordion 1"></i-label>
                </i-collapse-summary>
                <i-collapse-details
                  aria-labelledby="panel1bh-header"
                  aria-hidden="false"
                  id="panel1bh-content"
                >
                  <i-label caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget."></i-label>
                </i-collapse-details>
              </i-collapse>

              <i-collapse id="collapse2" onChange={this.handleChange}>
                <i-collapse-summary
                  icon="angle-right"
                >
                  <i-label caption="Accordion 2"></i-label>
                </i-collapse-summary>
                <i-collapse-details>
                  <i-label caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget."></i-label>
                </i-collapse-details>
              </i-collapse>
              <i-collapse id="collapse3" enabled={false} onChange={this.handleChange}>
                <i-collapse-summary
                  icon="angle-right"
                >
                  <i-label caption="Accordion 3"></i-label>
                </i-collapse-summary>
                <i-collapse-details>
                  <i-label caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget."></i-label>
                </i-collapse-details>
              </i-collapse>
            </i-panel>
          </i-panel>

          <i-panel id="uploadpanel1" class="panel-item">
            {/* Upload */}
            <i-panel onClick={this.handlePopup} class="upload-panel">
              <i-icon name="camera" width="20" height="20" />
              <i-label caption="Upload Image" />
            </i-panel>

            <i-modal id="uploadModal" title="Select Image">
              <i-panel id='slotModalContent'>
                <i-upload
                  id="upload1" drag
                  listType="picture"
                  beforeUpload={this.handleBeforeUpload}
                  caption="Drag and Drop image"
                  showFileList
                  showPreviewInDropzone
                  crop="1.77777"
                  onChange={this.handleChangeFile}
                >
                </i-upload>
              </i-panel>
              <i-panel id='slotModalButtons'>
                <i-panel class="upload-btns">
                  <i-button caption="Cancel" onClick={this.btnCancelModalClick.bind(this)}></i-button>
                  <i-button caption="Confirm" onClick={this.btnConfirmModalClick.bind(this)}></i-button>
                </i-panel>
              </i-panel>
            </i-modal>
          </i-panel>
        </i-panel>
        
        <i-panel top={400} width="100%">
          {/* <i-clipboard value='Text to copy'/> */}
          <i-divider top={80} width={300} height={5}>
            <i-icon width={16} height={16} name="star" fill="grey"></i-icon>
          </i-divider>
          <i-panel top={120} width={500}>
            <i-link href="https://www.google.com.vn/">
              <i-label width={50} left={0} caption="Link 1" />
            </i-link>
            <i-divider height={30} left={60} direction="vertical" fill="blue" />
            <i-link left={80} href="https://www.google.com.vn/" caption="Link 2" />
            <i-divider height={30} left={130} direction="vertical" fill="blue" />
          </i-panel>
        </i-panel>
      </i-panel>
    )
  }
}
