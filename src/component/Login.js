import React from 'react';
import * as Yup from "yup"
import C_FormField from './C_FormField';
import C_Form from './C_Form';
import C_SubmitButton from './C_SubmitButton';
const formStyle={
    padding:"20px"
}
const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  })
function Login() {    
return (
<div style={formStyle}>
<C_Form
validationSchema={schema}
onSubmit={(values)=>{
   console.log(values)
   }}
initialValues={{
  email: '',
  password: '',
}}
>
<C_FormField
name="email"
type="text"
/>
<C_FormField
name="password"
type="password"
/>
<C_SubmitButton/>
</C_Form>
</div>
 );
}

export default Login;