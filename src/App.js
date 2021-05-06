
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Header from './components/header/header.component';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";




function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route exact path = "/" component = {HomePage}/> 
        <Route exact path = "/shop" component = {ShopPage}/> 
        <Route exact path = "/signin" component = {SignInAndSignUpPage}/> 
      </Switch>
      
    </div>
  );
}

export default App;
