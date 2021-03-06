import React from 'react';
import './assets/header.scss';
// import logo from './assets/logo.png';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { makeSelectOrgInfo } from '../../containers/App/selectors';
import Search from 'containers/Search/Loadable';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import logo from './assets/new-logo.png';
class Header extends React.PureComponent {
  render() {
    const { orgInfo } = this.props;
    const orgInfoData =
      orgInfo && orgInfo.size > 0 ? orgInfo.toJS().dataList[0] : {};

    return (
      <header id="header">
        <Navbar expand="lg">
          <Container>
            <Link className="navbar-brand" to="/">
              {/* <img className="img-fluid" src={logo} alt="" /> */}
              <div className="logo__holder">
                <img className="brand__logo" src={logo} alt="PCSC logo" />
              </div>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav ">
              <Nav className="ml-auto align-items-center">
                <NavLink exact className="nav-link" to="/">
                  Services
                </NavLink>
                <a className="nav-link" href="https://www.esrtech.io/" target="_blank">
                  ABOUT US
                </a>
                <NavLink exact className="nav-link" to="/register">
                  Register
                </NavLink>
                <NavLink className="nav-link btn-primary" to="/login">
                  Login 
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  // orgInfo: makeSelectOrgInfo(),
});

export default connect(mapStateToProps)(Header);
