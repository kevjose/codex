import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { codeAnalyse } from '../../actions/analysisActions';
import CodeResult from './CodeResult';

import CodeEditor from '../controls/CodeEditor';
const languages = ['javascript', 'python'];

class Dashboard extends Component {
  state = {
    selectedLang: 0,
    task: {
      lang: 'javascript',
      code: ''
    }
  };
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  handleLangChange = event => {
    const index = parseInt(event.target.value, 10);
    console.log(index);
    const { task } = this.state;
    task.lang = languages[index];
    task.code = '';
    return this.setState({ selectedLang: index, task });
  };

  handleCodeChange = code => {
    const { task } = this.state;
    task.lang = languages[this.state.selectedLang];
    task.code = code;
    return this.setState({ task });
  };

  handleRun = event => {
    event.preventDefault();
    if (this.state.task.code) {
      const { task } = this.state;
      task.userId = this.props.auth.user.id;
      this.props.codeAnalyse(task);
    }
  };

  render() {
    const { user } = this.props.auth;
    return (
      <div className="container valign-wrapper">
        <div className="row">
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

          <div className="col s12 center-align">
            <label>Browser Select</label>
            <select
              className="browser-default"
              onChange={this.handleLangChange}
              value={this.state.selectedLang}
            >
              <option value="" disabled>
                Choose Coding Language
              </option>
              <option value="0">JavaScript (jshint)</option>
              <option value="1">Python (flake8)</option>
            </select>
            <br />
            <CodeEditor
              onChange={this.handleCodeChange}
              code={this.state.task.code}
              mode={languages[this.state.selectedLang]}
            />
            <br />
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
              onClick={this.handleRun}
            >
              Submit
              <i className="material-icons right">send</i>
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link
              to="/submissions"
              className="btn waves-effect waves-light hoverable blue"
            >
              All submissions
            </Link>
            <br />
            <CodeResult />
          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  analysis: state.analysis
});
export default connect(
  mapStateToProps,
  { logoutUser, codeAnalyse }
)(Dashboard);
