import React from 'react'
import { 
   Container, 
   FormWrapper, 
   Icon,
   Text,
   Form, 
   FormContent,
   FormTitle, 
   FormInput, 
   FormLabel,
   FormButton 
} from './SignUpElements'

const SignUp = () => {
   return (
      <>
         <Container>
            <FormWrapper>
               <Icon to="/">LCoin</Icon>
               <FormContent>
                  <Form action="#">
                     <FormTitle>Sign Up</FormTitle>
                     <FormLabel htmlFor='for'>Email</FormLabel>
                     <FormInput type='email' required/>
                     <FormLabel htmlFor='for'>Password</FormLabel>
                     <FormInput type='password' required/>
                     <FormLabel htmlFor='for'>Password</FormLabel>
                     <FormInput type='password' required/>
                     <FormButton type='submit'>Continue</FormButton>
                     <Text>Forgot password</Text>
                  </Form>
               </FormContent>
            </FormWrapper>
         </Container>
      </>
   )
}

export default SignUp
