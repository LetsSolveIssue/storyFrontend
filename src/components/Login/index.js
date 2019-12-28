import React from "react";
import { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";
import { signInUser } from "../../utils/api";
import HomePageNavbar from "../layout/homepageNavbar";
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



const Login = makeStyles({
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
    margin: '10px 0px 0px 0px',
  },
  withoutLabel: {
    marginTop: '10px',
  },
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

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const history = useHistory();


const handleSubmit = (e) =>{
  e.preventDefault()
  console.log(e);
  
  signInUser({ userEmail, userPassword }).then(data => {
    if(!data.error){
      const { token, user } = data
    localStorage.setItem('user_id', user._id)
    localStorage.setItem('email', user.email)
    localStorage.setItem('token', token)
    history.push('/posts')
   }else{
     
   }
   
    
    })
  }
  const classes = Login();
  //const bull = <span className={classes.bullet}>•</span>;
  useEffect(() => console.log(userEmail,userPassword), [userEmail,userPassword]);

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  // const handleChange = prop => event => {
  //   setValues({ ...values, [prop]: event.target.value });
  // };

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
      <form className="form" onSubmit={e => handleSubmit(e)}  className={clsx(classes.margin, classes.withoutLabel, classes.textField)} Validate autoComplete="off" >
      <h2 style={{textAlign:'center'}}>Login</h2>
      <TextField
          id="outlined-textarea"
          label="Email"
          placeholder="Email"
          multiline
          variant="outlined"
          value={userEmail} onChange={e => setUserEmail(e.target.value)}/>
  


        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            //value={values.password}
            // onChange={handleChange('password')}
            value={userPassword}
            onChange={e => setUserPassword(e.target.value)}
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
                  Login
            </Button>
                
              </CardActions>
              </form>
      </CardContent>
    </Card>
    </Grid>
    </>
  );
}








// const Login = () => {
//   const [userEmail, setUserEmail] = useState("");
//   const [userPassword, setUserPassword] = useState("");
//   const history = useHistory();


// const handleSubmit = (e) =>{
//   e.preventDefault()
  
//   signInUser({ userEmail, userPassword }).then(data => {
//     console.log(data);
    
  
//      history.push('/posts')
  
//   })
//   }
//  return (
//    <>
//    <HomePageNavbar />
//    <div className="row">
//       <div className="col s12 m6">
//         <div className="col-md-6 offset-md-3">
//           <div className="card card-outline-secondary">
//             <div className="card-header">
//               <h3 className="mb-0">Login</h3>
//             </div>
//             <div className="card-body">
//               <form className="form" onSubmit={e => handleSubmit(e)}>
//                 <div className="form-group">
//                   <input
//                     type="text"
//                     placeholder="Email"
//                     value={userEmail}
//                     onChange={e => setUserEmail(e.target.value)}
//                     className="form-control"
                  
//                     required=""
//                   />
//                 </div>
//                 <div className="form-group">
//                   <input
//                     type="password"
//                     placeholder="Password"
//                     value={userPassword}
//                     onChange={e => setUserPassword(e.target.value)}
//                     className="form-control"
//                     required=""
                  
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="btn btn-success btn-lg float-right"
//                 >
//                   Login
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
   
//    </>
   
//   );
// };

//export default Login;








