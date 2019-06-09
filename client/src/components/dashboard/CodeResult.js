import React from 'react';
import { connect } from 'react-redux';

const CodeResult = props => {
  console.log(props);
  if (!props.analysis) {
    return <div />;
  }

  return (
    <div>
      <pre>{props.analysis.response.message}</pre>
    </div>
  );
};

const mapStateToProps = state => {
  return { analysis: state.analysis };
};

export default connect(mapStateToProps)(CodeResult);
