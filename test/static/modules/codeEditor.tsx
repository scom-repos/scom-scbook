// import { LanguageType } from '@ijstech/code-editor/code-editor'
import {
  CodeEditor,
  ComboBox,
  customElements,
  Module,
} from '@ijstech/components'
import './codeEditor.style'

@customElements('i-code-editor-module')
export class CodeEditorModule extends Module {
  private editor1: CodeEditor
  // private languageBox: ComboBox

  render(): any {
    // const dataList = ['graphql', 'javascript', 'type', 'json'].sort();

    return (
      <i-panel float="none" class="wrapper">
        <i-panel float="none" class="editor-box">
          <i-tabs class="tab-justified" width="100%" activePageIndex={0}>
            <i-tab caption="Home" tabSheetId="home"></i-tab>
            <i-tab caption="Profile" tabSheetId="profile"></i-tab>
            <i-tab-sheet id="home">
              <i-code-editor
                id="editor1"
                width="100%"
                height="646px"
                language="markdown"
              ></i-code-editor>
            </i-tab-sheet>
            <i-tab-sheet id="profile">
              <i-label id="label1" caption="Name: "></i-label>
            </i-tab-sheet>
          </i-tabs>
        </i-panel>
      </i-panel>
    )
  }
}
