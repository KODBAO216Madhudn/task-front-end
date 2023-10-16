// src/components/LoginPage.js
import React, { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import CommonTextField from "../../common/formComponents/CommonTextField";
import SubmitButton from "../../common/submitButton/SubmitButton";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  resetErrMessage,
  resetMessage,
  userLogin,
} from "../../features/login/loginSlice";
import MessageNotifier from "../../common/notifier/MessageNotifier";
import ErrMessageNotifier from "../../common/notifier/ErrMessageNotifier";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { colRef } from "../../firebase";
import { getDocs } from "firebase/firestore";
// --------------------------------------------------------------------
const validationSchema = Yup.object({
  userName: Yup.string().required("User Name/Email is required"),
  password: Yup.string().required("Password is required"),
});

// -----------------------------------------------------------------------
const LoginPage = () => {
  const login = useSelector((store) => store.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [client, setClient] = useState([]);
  // let client = [];
console.log("Welcome to login
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: (values) => {

      client.length > 0 && client.map(data => {
        if(data.uname === values.userName && data.upass === values.password){
          navigate("/task/landing-page");
        }
      })
      // dispatch(
      //   userLogin({
      //     uname: values.userName,
      //     upass: values.password,
      //   })
      // ).then((res) => {
      //   console.log("res", res);
      //   if (res?.payload?.data?.ok) {
      //     setTimeout(() => {
      //       dispatch(resetMessage());
      //       navigate("/task/landing-page");
      //     }, [3000]);
      //   }
      //   if (res?.payload?.data?.error) {
      //     setTimeout(() => {
      //       dispatch(resetErrMessage());
      //     }, [3000]);
      //   }
      // });
    },
  });

  useEffect(() => {
    // get collection data
    getDocs(colRef)
      .then((snaopshot) => {
        let dataPush=[];
        snaopshot.docs.forEach((doc) => {
          dataPush.push({ ...doc.data(), id: doc.id });
          console.log("dataPush ", dataPush)
        });
        setClient([...dataPush]);
        // client=[...dataPush];
      })
      .catch((err) => {
        console.log("err ", err.message);
      });
  }, []);

  console.log("client ",client)
  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography
          variant="h4"
          mt="5rem"
          sx={{
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            textAlign: "center",
          }}
        >
          Sign In
        </Typography>
        <form noValidate onSubmit={formik.handleSubmit}>
          <CommonTextField
            type="text"
            variant="outlined"
            margin="normal"
            required={true}
            fullWidth={true}
            label="Email Address"
            name="userName"
            autoComplete="userName"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errors={formik.touched.userName && Boolean(formik.errors.userName)}
            helperText={formik.touched.userName && formik.errors.userName}
          />
          <CommonTextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            name="password"
            autoComplete="current-password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errors={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          {formik.values.userName ? (
            formik.values.password ? (
              !formik.errors.userName ? (
                !formik.errors.password ? (
                  <SubmitButton
                    type="submit"
                    fullWidth={true}
                    variant="contained"
                    color="primary"
                    loading={login.loading}
                    text="Login"
                  />
                ) : (
                  ""
                )
              ) : (
                ""
              )
            ) : (
              ""
            )
          ) : (
            ""
          )}
        </form>
        <span>Register? </span>
        <Link
          to={{
            pathname: "/signup",
          }}
        >
          Sign Up
        </Link>
      </div>

      {login?.message && <MessageNotifier message={login.message} />}
      {login?.errMessage && <ErrMessageNotifier message={login.errMessage} />}

      <FontAwesomeIcon icon={faTwitter} />
    </Container>
  );
};

export default LoginPage;
