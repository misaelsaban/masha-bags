import React from 'react';
import { Formik, Form, Field } from 'formik';


 function validateEmail(value) {
   let error;
   if (!value) {
     error = 'El campo no puede ser vacio.';
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
     error = 'Dirección de email invalida.';
   } else if(document.getElementById("email1").value !== document.getElementById("email2").value){
     error = 'Los emails no coinciden.';
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
  function validateTelefono(value) {
    let error;
    if (!value) {
      error = 'El campo no puede ser vacio.';
    }
    return error;
  }

  
 const FormCheckout = (props) => (
   <div className="mt-5">
     <h4>Información del cliente</h4>
     <Formik
       initialValues={{
         nombre: '',
         apellido: '',
         telefono: '',
         email1: '',
         email2: '',
       }}
       onSubmit={values => {
         // same shape as initial values
        props.createOrder(values);
        //console.log(values);
       }}
     >
       {({ errors, touched, validateField, validateForm }) => (
         <Form>
            <Field name="nombre" validate={validateNombre} placeholder="Nombre" className={errors.nombre ? "form-control mt-3 is-invalid": "form-control mt-3"} />
                {errors.nombre && touched.nombre && <div className="input-error">{errors.nombre}</div>}
            
            <Field name="apellido" validate={validateApellido} placeholder="Apellido" className={errors.apellido ? "form-control mt-3 is-invalid": "form-control mt-3"} />
                {errors.apellido && touched.apellido && <div className="input-error">{errors.apellido}</div>}
            
            <Field name="telefono" type="number" validate={validateTelefono} placeholder="Teléfono" className={errors.telefono ? "form-control mt-3 is-invalid": "form-control mt-3"} />
                {errors.telefono && touched.telefono && <div className="input-error">{errors.telefono}</div>}
            
            <Field id="email1" name="email1" validate={validateEmail} placeholder="Correo Electrónico" className={errors.email1 ? "form-control mt-3 is-invalid": "form-control mt-3"} />
                {errors.email1 && touched.email1 && <div className="input-error">{errors.email1}</div>}
 
            <Field id="email2" name="email2" validate={validateEmail} placeholder="Repita su Correo Electrónico" className={errors.email2 ? "form-control mt-3 is-invalid": "form-control mt-3"} />
                {errors.email2 && touched.email2 && <div className="input-error">{errors.email2}</div>}
            
           <button type="submit" className="btn btn-primary mt-4">FINALIZAR COMPRA</button>

         </Form>
       )}
     </Formik>
   </div>
 );

 
 export default FormCheckout;