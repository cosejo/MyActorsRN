import React, { Component } from 'react';

import LoginView from "./LoginView";

export default class LoginContainer extends React.Component {
  state = {
    username:"",
    password:"",
    message: ""
  }

  onLoginEvent = () => {
    this.setState({ message: "Inicio de sesión realizado"})
  }

  onUsernameChanged = (updatedUsername: String) => {
    this.setState({ username: updatedUsername})
  }

  onPasswordChanged = (updatedPassword: String) => {
    this.setState({ password: updatedPassword })
  }

  render(){
    const { message  } = this.state;
    return (
      <LoginView loginEvent={this.onLoginEvent} usernameChanged={this.onUsernameChanged} passwordChanged={this.onPasswordChanged} message={message}/>
    );
  }
}