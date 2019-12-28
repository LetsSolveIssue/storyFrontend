import React from "react";
import { NavLink } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';


// const SignIn = () => {
//  return (
   
//   <div class="card text-center">
//     <div class="card-body">
      
//       <NavLink to='/login'>Login</NavLink>
//     </div>
//   </div>


//   );
// };

// export default SignIn;





const SignIn = makeStyles({
  card: {
    minWidth: '100%',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard() {
  const classes = SignIn();
  // const bull = <span className={classes.bullet}>•</span>;

  return (
    <NavLink to='/login'>
    <Card className={classes.card} variant="outlined">
      <CardContent>
      LOGIN
      </CardContent>
      
    </Card>
    </NavLink>
  );
}