import React from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'
import HomePageNavbar from './homepageNavbar'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const HomePage = makeStyles(theme => ({
  root: {
    flexGrow: 1,
      margin: theme.spacing(16),
      
      
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 300,
    textAlign: 'center',
  }
}));

export default function CenteredGrid() {
  const classes = HomePage();

  return (
    <>
    
    <div className={classes.root}>
      <Grid container spacing={3}>
      <Grid item xs={12}>
          <Paper className={classes.paper}><HomePageNavbar /></Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}><SignIn /></Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}><SignUp /></Paper>
        </Grid>
      </Grid>
    </div>
    </>
  );
}

// const HomePage = () => {
//   return (
//     <>
//     
//     <div class="container">
//     <div className="card-deck">
//     <SignIn />
//     <SignUp />

//     </div>
//     </div>
    
//     </>
//   )
// }

// export default HomePage