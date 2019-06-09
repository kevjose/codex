import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
class Landing extends Component {
  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }
  render() {
    return (
      <div style={{ height: '75vh' }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Codex</b> A code analysis plaftorm built with <br />
              <span style={{ fontFamily: 'monospace' }}>
                MongoDB, ExpressJS & React
              </span>
            </h4>
            <p className="flow-text grey-text text-darken-1">
              Full-stack app with user authentication via passport and JWTs
            </p>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: '140px',
                  borderRadius: '3px',
                  letterSpacing: '1.5px'
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: '140px',
                  borderRadius: '3px',
                  letterSpacing: '1.5px'
                }}
                className="btn btn-large waves-effect waves-light hoverable red white-text"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// export default Landing;

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps)(Landing);
