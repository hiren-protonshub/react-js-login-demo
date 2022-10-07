import "./SignUp.css";

const SignUp = () => {
  const signUp = () => {
    alert("signUp successfull");
  };

  return (
    <div className="mainView">
      <div className="innerView">
        <div className="inputView">
          <input placeholder="Enter Name" className="inputText" />
        </div>
        <div className="inputView">
          <input placeholder="Enter Email" className="inputText" />
        </div>
        <div className="inputView">
          <input placeholder="Create Password" className="inputText" />
        </div>
        <div className="inputView">
          <input placeholder="Reapet Password" className="inputText" />
        </div>
        <div className="inputView" onClick={() => signUp()}>
          <div className="loginButton">
            <text className="loginText">Sign Up</text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
