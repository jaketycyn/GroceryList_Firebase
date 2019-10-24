import React from "react";
import { removeTypeDuplicates } from "@babel/types";

import * as ROUTES from "../../constants/routes";

const SignUp = () => (
  <div>
    <h1>SignUp</h1>
  </div>
);

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {};

  onChange = event => {};

  render() {
    return <form onSubmit={this.onSubmit} />;
  }
}

const SignUpLink = () => {
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>;
};

export default SignUpPage;

export { SignUpForm, SignUpLink };
