import React from "react";
// import MaterialUi from '@material-ui/core'
import { Link, Switch, Route } from 'react-router-dom'

import SignIn from "./Signin";
import Boton from "./Botones";

function App() {
  return (
    <div>
      <header>
        <h1>VINIS </h1>

        <nav>

          <ul>
            <li>
              <Link to={"/SignIn"}>SignIn</Link>
            </li>
            <li>
              <Link to={"/Botones"}>Botones</Link>
            </li>
          </ul>
        </nav>
      </header>
      <section>
        <Switch>
          <Route exact path='/SignIn' component={SignIn} />
          <Route path='/Botones' component={Boton} />
        </Switch>
      </section>

    </div>
  );
}

export default App;
