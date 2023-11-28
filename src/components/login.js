import React,{useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import loginService from '../services/login'

// const goregister = (id) => {
//     window.location.replace(`/ma/${id}`)
//     console.log(id);
// }

function Login(){
  const [user,setUser] = useState('')
  
  
  const handleSubmit=(e)=>{

    e.preventDefault();
    const {email,pass}=document.forms[0];
    const credentials = {"email":email.value,"password":pass.value}
   
    const handleLogin = async (credentials) => {
    try {
     
      // // const userObject = await loginService.login(credentials)
      // userObject = {

      // }
      // // console.log(userObject.employeeID)
      // setUser(userObject)
        if(credentials.email==="admin@gmail.com"  && credentials.password ==="admin")
    //   window.localStorage.setItem('loggedInUser', JSON.stringify(userObject))
      
      window.location.replace(`/main`)
      // notificationHandler(`Logged in successfully as ${userObject.firstName}`, 'success')
      // setCourse([])
    }
    catch (exception) {
      // notificationHandler(`Log in failed, check username and password entered`, 'error')
    }
  }
  
  handleLogin(credentials)
    
    
    
  };
  const renderForm=(
  <div className='container p-5'>
    <h4 className='text-center m-2'>Welcome To IIITB ERP</h4>
  <Form className='card m-3 p-3 ' onSubmit={handleSubmit}>
<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Email address</Form.Label>
  <Form.Control type="email" placeholder="Enter email" name='email'/>
  <Form.Text className="text-muted">
    We'll never share your email with anyone else.
  </Form.Text>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>Password</Form.Label>
  <Form.Control type="password" placeholder="Password" name='pass'/>
</Form.Group>

 <Button variant="primary" type='submit'>
  Login
</Button>
<h4 className='text-center m-2'>Enter correct email and password!!</h4>
</Form>
</div>
)
// console.log(course)
    return(
      <>
        {user==null ? <div>success</div> : 
        renderForm}
      </>
    ) 
}
export default Login