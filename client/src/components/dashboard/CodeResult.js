import React from 'react';
import { connect } from 'react-redux';

const CodeResult = props => {
  console.log(props);
  if (!props.analysis) {
    return <div />;
  } else if (props.analysis && props.analysis.response.status === '0') {
    return (
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">Success</span>
          <p>{props.analysis.response.message}</p>
        </div>
      </div>
    );
  } else if (props.analysis && props.analysis.response.status !== '0') {
    return (
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">Warning</span>
          <p>{props.analysis.response.message}</p>
        </div>
      </div>
    );
  } else {
    return <div />;
  }
};

const mapStateToProps = state => {
  return { analysis: state.analysis };
};

export default connect(mapStateToProps)(CodeResult);
