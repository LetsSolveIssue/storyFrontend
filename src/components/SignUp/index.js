import React from "react";
import HomePageNavbar from "../layout/homepageNavbar";
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createUser } from '../../utils/api';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';






const SignUp = makeStyles({
  card: {
    minWidth: '200px',
    extAlign: 'center',
    margin:'100px',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  margin: {
    margin: '10px 0px 10px 0px',
  },
  // withoutLabel: {
  //   marginTop: '10px',
  //   padding: '10px',
  // },
  textField: {
    width: 200,
    
   
  },
  paper: {
    padding: '10px',
    margin: 'auto',
    maxWidth: 300,
    textAlign: 'center',
  }
});

export default function OutlinedCard() {

  const classes = SignUp();
  const [email, setEmail] = useState('')
  const [fullName, setFullName] = useState('')
  const [password, setPassword] = useState('')
  const history  = useHistory();
  const handleSubmit = (e) =>{
    e.preventDefault()

    createUser({ fullName, email, password }).then(data => {
      if(!data.error)
        history.push('/login')
        
     
     })
     }

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <>
    <Grid item xs={12}>
          <Paper className={classes.paper}><HomePageNavbar /></Paper>
        </Grid>
    
    <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>
   
    <Card className={classes.card} variant="outlined">
    
      <CardContent>
      <form className="form"  onSubmit={e => handleSubmit(e)} className={clsx(classes.margin, classes.withoutLabel, classes.textField)} Validate autoComplete="off" >
      <h2 style={{textAlign:'center'}}>Sign Up</h2>
      <TextField
      className={clsx(classes.margin, classes.textField)}
          id="inputName"
          label="Full Name"
          placeholder="Full Name"
          multiline
          variant="outlined"
          onChange={e => setFullName(e.target.value)}
          value = {fullName}
          />
      
      
     
      <TextField
          id="inputEmail3"
          label="Email"
          placeholder="Email"
          multiline
          variant="outlined"
          value= {email}
          onChange={e => setEmail(e.target.value)}
          />
  


        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            //id="outlined-adornment-password"
            id="inputPassword3"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            // value={values.password}
            // onChange={handleChange('password')}
            value={password}
               onChange={e => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
                <CardActions>

                  <Button type="submit"  size="large"  variant="contained" color="primary" disableElevation>
                  Register
            </Button>
                
              </CardActions>
              </form>
      </CardContent>
    </Card>
    </Grid>
    </>
  );
}




// const SignUp = () => {
//   return (
//       <>
//       <HomePageNavbar />
//       <div className="row">
//     <div className="col s12 m6">
//     <div className="col-md-6 offset-md-3">
//       <span className="anchor" id="formRegister"></span>

//       <div className="card card-outline-secondary">
//         <div className="card-header">
//           <h3 className="mb-0">Sign Up</h3>
//         </div>
//         <div className="card-body">
//           <form className="form">
//             <div className="form-group">
//               <input
//                 type="text"
//                 className="form-control"
//                 id="inputName"
//                 placeholder="Full name"
//               />
//             </div>
//             <div className="form-group">
//               <input
//                 type="email"
//                 className="form-control"
//                 id="inputEmail3"
//                 placeholder="Email"
//                 required=""
//               />
//             </div>
//             <div className="form-group">
//               <input
//                 type="password"
//                 className="form-control"
//                 id="inputPassword3"
//                 placeholder="Password"
//                 required=""
//               />
//             </div>

//             <div className="form-group">
//               <button
//                 type="submit"
//                 className="btn btn-success btn-lg float-right"
//               >
//                 Register
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div></div></div>


  
//       </>
//     );
// };

// export default SignUp;
