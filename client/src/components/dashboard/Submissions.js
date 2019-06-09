import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../actions/authActions';
import { userSubmissions } from '../../actions/submissionAction';

class Submissions extends React.Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  componentDidMount() {
    if (this.props.auth) this.props.userSubmissions(this.props.auth.user.id);
  }

  renderList() {
    if (this.props.submissions && this.props.submissions.response) {
      return this.props.submissions.response.map(sub => {
        console.log(sub);
        return (
          <div className="card" key={sub._id}>
            <div className="card-content black-text">
              <p>
                <strong>Language:&nbsp;&nbsp;&nbsp;&nbsp;</strong> {sub.lang}
              </p>
              <strong>Code:&nbsp;&nbsp;&nbsp;&nbsp;</strong>
              <pre>{sub.code}</pre>
              <br />
              <time>
                <strong>Created At:&nbsp;&nbsp;&nbsp;&nbsp;</strong>
                {sub.created_at}
              </time>
            </div>
            <div className="card-action  blue lighten-5">
              <strong>Analysis:&nbsp;&nbsp;&nbsp;&nbsp;</strong>
              <pre style={{ whiteSpace: 'pre-wrap' }}>{sub.analysis}</pre>
            </div>
          </div>
        );
      });
    } else {
      return <h5>No Submissions for now</h5>;
    }
  }
  render() {
    const { user } = this.props.auth;
    console.log(this.props);
    return (
      <div className="container valign-wrapper">
        <div className="row">
          <div className="col s12 left-align">
            <Link to="/dashboard" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              Dashboard
            </Link>
            <br />
            <br />
          </div>
          <div className="col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(' ')[0]}
              <p className="flow-text grey-text text-darken-1">
                You are logged into{' '}
                <span style={{ fontFamily: 'monospace' }}>
                  Codex- The Code Analysis
                </span>{' '}
                Platform &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button
                  className="btn-floating red"
                  onClick={this.onLogoutClick}
                >
                  <i className="material-icons">power_settings_new</i>
                </button>
              </p>
            </h4>
          </div>
          <div className="col s12 left-align">
            <h4>List of all submissions</h4>
            {this.renderList()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  submissions: state.submissions
});
export default connect(
  mapStateToProps,
  { logoutUser, userSubmissions }
)(Submissions);
