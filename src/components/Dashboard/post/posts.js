import React from 'react';
import { useState,useEffect } from 'react'
import { createPost } from '../../../utils/api'
import {fade, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import { getPosts,deletePost } from "../../../utils/api"
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
const getUserId = () => localStorage.getItem('user_id');

const useStyles = makeStyles (theme => ({
  card: {
    maxWidth: 345,
  },
  root: {
    flexGrow: 1,
    margin : '100px',
   
},
button : {
    float : "right",
    margin : "40px",
    width : "200px",
    alignItems: 'center',
  justifyContent: 'center',
    
},
modal: {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
},
paper: {
  backgroundColor: theme.palette.background.paper,
  border: '2px solid #000',
  boxShadow: theme.shadows[5],
  padding: theme.spacing(2, 4, 3),
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
grow: {
  flexGrow: 1,
},
menuButton: {
  marginRight: theme.spacing(2),
},
title: {
  display: 'none',
  [theme.breakpoints.up('sm')]: {
    display: 'block',
  },
},
search: {
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: fade(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: fade(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
},
searchIcon: {
  width: theme.spacing(7),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
},
inputRoot: {
  color: 'inherit',
},
inputInput: {
  padding: theme.spacing(1, 1, 1, 7),
  transition: theme.transitions.create('width'),
  width: '100%',
  [theme.breakpoints.up('md')]: {
    width: 200,
  },
},
sectionDesktop: {
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
},
sectionMobile: {
  display: 'flex',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
},
}));

export default function ImgMediaCard() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/* <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem> */}
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  // const [openDialog, setOpenDialog] = React.useState(false);
  // const theme = useTheme();
  // const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  // const handleClickOpenDialog = () => {
  //   setOpenDialog(true);
  // };

  // const handleCloseDialog = () => {
  //   setOpenDialog(false);
  // };

  // return (
  //   <div>
  //     <Button variant="outlined" color="primary" onClick={handleClickOpenDialog}>
  //       Open responsive dialog
  //     </Button>
  //     <Dialog
  //       fullScreen={fullScreen}
  //       open={open}
  //       onClose={handleCloseDialog}
  //       aria-labelledby="responsive-dialog-title"
  //     >
  //       <DialogTitle id="responsive-dialog-title">{"Are you sure you want to delete?"}</DialogTitle>
  //       <DialogContent>
  //         <DialogContentText>
  //           Let Google help apps determine location. This means sending anonymous location data to
  //           Google, even when no apps are running.
  //         </DialogContentText>
  //       </DialogContent>
  //       <DialogActions>
  //         <Button autoFocus onClick={handleCloseDialog} color="primary">
  //           Disagree
  //         </Button>
  //         <Button onClick={handleCloseDialog} color="primary" autoFocus>
  //           Agree
  //         </Button>
  //       </DialogActions>
  //     </Dialog>
  //   </div>
  // )




  const [open, setOpen] = React.useState(false);
  const [copen, setcOpen] = React.useState(false);
  const [postData, setPostData] = useState([])

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const createOpen = () => {
    setcOpen(true);
  };

  const createClose = () => {
    setcOpen(false);
  };
  

  const [description, setDescription] = useState('')
  const [title, setTitle] = useState('')
  useEffect(() => {
    console.log(getPosts())
    getPosts().then(data => {
      if(!data.error){
        setPostData(data.posts);
      }
     
    })
   },[])
  
  const posthistory  = useHistory();
  const deleteThePost = (userId,postId) =>{
    let personId = getUserId();
     if(userId === personId){
     
      deletePost(postId).then(data => {
        if(!data.error){
          setPostData(postData.filter(post => post._id !== postId))
        }else{
          console.log("Some error occured while deleting");
        }
      })
     }else{
       return(
         <>
        <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      </>
       )
     }
    
   
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    
    createPost({ title, description }).then(data => {
     if(!data.error){
      createClose()
      getPosts().then(data => {
        setPostData(data.posts);
        setDescription('');
      setTitle('')
       })
      posthistory.push('/posts')
     }
     
     })
    }
return (
  <>
<div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
          Story Digital Create Blogs
          </Typography>
          {/* <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div> */}
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {/* <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton> */}
            {/* <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
             {/* <Button size="small" color="primary" >
              Delete
             </Button> */}
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
<div className={classes.root}> 
{/* <Button className = {classes.button} variant="contained" color="primary" onClick={e => navigateToCreatePost(e)}>
  Create a new post
</Button>      */}

<Grid container spacing={20} style={{textAlign:'center'}}>
<Button className={classes.button} variant="contained" color="primary" onClick={createOpen}>
  Create a new post
</Button> 
</Grid>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={copen}
        onClose={createClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={copen}>
          <div className={classes.paper}>
            {/* <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p> */}

            <form className="form" onSubmit={e => handleSubmit(e)} className={clsx(classes.margin, classes.withoutLabel, classes.textField)} Validate autoComplete="off">
                    
            <TextField
            className={clsx(classes.margin, classes.textField)}
          id="outlined-textarea"
          label="Title"
          placeholder="Title"
          multiline
          variant="outlined"
          onChange={e => setTitle(e.target.value)}
               value = {title}/>
               
            <TextField
            className={clsx(classes.margin, classes.textField)}
          id="outlined-textarea"
          label="Description"
          placeholder="Description"
          multiline
          variant="outlined"
          value= {description}
              onChange={e => setDescription(e.target.value)}/>

                {/* <Button
                className={clsx(classes.margin, classes.textField)}
            variant="contained"
            component="label"
            size="large"
          >
            Upload File
            <input
              type="file"
              style={{ display: "none" }}
            />
          </Button> */}
<Button className={clsx(classes.margin, classes.textField)} type="submit"  size="large"  variant="contained" color="primary" disableElevation>
Create Post
            </Button>
           
          </form>
          </div>
        </Fade>
      </Modal>


<Grid container spacing={1}>
    <Grid container item xs={12} spacing={3}>
      {
        postData.map(post => (
          <Grid item xs={12} sm={4} >

     <Card className={classes.card} key={post._id} >
            <CardActionArea onClick={handleOpen}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://www.w3schools.com/howto/img_snow.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {post.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {post.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       
        <Button size="small" color="primary" onClick={() => deleteThePost(post.userId,post._id)}>
          Delete
        </Button>
        
      </CardActions>
      </Card>
       

        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {/* <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p> */}
            <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://www.w3schools.com/howto/img_forest.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {post.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {post.description}
          </Typography>
        </CardContent>
      </CardActionArea>
            
          </div>
        </Fade>
      </Modal>
    
      
    
   </Grid>

        ))
      }
  
    
  
</Grid>
</Grid>
</div>
</>
);
}