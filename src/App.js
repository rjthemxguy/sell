
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";


const HatsPage = () => (
<div>

  <h1>Hats are here</h1>
</div>

);


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path = "/" component = {HomePage}/> 
        <Route exact path = "/hats" component = {HatsPage}/> 
      </Switch>
      
    </div>
  );
}

export default App;
