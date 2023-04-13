import "./App.css";
import React, { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login.jsx";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Checkout from "./components/Checkout.jsx";

import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import HomeHeader from "./components/HomeHeader";

import Paymentmethod from "./components/Paymentmethod";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const promise = loadStripe(
  "pk_test_51MmHHQSCyQoTTiMhiboBUQOmQXIElWGB5qFTWhtJMnNLtlQtVwBmdceGSqkXwExWCBOzJgOTLN0tuDr5xtUqchZB00YrRhMlZP"
);
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((UserAuth) => {
      console.log("the user is >>>>", UserAuth);

      if (UserAuth) {
        dispatch({
          type: "SET_USER",
          user: UserAuth,
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
    <div className="app">
      <Routes>
      <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <HomeHeader />
                <Home />
              </>
            }
          />
           <Route
            path="/checkout"
            element={
              <>
                <Header />

                <Checkout />
              </>
            }
          />
      </Routes>

      {/* <Router> */}
        {/* <Routes>
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
        </Routes> */}

        {/* <Routes> */}
          {/* <Route
            path="/"
            element={
              <>
                <Header />
                <HomeHeader />
                <Home />
              </>
            }
          /> */}
        {/* </Routes> */}
        {/* <Routes> */}
          {/* <Route
            path="/checkout"
            element={
              <>
                <Header />

                <Checkout />
              </>
            }
          /> */}
        {/* </Routes> */}
        {/* <Routes>
          <Route
            path="/payment"
            element={
              <>
                <Elements stripe={promise}>
                  <Paymentmethod />
                </Elements>
              </>
            }
          />
        </Routes> */}
      {/* </Router> */}
    </div>
  );
}

export default App;
