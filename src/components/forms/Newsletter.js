import React from 'react';


class Newsletter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      enviado: false,
      formIsValid: false,
      classInput: 'form-control',
      nombreValido: false,
      apellidoValido: false,
      mailValido: false,
      submit: false
    };

    this.validateNombre = this.validateNombre.bind(this);
    this.validateApellido = this.validateApellido.bind(this);
    this.validateMail = this.validateMail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateNombre(e) {
    let target = e.target;
    let value = target.value;
    let name = target.name;
    
    if(!value){
      target.className = 'form-control is-invalid';
      return false;
    } else {

    }
        
    target.className = 'form-control';

    this.setState({
      [name]: value,
      nombreValido: true
    });
    
  }

  validateApellido(e) {
    let target = e.target;
    let value = target.value;
    let name = target.name;
    
    if(!value){
      target.className = 'form-control is-invalid';
      return false;
    } else {

    }
        
    target.className = 'form-control';

    this.setState({
      [name]: value,
      apellidoValido: true
    });
    
  }
  validateMail(e){
    let target = e.target;
    let value = target.value;
    let name = target.name;

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      target.className = 'form-control is-invalid';
      return false;
    }

    target.className = 'form-control';

    this.setState({
      [name]: value,
      mailValido: true
    });

  }

  handleSubmit(e) {
    if(this.state.nombreValido && this.state.apellidoValido && this.state.mailValido){
        this.setState({
          enviado: true
        });
    } else {
      
    }
    e.preventDefault();    
  }


  render() {
    if(this.state.enviado){
      return (
        <div className="container mt-5">
        <h4 className="section-title">¡Suscribete al Newsletter!</h4>
          <div className="text-center title-thankyou">¡Muchas gracias!</div>
          <p className="text-center">Bienvenido a Masha Bags, vas a recibir ofertas y promociones.</p>
        </div>
      );
    } else {
      return(
        <div className="container mt-5">
        <h4 className="section-title">¡Suscribete al Newsletter!</h4>
        <form>
        <div className="row">
          <div className="col">
            <input
              id="Nombre"
              name="Nombre"
              type="text"
              className={this.state.classInput}
              placeholder="Nombre"
              onChange={this.validateNombre} />
          </div>
          <div className="col">
            <input
              name="Apellido"
              type="text"
              className={this.state.classInput}
              placeholder="Apellido"
              onChange={this.validateApellido} />
          </div>
          <div className="col">
            <input
              name="Email"
              type="text"
              className={this.state.classInput}
              placeholder="Email"
              onChange={this.validateMail} />
          </div>
          <div className="col">
            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>SUSCRÍBETE</button>
          </div>
        </div>
      </form>
    </div>
      );
   }
  }

}

export default Newsletter;
