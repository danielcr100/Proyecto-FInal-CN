import React from "react";
import Logo from '../Components/logo'

class FormUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <Logo></Logo>
        <div className="py-5 text-center">
          <img
            className="d-block mx-auto mb-4 animated infinite rubberBand"
            src="./IMG/LogoMakr_945x5U.png"
            alt=""
          />
          <h2>Pagina para registrarse como socio</h2>
        </div>

        <div className="row center d-flex justify-content-center">
          <div className="col-md-8 order-md-1">
            <h4 className="mb-3">Formulario de Socio</h4>
            <form className="needs-validation" novalidate="">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label for="firstName">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder=""
                    value=""
                    required=""
                    name="Nombre"
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label for="lastName">Apellido</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder=""
                    value=""
                    required=""
                    name="Apellido"
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label for="email">
                  Telefono de contacto <span className="text-muted"></span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="2222-2222"
                  name="Apellido"
                />
                <div className="invalid-feedback">
                  Please enter a valid email address for service updates.
                </div>
              </div>

              <div className="mb-3">
                <label for="email">
                  Email <span className="text-muted">(Optional)</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="you@example.com"
                  name="Email"
                />
                <div className="invalid-feedback">
                  Please enter a valid email address for service updates.
                </div>
              </div>
              <div className="form-group mx-sm-3 mb-2">
                <label for="inputPassword2" className="sr-only">
                  Digite un Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword2"
                  placeholder="Password"
                  name="Password"
                />
              </div>
              <div className="mb-3">
                <label for="address">Direccion</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="1234 Main St"
                  required=""
                  name="Address"
                />
                <div className="invalid-feedback">
                  Please enter your delivery address.
                </div>
              </div>

              <div className="mb-3">
                <label for="address2">
                  Señas adicionales
                  <span className="text-muted">(Opcional)</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address2"
                  placeholder="numero de casa, color u ptrase señales"
                  name="Direccion"
                />
              </div>

              <div className="row">
                <div className="col-md-5 mb-3">
                  <label for="country">Pais</label>
                  <select
                    className="custom-select d-block w-100"
                    id="country"
                    required=""
                    name="Pais"
                  >
                    <option value="">Seleccione...</option>
                    <option>Costa Rica</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <label for="state">Provincia</label>
                  <select
                    className="custom-select d-block w-100"
                    id="state"
                    required=""
                    name="Provincia"
                  >
                    <option value="">Choose...</option>
                    <option>San Jose</option>
                    <option>Heredia</option>
                    <option>Alajuela</option>
                    <option>Cartago</option>
                  </select>
                  <div className="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <label for="zip">Codigo Postal</label>
                  <input
                    type="text"
                    className="form-control"
                    id="zip"
                    placeholder=""
                    required=""
                    name="CodigoPosta"
                  />
                  <div className="invalid-feedback">Zip code required.</div>
                </div>
              </div>
              <hr className="mb-4" />

              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="save-info"
                />
                <label className="custom-control-label" for="save-info">
                  Aceptas nuestros terminos y condiciones
                </label>
              </div>
              <hr className="mb-4" />
              <h4 className="mb-3">Informacion de referencia</h4>

              <div className="d-block my-3">
                <div className="custom-control custom-radio">
                  <input
                    id="credit"
                    name="paymentMethod"
                    type="radio"
                    className="custom-control-input"
                    checked=""
                    required=""
                  />
                  <label className="custom-control-label" for="credit">
                    Socio de negocio
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    id="debit"
                    name="paymentMethod"
                    type="radio"
                    className="custom-control-input"
                    required=""
                    name="Socio"
                  />
                  <label className="custom-control-label" for="debit">
                    Proveedor
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    id="paypal"
                    name="paymentMethod"
                    type="radio"
                    className="custom-control-input"
                    required=""
                    name="Proveedor"
                  />
                  <label className="custom-control-label" for="paypal">
                    Carreras en la empresa
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label for="exampleFormControlFile1">Cargue su CV</label>
                <input
                  type="file"
                  className="form-control-file"
                  id="exampleFormControlFile1"
                  name="Carrera"
                />
              </div>

              <hr className="mb-4" />
              <button
                className="btn btn-primary btn-lg btn-block"
                type="submit"
              >
                Registrarse
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default FormUser;
