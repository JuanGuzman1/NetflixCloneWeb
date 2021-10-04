import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://1000marcas.net/wp-content/uploads/2020/01/Logo-Netflix.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form action="">
          <h1>Sign in</h1>
          <input type="email" placeholder="Email or phone number" />
          <input type="password" placeholder="placeholder" />
          <button className="loginButton">Sign in</button>
          <span>
            New to Netflix? <b>Sign up now.</b>
          </span>
          <small>
            This page is protected by google reCaptcha to ensure you're not
            robot <b>Learn more.</b>
          </small>
        </form>
      </div>
    </div>
  );
};

export default Login;
