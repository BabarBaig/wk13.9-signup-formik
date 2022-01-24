import './App.css';
import {FormikProvider, useFormik} from 'formik'

function App() {
  const formik = useFormik({
    initialValues: {
      name:  '',
      email: '',
      pswd:  ''
    },
    onSubmit: values => {
      console.log('form: ', values)
    },
    validate: values => {
      let errors = {}
      if (!values.name)  errors.name  = 'Required'
      if (!values.email) errors.email = 'Required'
      if (!values.pswd)  errors.pswd  = 'Required'
      return errors
    }
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Name</div>
        <input name="name"  type="text" onChange={formik.handleChange} value={formik.values.name} />
        {formik.errors.name  ? <div style={{color:'red'}}>{formik.errors.name}</div>: null}
        <div>Email</div>
        <input name="email" type="text" onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email ? <div style={{color:'red'}}>{formik.errors.email}</div>: null}
        <div>Password</div>
        <input name="pswd"  type="text" onChange={formik.handleChange} value={formik.values.pswd} />
        {formik.errors.pswd  ? <div style={{color:'red'}}>{formik.errors.pswd}</div>: null}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
