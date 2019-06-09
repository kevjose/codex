import React from 'react';
// Import Brace and the AceEditor Component
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/mode/python';
// Import a Theme (okadia, github, xcode etc)
import 'brace/theme/monokai';

const editorStyle = {
  border: '1px solid lightgray'
};

class CodeEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onChange = this.onChange.bind(this);
  }

  onChange(newValue) {
    this.props.onChange(newValue);
  }

  render() {
    return (
      <AceEditor
        style={editorStyle}
        readOnly={false}
        onChange={this.onChange}
        mode={this.props.mode}
        width="100%"
        height="400px"
        theme="monokai"
        name="aceCodeEditor"
        // onLoad={this.onLoad}
        fontSize={14}
        showPrintMargin
        showGutter
        highlightActiveLine
        value={this.props.code}
        editorProps={{
          $blockScrolling: true,
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true
        }}
        setOptions={{
          showLineNumbers: true,
          tabSize: 2
        }}
      />
    );
  }
}

export default CodeEditor;
