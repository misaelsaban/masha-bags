import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';




function validateEmail(value) {
  let error;
  if (!value) {
    error = 'El campo no puede ser vacio.';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Dirección de email invalida.';
  }
  return error;
}

function validateNombre(value) {
  let error;
  if (!value) {
    error = 'El campo no puede ser vacio.';
  }
  return error;
}
function validateApellido(value) {
  let error;
  if (!value) {
    error = 'El campo no puede ser vacio.';
  }
  return error;
}

const Newsletter = (props) => (

  <div className="container mt-5">
    <h4 className="section-title">¡Suscribete al Newsletter!</h4>
    <Formik
      initialValues={{
        nombre: '',
        apellido: '',
        email: '',
        
      }}
      onSubmit={values => {
        // same shape as initial values
       console.log(values);
      }}
    >
      {({ errors, touched, validateField, validateForm }) => (
        
        <Form>
          <div className="row">
            <div className="col">
                <Field name="nombre" validate={validateNombre} placeholder="Nombre" className={errors.nombre ? "form-control is-invalid": "form-control"} />
                    {errors.nombre && touched.nombre && <div className="input-error">{errors.nombre}</div>}
            </div>
            <div className="col">
                <Field name="apellido" validate={validateApellido} placeholder="Apellido" className={errors.apellido ? "form-control is-invalid": "form-control"} />
                    {errors.apellido && touched.apellido && <div className="input-error">{errors.apellido}</div>}
            </div>
            <div className="col">
                <Field id="email1" name="email" validate={validateEmail} placeholder="Correo Electrónico" className={errors.email ? "form-control is-invalid": "form-control"} />
                    {errors.email && touched.email && <div className="input-error">{errors.email}</div>}
            </div>
            <div className="col">
                <button type="submit" className="btn btn-primary">SUSCRIBIRSE</button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  </div>
);

export default Newsletter;