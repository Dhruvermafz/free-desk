import React, { useState } from "react";
import axios from "axios";

const API_URL = "https://your-api-url"; // Update with your actual API URL

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in both fields");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(`${API_URL}/auth/login`, {
        email,
        password,
      });
      // Handle success (store token, redirect, etc.)
      console.log(response.data);
      setLoading(false);
    } catch (err) {
      setError("Invalid credentials or server error");
      setLoading(false);
    }
  };

  return (
    <section className="login-area pt-80px pb-80px position-relative">
      <div className="shape-bg position-absolute top-0 left-0 w-100 h-100 opacity-2 z-index-n1"></div>
      <div className="container">
        <form onSubmit={handleSubmit} className="card card-item login-form">
          <div className="card-body row p-0">
            <div className="col-lg-6">
              <div className="form-content py-4 pr-60px pl-60px border-right border-right-gray h-100 d-flex align-items-center justify-content-center">
                <img
                  src="images/undraw-remotely.svg"
                  alt="Image"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-5 mx-auto">
              <div className="form-action-wrapper py-5">
                <div className="form-group">
                  <h3 className="fs-22 pb-3 fw-bold">Log in to Disilab</h3>
                  <div className="divider">
                    <span></span>
                  </div>
                  <p className="pt-3">
                    Enter your email address and login to your account.
                  </p>
                </div>
                <div className="form-group">
                  <label className="fs-14 text-black fw-medium lh-18">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control form--control"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="fs-14 text-black fw-medium lh-18">
                    Password
                  </label>
                  <div className="input-group">
                    <input
                      className="form-control form--control password-field"
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="input-group-append">
                      <button
                        className="btn theme-btn-outline theme-btn-outline-gray toggle-password"
                        type="button"
                      >
                        {/* Eye icon toggle */}
                      </button>
                    </div>
                  </div>
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="form-group d-flex align-items-center justify-content-between">
                  <div className="form-check fs-14">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="rememberMe"
                    />
                    <label className="form-check-label" for="rememberMe">
                      Remember me!
                    </label>
                  </div>
                  <a
                    href="recover-password.html"
                    className="btn-text fs-14 hover-underline fw-regular"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div className="form-group">
                  <button
                    id="send-message-btn"
                    className="btn theme-btn w-100"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Logging in..." : "Log in"}{" "}
                    <i className="la la-arrow-right icon ms-1"></i>
                  </button>
                </div>
                {/* Social login buttons */}
                <div className="social-icon-box">
                  <div className="pb-3 d-flex align-items-center">
                    <hr className="flex-grow-1 border-top-gray" />
                    <span className="mx-2 text-gray-2 fw-medium text-uppercase fs-14">
                      or
                    </span>
                    <hr className="flex-grow-1 border-top-gray" />
                  </div>
                  {/* Google, Facebook, Twitter login buttons */}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
