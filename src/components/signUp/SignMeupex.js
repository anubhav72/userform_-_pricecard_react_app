import { Formik, Field, ErrorMessage } from "formik";
import React from "react";
import "./resource/signUp.css";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/signUpSlice";
import signup_mobile from "./resource/signupmobile.png";

import { Link } from "react-router-dom";

import * as Yup from "yup";

const SignUp = () => {
  const dispatch = useDispatch();

  const passRegExp = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const emailRegExp = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
  const myValidation = Yup.object().shape({
    username: Yup.string()
      .min(3, "UserName Must Five Letter")
      .max(20, "Too Long!")
      .required("UserName Required"),
    email: Yup.string()
      .matches(emailRegExp, "Email Invalid")
      .required("Enter Email"),
    mobile: Yup.string()
      .min(10, "Enter Valid Mobile Number")
      .max(10, "Mobile Number Must Be 10 Digits")
      .matches(phoneRegExp, "Mobile number is not valid")
      .required("Phone No Required"),
    password: Yup.string()
      .min(6, "password must be 6 char !")
      .max(16, "only 16 char ! ")
      .matches(
        passRegExp,
        "Include a number ! At least one upper case ! letter Include a symbol !"
      )
      .required("Password must !"),
    c_password: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password not match")
      .required("conform your password !"),
    country: Yup.string().required("Select Language !"),
  });

  return (
    <>
      <div className="center">
        <div className="signup-container ">
          <div className="one-signup-con">
            <img src={signup_mobile} alt="" />
            <div className="signup-account">
              <h1>Create a new Account</h1>
            </div>
          </div>
          <div className="two-signup-con">
            <Formik
              initialValues={{
                username: "",
                email: "",
                country: "",
                mobile: "",
                password: "",
                c_password: "",
              }}
              validationSchema={myValidation}
              onSubmit={(formdata) => {
                const { c_password, ...outhers } = formdata;
                // same shape as initial values

                dispatch(addUser(outhers));
              }}
            >
              {({ values, handleSubmit, handleChange, errors, touched }) => (
                <form className="signup-form" onSubmit={handleSubmit}>
                  <div className="main-signup-head">
                    <h1>Sign Up</h1>
                    <p>Let's set up your personal account</p>
                    {/* Name */}
                    <Field
                      type="text"
                      name="username"
                      placeholder="User Name"
                    />
                    <div className="signup-error">
                      <ErrorMessage name="username" />
                    </div>
                    {/* Email */}
                    <Field type="email" name="email" placeholder="Email" />
                    <div className="signup-error">
                      <ErrorMessage name="email" />
                    </div>
                    {/* CC code */}
                    <Field component="select" name="country">
                      <option value="" disabled>
                        Select a Country
                      </option>
                      <option value="+91">+91</option>
                      <option value="+43">+43</option>
                      <option value="+42">+42</option>
                      <option value="+32">+32</option>
                      <option value="+87">+87</option>
                      <option value="+67">+67</option>
                      <option value="+01">+01</option>
                    </Field>
                    <div className="signup-error">
                      <ErrorMessage name="language" />{" "}
                    </div>

                    {/* mobile  */}
                    <Field type="mobile" name="mobile" placeholder="Phone No" />
                    <div className="signup-error">
                      <ErrorMessage name="mobile" />
                    </div>
                    {/* password  */}
                    <Field
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                    <div className="signup-error">
                      <ErrorMessage name="password" />
                    </div>
                    {/* c_Password  */}
                    <Field
                      type="c_password"
                      name="c_password"
                      placeholder="Conform Password"
                    />
                    <div className="signup-error">
                      <ErrorMessage name="c_password" />
                    </div>
                    <button type="submit">Create Account</button>
                  </div>
                  <div className="main-signup-info">
                    <p style={{ marginTop: "8px", fontSize: "12px" }}>OR</p>

                    <p>
                      <Link to="/userdata">See outher Users</Link>{" "}
                    </p>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
