import React, { useState } from 'react'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'
import { useAuthContext } from '../context/AuthContext'
import PushAlert from '../layouts/PushAlert';
import formatTitle from '../utilities/formatTitle';

function Login() {

  // console.log(Login.name);
  const username = useRef();
  const password = useRef();
  const [alert, setAlert] = useState([]);
  const title = formatTitle('Login');


  const { login } = useAuthContext();
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (login(username.current.value, password.current.value)) {
        setAlert([{ title: title, time: new Date(), body: "Login success. Loading...", type: "success" }]);
        navigate("/Dashboard");
      }
      else {
        setAlert([{ title: title, time: new Date(), body: "Login failed. please enter valid credentials.", type: "warning" }]);
        username.current.value = "";
        password.current.value = "";
        e.target.classList.add('was-validated')
      }

    }
    catch {
      setAlert([{ title: title, time: new Date(), body: "Login failed. please enter valid credentials.", type: "warning" }]);
      console.log("Failed ex");
      username.current.value = "";
      password.current.value = "";
      e.target.classList.add('was-validated')
    }
  }


  return (
    <div className="container-fluid page-body-wrapper full-page-wrapper">
      <div className="content-wrapper d-flex align-items-center auth px-0">
        <PushAlert data={alert} ></PushAlert>
        <div className="row w-100 mx-0">
          <div className="col-lg-4 mx-auto">
            <div className="auth-form-light text-left py-5 px-4 px-sm-5">
              <div className="brand-logo">
                <img src="/images/logo.svg" alt="logo"></img>
              </div>
              <h4>Hello! let's get started</h4>
              <h6 className="font-weight-light">Sign in to continue.</h6>

              <form className="pt-3 needs-validation " onSubmit={handleSubmit} >
                <div className="form-group">
                  <input ref={username} required placeholder="Username" className="form-control form-control-lg"></input>
                </div>
                <div className="form-group">
                  <input ref={password} required type="Password" placeholder="Password" className="form-control form-control-lg"></input>
                </div>
                <div className="mt-3">
                  <button type='submit' className="btn btn-primary btn-lg auth-form-btn">SIGN IN</button>
                </div>
                {/* <div className="my-2 d-flex justify-content-between align-items-center">
                  <div className="form-check">
                    <label className="form-check-label text-muted">
                      <input type="checkbox" className="form-check-input"></input>
                      Keep me signed in
                    </label>
                  </div>
                  <a href="#" className="auth-link text-black">Forgot password?</a>
                </div>
                <div className="mb-2">
                  <button type="button" className="btn btn-block btn-facebook auth-form-btn">
                    <i className="mdi mdi-facebook me-2"></i>Connect using facebook
                  </button>
                </div>
                <div className="text-center mt-4 font-weight-light">
                  Don't have an account? <a href="register.html" className="text-primary">Create</a>
                </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Login