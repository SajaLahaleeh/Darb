import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Header from "../../CommonComponents/Header";
import ContactSection from "../../Components/ContactSection";
import Footer from "../../CommonComponents/Footer";
import "./style.css";

import login from "../../assets/login.png";

export class SignUp extends Component {
  state = {
    email: "",
    password: "",
    phonenumber: "",
    fullname: "",
    errorMsg: "",
    passwordShort: "",
    alert: false,
    message: ""
  };
  changName = event => {
    const { target } = event;
    const { value, name } = target;
    this.setState({ [name]: value });
  };

  goSignUp = event => {
    event.preventDefault();
    const { email, password, fullname, phonenumber } = this.state;
    const { history } = this.props;

    if (password.length < 6) {
      this.setState({ passwordShort: "true" });
    } else {
      axios
        .post("https://darbserver.appspot.com/signup", {
          email,
          password,
          fullname,
          phonenumber
        })
        .then(({ data }) => {
          if (data.data.status == "padding") {
            history.push("/login");
          } else {
            const { errorMsg } = this.state;
            this.setState({ errorMsg: "true" });
          }
        })

        .catch(error => {
          if (error.response.status === 409) {
            this.setState({
              alert: true,
              message: "some things is wrong try again"
            });
          }
        });
    }
  };

  render() {
    this.state.alert
      ? setTimeout(() => this.setState({ alert: false }), 3000)
      : null;
    const { email, password, fullname, phonenumber } = this.state;
    return (
      <div>
        <Header />

        <div className='login-page-container'>
          <div className='login-form-container'>
            <h2 className='login-title'>Create New Account</h2>
            <form onSubmit={this.goSignUp} className='login-form'>
              <input
                className='input1'
                value={fullname}
                placeholder='full name'
                type='text'
                name='fullname'
                onChange={this.changName}
              />
              <input
                className='input2'
                value={email}
                placeholder='email'
                type='email'
                name='email'
                onChange={this.changName}
              />
              <input
                className='input3'
                className='input4'
                value={phonenumber}
                placeholder='phone number'
                type='number'
                name='phonenumber'
                onChange={this.changName}
              />
              <input
                className='input4'
                value={password}
                placeholder='password'
                type='password'
                name='password'
                onChange={this.changName}
              />
              <input type='submit' className='login' value='SignUp' />
              {this.state.passwordShort && (
                <p className='invalidMsg'>password too short</p>
              )}
              {this.state.errorMsg && <p className='invalidMsg'>try again</p>}
            </form>
            <div className='dont-have-account'>
              <h6>Already have an account?</h6>
              <Link to='/login' className='move-to-sign-up'>
                Login
              </Link>
            </div>
          </div>
          <img src={login} className='login-image' alt='' />
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

export default SignUp;
