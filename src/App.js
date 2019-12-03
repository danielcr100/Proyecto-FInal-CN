import React, { Component } from "react";
// import MaterialUi from '@material-ui/core'

import SignIn from "./Signin";
import Logo from "./logo";
import BotonUsuario from "./Botones";

class App extends Component {
  render() {
    return (
      <div>
        <Logo></Logo>

        <SignIn></SignIn>

        <BotonUsuario />
      </div>
    );
  }
}

export default App;
