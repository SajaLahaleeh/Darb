import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./style.css";
import Header from "../../CommonComponents/Header";
import ContactSection from "../../Components/ContactSection";
import Footer from "../../CommonComponents/Footer";

import login from "../../assets/login.png";

class Login extends Component {
  state = {
    email: "",
    password: "",
    emailforgetPassword: "",
    emptyInput: "",
    alert: false,
    message: ""
  };

  changName = event => {
    const { target } = event;
    const { value, name } = target;
    this.setState({ [name]: value });
  };

  goLogedin = event => {
    event.preventDefault();
    const { email, password } = this.state;
    const { history } = this.props;

    if (!password.length) {
      this.setState({ emptyInput: "true" });
    } else {
      axios
        .post("https://darbserver.appspot.com/login", { email, password })
        .then(({ data }) => {
          if (data.data) {
            history.push("/");
          } else {
            this.setState({
              alert: true,
              message: "some things is wrong try again"
            });
            this.setState({ errorMsg: "true" });
          }
        })
        .catch(error => {
          this.setState({
            alert: true,
            message: "some things is wrong try again"
          });
        });
    }
  };

  render() {
    this.state.alert
      ? setTimeout(() => this.setState({ alert: false }), 3000)
      : null;
    const { email, password, emailforgetPassword } = this.state;
    return (
      <div>
        <Header />
        <div className='login-page-container'>
          <div className='login-form-container'>
            <h2 className='login-title'>Welcome back</h2>
            <form onSubmit={this.goLogedin} className='login-form'>
              <input
                className='input1'
                value={email}
                placeholder='email'
                type='email'
                name='email'
                onChange={this.changName}
              />
              <input
                className='input2'
                value={password}
                placeholder='password'
                type='password'
                name='password'
                onChange={this.changName}
              />
              <input type='submit' className='login' value='Login' />
              {this.state.errorMsg && (
                <p className='invalidMsg'>User or password WRONG</p>
              )}
            </form>
            <div className='dont-have-account'>
              <h6>Don’t have an account?</h6>
              <span>
                <Link to='/signup' className='move-to-sign-up'>
                  sign up
                </Link>
              </span>
            </div>
          </div>
          <img src={login} className='login-image' />
          {this.state.alert ? (
            <div className='alert-danger alert'>{this.state.message} </div>
          ) : null}
        </div>
        <ContactSection />
        <Footer />
      </div>
    );
  }
}
export default Login;
