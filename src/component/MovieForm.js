import React from 'react'

import * as Yup from "yup"

const listOrderValidSchema = Yup.object().shape({
  quantity: Yup.number().required().label("quantity"),
})
export default function MovieForm({match,history}) {
  return (
    <div>
      <h1>movie form{match.params.id}</h1>
      {/* <C_Form
    initialValues={{quantity:""}}
    onSubmit={(values)=>{
      // setquantity(values.quantity)
      // onAddQuantity(values)
      console.log(values)
    }}
    validationSchema={listOrderValidSchema}
    >
    <C_FormField
        name="quantity"
        //  icon="email"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="number-pad"
        placeholder="qunatity"
        />
    <C_SubmitButton title='submit' />
    </C_Form> */}
      
    </div>
  )
}
