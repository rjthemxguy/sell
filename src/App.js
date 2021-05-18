import React from "react";
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Header from './components/header/header.component';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/user.actions";





class App extends React.Component {



unsubscribeFromAuth = null;

componentDidMount() {

const {setCurrentUser} = this.props;

this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
  if(userAuth) {
    const userRef = await createUserProfileDocument(userAuth);

    userRef.onSnapshot(onSnapshot => {
      setCurrentUser({ 
          id:onSnapshot.id,
          ...onSnapshot.data()
        
      })
    })

  }
  setCurrentUser(userAuth);
});
}

componentWillUnmount() {
  this.unsubscribeFromAuth();
}

render() {

  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path = "/" component = {HomePage}/> 
        <Route exact path = "/shop" component = {ShopPage}/> 
        <Route exact path = "/signin" component = {SignInAndSignUpPage}/> 
      </Switch>
      
    </div>
  );

}

}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps)(App);

