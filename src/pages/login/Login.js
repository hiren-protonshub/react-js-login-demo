import "./Login.css";
import { useHistory } from "react-router-dom";
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as loginActions from '../../redux/actions/LoginAction';

// import { useEffect } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  let history = useHistory();

  useEffect(() => {
   
    const loginStatus = localStorage.getItem('loginData1');
    console.log('loginStatus in loginScreen : ',loginStatus);

    // if(loginStatus == 'true'){
    //   //history.push('/dashboard');
    //   alert('true');
    // }else{
    //   alert('false');
    // }
  }, []);

  const login = () => {
    //history.push("/signup");
    //alert('login successfull \nEmail : '+email+'\nPassword : '+password);
    
    dispatch(loginActions.requestLogin(email, password,'123456789',history));
  };

  return (
    <div className="mainView">
      <div className="innerView">
        <div className="inputView">
          <input
            placeholder="Enter Email"
            className="inputText"
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="inputView">
          <input
            placeholder="Enter Password"
            className="inputText"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="inputView" onClick={() => login()}>
          <div className="loginButton">
            <label className="loginText">Login</label>
          </div>
        </div>
      </div>
      {/* <label className="signUPText">Login</label> */}
    </div>
  );
};

export default Login;
