import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Login from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";
import DashBoard from "./pages/dashboard/DashBoard";
import reportWebVitals from "./reportWebVitals";
import ErrorPage from "./components/ErrorPage";
import {
  Route,
  Link,
  BrowserRouter,
  Switch,
  NavLink,
  Redirect,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/Store";

const routs = (

  <BrowserRouter>
    <div>
      {/* <ul>
        <li>
          <NavLink to="/login" activeStyle={{color:"red"}}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/signup" activeStyle={{color:"red"}}>SignUp</NavLink>
        </li>
        <li>
          <NavLink to="/contactus" activeStyle={{color:"red"}}>Contact Us</NavLink>
        </li>
      </ul> */}
      <Provider store={store}>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return(
              localStorage.getItem('loginData1') == 'true' ? 
            (<Redirect to="/dashboard" />) : (<Redirect to="/login" />));
          }}
        />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/dashboard" component={DashBoard} />
        <Route component={ErrorPage} />
      </Switch>
      </Provider>
      
    </div>
  </BrowserRouter>
);
ReactDOM.render(routs, document.getElementById("root"));
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
