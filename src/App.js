import React from "react";
// import MaterialUi from '@material-ui/core'
import { Switch, Route } from 'react-router-dom'

import SignIn from "./Signin";
import Boton from "./Botones";
import FormUser from "./FormularioServicios";

import './Styles/estilos.css'

function App() {
  return (
    <div>
      <header>
        <h1>VINIS </h1>

      </header>
      <section>
        <Switch>
          <Route exact path='/SignIn' component={SignIn} />
          <Route path='/Botones' component={Boton} />
          <Route path='/FormUser' component={FormUser} />
        </Switch>
      </section>

    </div>
  );
}

export default App;
