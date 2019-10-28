import React from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

import SignOutButton from "../SignOut";
import * as ROUTES from "../../constants/routes.js";
import { AuthUserContext } from "../Session";

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
    </AuthUserContext.Consumer>
  </div>
);

function SignUp() {
  let history = useHistory();
  function handleClick() {
    history.push(ROUTES.SIGN_UP);
  }
  return (
    <Button type="button" onClick={handleClick}>
      Sign up now
    </Button>
  );
}

const NavigationAuth = () => (
  <div>
    <ul>
      <li>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
      <SignUp />
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </li>
      <li>
        <SignOutButton />
      </li>
    </ul>
  </div>
);

const NavigationNonAuth = () => <div>{/* <NavBar />
    <IntroPage /> */}</div>;

//    ****   old NonAuth Nav. Path    ****
/* <div>
<ul>
  <li>
    <Link to={ROUTES.LANDING}>Landing</Link>
  </li>
  <li>
    <Link to={ROUTES.SIGN_IN}>Sign In</Link>
  </li>
  <li>
    <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </li>
</ul>
</div> */

export default Navigation;
