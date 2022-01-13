import React,{useEffect} from 'react'
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import {BrowserRouter as Router , Switch , Route} from "react-router-dom"
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
import Orders from './Orders'

const promise = loadStripe("pk_test_51K4TejSI8lVOzCqDzfw2rJEjQl6uyliD9PC8o8vSmcquMH2urzoUgZA7zQzqKUHsIx4nNzDYGSUScMrsl0Woou2j00OwX6dmIL");
function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS --- ", authUser);

      if (authUser) {

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/orders'>
            <Header />
            <Orders />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;