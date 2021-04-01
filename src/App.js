import './App.css';
import React from 'react';
import HomePage  from './pages/homepage/homepage.component.jsx';
import { Route, Switch } from 'react-router-dom';

const HatsPage = () => (
<div>
  <h1> HatsPage </h1>
</div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop/hats' component={HatsPage}/>
      </Switch> 
    </div>
  );
}

export default App;
