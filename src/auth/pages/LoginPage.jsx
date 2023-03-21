import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import React, { useMemo, useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { AuthLayout } from '../layout/AuthLayout';
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth';





export const LoginPage = () => {

   const { status, errorMessage } = useSelector( state => state.auth);
   const isAuthenticating = useMemo( () => status === 'checking', [status]);


   const dispatch = useDispatch();

   const { email, password, onInputChange } = useForm(
      { 
         email: ' ',
         password: ' '
         }
      );



   const onSubmit = ( event ) =>{
       event.preventDefault();
      // console.log( {email, password} );
       dispatch( startLoginWithEmailPassword( { email, password }));
     
   }

   const onGoogleSignIn =() => {
      console.log('OnGoogleSignIn');
      dispatch( startGoogleSignIn() );
   }

  return (

       <AuthLayout tittle='LOGIN'>
         <form onSubmit={ onSubmit }  className='animate__animated animate_fadeIn animate__faster'>
            <Grid container>
              <Grid item xs={ 12 } sx={{ mt: 2}}>
               <TextField
               label="correo"
               type="email"
               placeholder='Correo@gmail.com'
               fullWidth
               name="email"
               value={ email }
               onChange={ onInputChange }
                />
              </Grid>

              <Grid item xs={ 12 } sx={{ mt: 2}}>
               <TextField
               label="contraseña"
               type="password"
               placeholder='Contraseña'
               fullWidth 
               name="password"
               value={ password }
               onChange={ onInputChange }
               />
              </Grid>

              <Grid 
               container
               display={ !! errorMessage ? '': 'none' }
               sx={{ mt:2}}
               >
                  <Grid 
                     item xs={ 12 } sm={ 12 }
                  >
                   <Alert severity='error'>{ errorMessage }</Alert>
                  </Grid>
              </Grid>

              <Grid container spacing={ 2 } sx={{ mb: 2, mt:1}}>

                <Grid item xs={ 12 } sm={ 6 }>
                   <Button 
                      disabled = { isAuthenticating }
                      type='submit' 
                      variant="contained" 
                      fullWidth>
                    Login
                   </Button>
                </Grid>

                <Grid item xs={ 12 } sm={ 6 }>
                   <Button 
                     disabled = { isAuthenticating }
                     variant="contained" 
                     fullWidth
                     onClick={ onGoogleSignIn }>

                    <Google />
                    <Typography sx={{ ml: 1}}>
                       Google
                    </Typography>
                   </Button>
                </Grid>
              </Grid>

              <Grid container direction='row' justifyContent='end'>
                 <Link component={ RouterLink } color='inherit' to="/auth/register/">
                 Registrarse
                 </Link>
              </Grid>

              
            </Grid>
         </form>
       </AuthLayout>
  )
}
