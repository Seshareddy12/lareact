import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from './core/Home';
import Menu from "./core/Menu";
import Signup from './user/Signup';
import Signin from './user/Signin';
import Profile from "./user/Profile";
import Users from "./user/Users";
import EditProfile from './user/EditProfile';
import PrivateRoute from './auth/PrivateRoute'
import FindPeople from './user/FindPeople';
import NewPost from './post/NewPost';
import SinglePost from './post/SinglePost';
import EditPost from './post/EditPost';
import ForgotPassword from "./user/ForgotPassword";
import ResetPassword from "./user/ResetPassword";
 
// add route inside <Switch></Switch>
// put after ForgotPassword Route
const MainRouter = () => (
    <div>
        <Menu/>
        <Switch>
        <Route
  exact
  path="/reset-password/:resetPasswordToken"
  component={ResetPassword}
/>

        <Route exact path="/forgot-password" component={ForgotPassword} />
            <Route exact path="/" component={Home}></Route>
            <PrivateRoute exact path="/post/create" component={NewPost}/>
            <Route exact path="/post/:postId" component={SinglePost}></Route>
            <PrivateRoute exact path="/post/edit/:postId" component={EditPost}/>
            <Route exact path="/signup" component={Signup}></Route>
            <Route exact path="/signin" component={Signin}></Route>
            <PrivateRoute exact path="/user/:userId" component={Profile}/>
            <Route exact path="/users" component={Users}></Route>
            <PrivateRoute exact path="/user/edit/:userId" component={EditProfile}/>
            <PrivateRoute exact path="/findPeople" component={FindPeople}/>
            
            
        </Switch>
    </div>
)

export default MainRouter;