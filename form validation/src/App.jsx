import './App.css'
import FormWithYup from './components/form-with-yup'
// import FormWithoutYup from './components/form-without-yup'

const App = () => {
  return (
    <>
      <div className='heading'>React Form validation using YUP🚀</div>
      {/* <FormWithoutYup /> */}
      <FormWithYup />
    </>
  )
}

export default App