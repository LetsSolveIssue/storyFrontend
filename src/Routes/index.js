import React from 'react';
import { Route,Switch } from 'react-router-dom';

import HomePage from '../components/layout/homepage'
import Login from '../components/Login/index'
import SignUp from '../components/SignUp/index'
import Posts from '../components/Dashboard/post/posts'
import PostForm from '../components/Dashboard/post/postForm'
const Routes = () => (
  <Switch >
    <Route exact path="/" component = {HomePage} />
    <Route  path="/login" component = {Login} />
    <Route  path="/signUp" component = {SignUp} />
    <Route exact path="/posts" component = {Posts} />
    <Route  path="/posts/create" component = {PostForm} />
   </Switch>
);

export default Routes;