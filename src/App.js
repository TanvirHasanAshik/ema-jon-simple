import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Error from './components/Error/Error';
import Header from './components/Header/Header';
import Manage from './components/Manage/Manage';
import ProductDetails from './components/productDetails/ProductDetails';
import Review from './components/Review/Review';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Shop></Shop>
          </Route>
          <Route path='/shop'>
            <Shop></Shop>
          </Route>
          <Route path='/review'>
            <Review></Review>
          </Route>
          <Route path='/inventory'>
            <Manage></Manage>
          </Route>
          <Route path='/product=:productKey'>
            <ProductDetails></ProductDetails>
          </Route>
          <Route path='*'>
            <Error></Error>
          </Route>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
