import React from 'react';
import './form.css';

/* import * as Yup from 'yup'; */
import { useFormik } from 'formik';

import Input from '../Input/Input';
import formHero from '../../assets/images/form-hero.png';

const validate = (values) => {
  const errors = {};

  if (!values.name)
    errors.name = 'Requerido';
  else if (values.name.length > 30)
    errors.name = 'Must be 30 characters or less';

  if (!values.email)
    errors.email = 'Requerido';
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
    errors.email = 'Invalid email address';

  if (!values.phone)
    errors.phone = 'Must be 20 characters or less';

  console.log(values);
  return errors;
}

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: ''
    },
    validate,
    onSubmit: (values) => {
      formik.resetForm();
      alert(JSON.stringify(values, null, 2));

    },
  });

  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <img src={formHero} alt="Hombre usando computadora" className="form__hero" />
      <h2 className="form__title">Formulario de contacto</h2>
      <fieldset className="form__fieldset">
        <label className="form__label">
          Nombre:
          <Input
            name='name'
            classList="form__input"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            type="text"
            placeholder="Jose Perez" />
          {formik.errors.name ?
            <span className='form__error'>{formik.errors.name}</span> : null}
        </label>

        <label className="form__label">
          Correo:
          <Input
            name='email'
            classList="form__input"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder="ejemplo@ejemplo.com" />
          {(formik.errors.email) ?
            <span className='form__error'>{formik.errors.email}</span> : null}
        </label>

        <label className="form__label">
          Teléfono:
          <Input
            name='phone'
            classList="form__input"
            type="tel"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            placeholder="+58412000000" />
          {(formik.errors.phone) ?
            <span className='form__error'>{formik.errors.phone}</span> : null}
        </label>
        <button className='form__submit' disabled={formik.isSubmitting} type='button'>Enviar</button>
      </fieldset>
    </form>
  )
}

export default Form;