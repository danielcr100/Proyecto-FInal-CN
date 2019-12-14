import React from "react";
// import MaterialUi from '@material-ui/core'
import { Switch, Route, Redirect } from 'react-router-dom'


import SignIn from "./Pages/Signin";
import Botones from "./Components/Botones";
import Botones2 from './Components/Botones2'
import FormUser from "./Pages/FormularioServicios";
import FormClient from "./Pages/FormularioCliente";
import Agendar from "./Pages/Agendar1"
import Calendar from "./Pages/Calendar"



function App() {
  return (
    <div>
      <section>
        <Switch>
          <Route exact path='/SignIn' component={SignIn} />
          <Route path='/Botones' component={Botones} />
          <Route path='/Botones2' component={Botones2} />
          <Route path='/FormUser' component={FormUser} />
          <Route path='/FormClient' component={FormClient} />
          <Route path='/Agendar' component={Agendar} />
          <Route path='/Calendar' component={Calendar} />
          <Redirect to='/SignIn' />
        </Switch>
      </section>

    </div>
  );
}

export default App;
