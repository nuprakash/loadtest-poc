import  { useState } from "react";
import SignInForm from "@Components/reactForms/signInForm/signInForm";
// import maskGroup from "../../assets/login/MaskGroup.png";
// import Logo from "../../assets/login/Logo.png";

import LinkTag from "@Components/linkTag/LinkTag";
import {  useDispatch } from "react-redux";
// import { login } from "../../store/actions/Login";
import { DocumentationIcon, SupportIcon } from "../../assets/icons";
import "./Login.module.scss";

const Login = () => {
  const [loginDetail, setLoginDetail] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setLoginDetail({
      ...loginDetail,
      [e?.target?.name]: e?.target?.value,
    });
  };

  console.log(loginDetail);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ isLogged: true }));
    //dispatch(accountLogin(loginDetail));
  };

  return (
    <div className="login-container" 
    // style={{ backgroundImage: `url(${maskGroup})` }}
    >
      <div className="content-container">
        <div className="logo-container">
          {/* <img alt="test IO" src={Logo} style={{ width: "25%" }} /> */}
          <p>NU's Loadtesting solution</p>
        </div>
<SignInForm />
        {/* <form className="form-style" onSubmit={onSubmit}>
          <h3>Log in to your account</h3>

          <input
            className="input-style"
            type="email"
            //required
            name="email"
            placeholder="Username"
            value={loginDetail?.email}
            onChange={handleInput}
          />
          <input
            className="input-style"
            type="password"
            name="password"
            //required
            placeholder="Password"
            value={loginDetail?.password}
            onChange={handleInput}
          />
          <button className="button-primary" type="submit">
            Login
          </button>
        </form> */}
      </div>
      <LinkTag to="" className="forget-password">
        Can't log in?
      </LinkTag>

      <div className="footer-container">
        <div className="footer-inner-container">
          <LinkTag to="" className="linkTag-style">
            <DocumentationIcon />
            <p>Documentation</p>
          </LinkTag>

          <LinkTag to="" className="linkTag-style">
            <SupportIcon />
            <p>Support</p>
          </LinkTag>
        </div>
        <p>Copyright (c) 2022, NU Technology Inc. All rights reserved worldwide.</p>
      </div>
    </div>
  );
};

export default Login;
