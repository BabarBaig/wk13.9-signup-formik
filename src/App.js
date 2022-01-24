import './App.css';
import {useFormik} from 'formik'

function App() {
  const formik = useFormik({
    initialValues: {
      name:  '',
      email: '',
      pswd:  ''
    },
    onSubmit: values => {
      console.log('form: ', values)
    }
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Name</div>
        <input name="name"  type="text" onChange={formik.handleChange} value={formik.values.name} />
        <div>Email</div>
        <input name="email" type="text" onChange={formik.handleChange} value={formik.values.email}/>
        <div>Password</div>
        <input name="pswd"  type="text" onChange={formik.handleChange} value={formik.values.pswd} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
