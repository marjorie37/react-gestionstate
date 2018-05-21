import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Col, Row } from "reactstrap";

class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      emailValid: false,
      passwordValid: false,
      formValid: false,
      passwordAv: false,
      value: ""
    };
  }

  handleUserInput = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateField(fieldName, value) {
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    let passwordAv = this.state.passwordAv;

    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      case "password":
        passwordValid = value.match(
          /(?=^.{6,}$)(?=.*\W+)(?!.*\d+)(?=.*[A-Z])(?=.*[a-z]).*$/
        );
        passwordAv = value.match(
          /(?=^.{6,}$)(?!.*\W+)(?!.*\d+)(?=.*[A-Z])(?=.*[a-z]).*$/
        );

        if (passwordValid) {
          this.state.value = "Password ok";
        } else if (passwordAv) {
          this.state.value = "Average password, please add a special character";
        } else {
          this.state.value = "Password too weak";
        }
    }
    this.setState(
      {
        emailValid: emailValid,
        passwordValid: passwordValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.emailValid && this.state.passwordValid
    });
  }

  render() {
    return (
      <Form>
        <Row>F</Row>
        <FormGroup row>
          <Label className="text-primary" for="email" sm={2}>
            YOUR EMAIL
          </Label>
          <Col sm={8}>
            <Input
              type="email"
              value={this.state.email}
              name="email"
              placeholder="Your email"
              onChange={event => this.handleUserInput(event)}
            />
            <p className="text-danger">
              (must be at least 6 characters in length, at least one uppercase
              letter/one special character, no digit)
            </p>
          </Col>
          <Col sm={2} />
        </FormGroup>
        <FormGroup row>
          <Label className="text-primary" for="password" sm={2}>
            YOUR PASSWORD
          </Label>
          <Col sm={8}>
            <Input
              type="password"
              value={this.state.password}
              name="password"
              placeholder="Your password"
              onChange={event => this.handleUserInput(event)}
            />
            <textarea value={this.state.value} cols="100" rows="1" />
          </Col>
          <Col sm={2} />
        </FormGroup>
        <button
          disabled={!this.state.formValid}
          type="submit"
          className="btn btn-primary"
        >
          Sign up
        </button>
      </Form>
    );
  }
}

export default Password;
