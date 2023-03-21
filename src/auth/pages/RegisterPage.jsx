import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';
import React, { useMemo, useState } from 'react';
import {useForm} from '../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { startCreatingUserWithEmailPassword } from '../../store/auth';


const formData = {
  email: '',
  password: '',
  displayName: ''
}


const formValidations = {
   email: [ (value) => value.includes('@'),'El correo debe tener un @.'],
   password: [ (value) => value.length >= 6,'El password debe tener mas de 6 letras.'],
   displayName: [ (value) => value.length >= 1,'El nombre es obligatorio.'],
}

export const RegisterPage = () => {

  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage } = useSelector( state => state.auth );
  const isCheckingAuthentication = useMemo( () => status === 'cheking', [ status ]);

 const { 
  formState, displayName, email, password, onInputChange, 
  isFormValid, displayNameValid, emailValid, passwordValid, 
 } = useForm(formData, formValidations);
 
 console.log(displayNameValid);

 const onSubmit =( event ) => {
  event.preventDefault();
  setFormSubmitted(true);
  if (!isFormValid ) return;
   dispatch(startCreatingUserWithEmailPassword(formState));
 }

  return (

       <AuthLayout tittle='CREAR CUENTA'>

         <form onSubmit={onSubmit}
         className='animate__animated animate_fadeIn animate__faster'>
            <Grid container>
              <Grid item xs={ 12 } sx={{ mt: 2}}>
               <TextField
               label="Nombre Completo"
               type="text"
               placeholder='Nombre Completo'
               fullWidth
               name="displayName"
               value={ displayName }
               onChange={onInputChange }
               error= {!!displayNameValid && formSubmitted}
               helperText={ displayNameValid}
               />
              </Grid>

              <Grid item xs={ 12 } sx={{ mt: 2}}>
               <TextField
               label="Correo Electronico"
               type="email"
               placeholder='Correo@gmail.com'
               name="email"
               value={ email }
               onChange={onInputChange }
               fullWidth
               error= {!!emailValid && formSubmitted }
               helperText={ emailValid} 
               />
              </Grid>

              <Grid item xs={ 12 } sx={{ mt: 2}}>
               <TextField
               label="contraseña"
               type="password"
               placeholder='Contraseña'
               name="password"
               value={ password }
               onChange={onInputChange }
               fullWidth
               error= {!!passwordValid && formSubmitted }
               helperText={ passwordValid }
               />
              </Grid>

              <Grid container spacing={ 2 } sx={{ mb: 2, mt:1}}>
                <Grid
                display={ !! errorMessage ? '': 'none' }
                 item xs={ 12 } sm={ 12 }>
                   <Alert severity='error'>
                    { errorMessage}
                   </Alert>
                </Grid>

                <Grid item xs={ 12 } sm={ 12 }>
                   <Button 
                   disabled= { isCheckingAuthentication }
                   type="submit"
                   variant='contained' 
                   fullWidth
                   >
                    Crear Cuenta
                   </Button>
                </Grid>

              </Grid>

              <Grid container direction='row' justifyContent='end'>
                <Typography sx={{ mr: 1 }}> Ya tienes cuenta?
                </Typography>
                 <Link component={ RouterLink } color='inherit' to="/auth/login/">
                 Ingresar
                 </Link>
              </Grid>
            </Grid>
         </form>
       </AuthLayout>
  )
}