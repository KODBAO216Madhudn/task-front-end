// src/components/SignUpPage.js
import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import CommonTextField from "../../common/formComponents/CommonTextField";
import SubmitButton from "../../common/submitButton/SubmitButton";
import { useDispatch, useSelector } from "react-redux";
import CommonDatePicker from "../../common/formComponents/CommonDatePicker";
import {
  resetErrMessage,
  resetMessage,
  userSignup,
} from "../../features/login/loginSlice";
import MessageNotifier from "../../common/notifier/MessageNotifier";
import ErrMessageNotifier from "../../common/notifier/ErrMessageNotifier";
import { useNavigate } from "react-router-dom";
import { addDoc, deleteDoc, doc } from "firebase/firestore";
import { colRef, db } from "../../firebase";

// --------------------------------------------------------------------
const validationSchema = Yup.object({
  userName: Yup.string().required("User Name/Email is required"),
  fullName: Yup.string().required("Full Name is required"),
  password: Yup.string().required("Password is required"),
  dob: Yup.date().required("Date of birth is required").nullable(),
  address: Yup.string().required("Address is required"),
  phoneNo: Yup.string().required("Phone number is required"),
});

// -----------------------------------------------------------------------
const SignUpPage = () => {
  const login = useSelector((store) => store.login);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
      dob: null,
      address: "",
      phoneNo: "",
      fullName: "",
    },
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // dispatch(
      //   userSignup({
      //     uname: values.userName,
      //     upass: values.password,
      //     fullName: values.fullName,
      //     dob: values.dob.$d,
      //     phoneNo: values.phoneNo,
      //     address: values.address,
      //   })
      // ).then((res) => {
        
      //   if (res?.payload?.data?.ok) {

      //     setTimeout(() => {
      //       dispatch(resetMessage());
      //       navigate("/");
      //     }, [3000]);
      //   }
      //   if (res?.payload?.data?.error) {
      //     setTimeout(() => {
      //       dispatch(resetErrMessage());
      //     }, [3000]);
          
      //   }
      // });
    
      // Using Firestore
      addDoc(colRef, {
          uname: values.userName,
          upass: values.password,
          fullName: values.fullName,
          dob: values.dob.$d,
          phoneNo: values.phoneNo,
          address: values.address,
      }).then(res=>{
        console.log("res ",res);
        navigate("/");
      })
    },
  });

  //  // For Delete
  //  const id="31JKWLBUI1hqAdijpzDA";
  //  const docRef = doc(db, 'client', id ) //ID Means deleting id
  //  deleteDoc(docRef).then((res)=>{
  //    console.log("del ",res)
  //  })

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
          Sign Up
        </Typography>
        <form noValidate onSubmit={formik.handleSubmit}>
          <Grid container>
            <Grid
              item
              xs={12}
              md={12}
              lg={12}
              sx={{
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <CommonTextField
                type="text"
                variant="outlined"
                margin="normal"
                required={true}
                fullWidth={true}
                label="Full Name"
                name="fullName"
                id="fullName"
                autoComplete="fullName"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                errors={
                  formik.touched.fullName && Boolean(formik.errors.fullName)
                }
                helperText={formik.touched.fullName && formik.errors.fullName}
              />
              <CommonDatePicker
                variant="outlined"
                margin="normal"
                required={true}
                fullWidth={true}
                label="Date Of Birth"
                name="dob"
                id="dob"
                autoComplete="dob"
                value={formik.values.dob}
                onChange={(date) => {
                  formik.setFieldValue("dob", date);
                }}
                onBlur={formik.handleBlur}
                errors={formik.touched.dob && Boolean(formik.errors.dob)}
                helperText={formik.touched.dob && formik.errors.dob}
              />
              <CommonTextField
                type="text"
                variant="outlined"
                margin="normal"
                required={true}
                fullWidth={true}
                label="Phone No."
                name="phoneNo"
                id="phoneNo"
                autoComplete="phoneNo"
                value={formik.values.phoneNo}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                errors={
                  formik.touched.phoneNo && Boolean(formik.errors.phoneNo)
                }
                helperText={formik.touched.phoneNo && formik.errors.phoneNo}
              />
              <CommonTextField
                type="text"
                variant="outlined"
                margin="normal"
                required={true}
                fullWidth={true}
                label="Address"
                name="address"
                id="address"
                autoComplete="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                errors={
                  formik.touched.address && Boolean(formik.errors.address)
                }
                helperText={formik.touched.address && formik.errors.address}
              />
              <CommonTextField
                type="email"
                variant="outlined"
                margin="normal"
                required={true}
                fullWidth={true}
                label="Email Address"
                name="userName"
                id="userName"
                autoComplete="userName"
                value={formik.values.userName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                errors={
                  formik.touched.userName && Boolean(formik.errors.userName)
                }
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
                id="password"
                autoComplete="current-password"
                value={formik.values.password}
                onChange={formik.handleChange}
                errors={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              {formik.values.userName &&
                formik.values.password &&
                !formik.errors.userName &&
                !formik.errors.password &&
                formik.values.dob &&
                formik.values.address &&
                formik.values.phoneNo &&
                formik.values.fullName &&
                !formik.errors.dob &&
                !formik.errors.address &&
                !formik.errors.phoneNo &&
                !formik.errors.fullName && (
                  <SubmitButton
                    type="submit"
                    fullWidth={true}
                    variant="contained"
                    color="primary"
                    loading={login.loading}
                    text="Sign Up"
                  />
                )}
            </Grid>
          </Grid>
        </form>
      </div>

      {login?.message && <MessageNotifier message={login.message} />}
      {login?.errMessage && <ErrMessageNotifier message={login.errMessage} />}
    </Container>
  );
};

export default SignUpPage;
