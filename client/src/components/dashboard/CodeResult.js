import React from 'react';
import { connect } from 'react-redux';

const CodeResult = props => {
  console.log(props);
  if (!props.analysis) {
    return <div />;
  } else if (
    props.analysis &&
    props.analysis.response.message === 'No code problems'
  ) {
    return (
      <div className="card green darken-1">
        <div className="card-content white-text">
          <span className="card-title">Success</span>
          <p>{props.analysis.response.message}</p>
        </div>
      </div>
    );
  } else if (
    props.analysis &&
    props.analysis.response.message !== 'No code problems'
  ) {
    return (
      <div className="card orange darken-1">
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
