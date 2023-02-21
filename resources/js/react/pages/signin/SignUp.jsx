import React, { useEffect, useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Btn from "../../components/Btn";
import axios from "axios";
import { toast } from "react-toastify";

import { FaMale, FaFemale } from "react-icons/fa";
// import { motion as m, AnimatePresence } from "framer-motion";
import { Host } from "../../host";
const notifyError = (errors, touched, key) => {
    if (errors[key] && touched[key]) {
        toast.error(errors[key]);
    }
};
export default ({ setHaveAnAccount }) => {
 
    const SignUpSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, "Write Your Full Name")
            .required("name is required"),
        email: Yup.string()
            .email("Invalid email")
            .required("email is required"),
        password: Yup.string()
            .min(6, "password must be at least 6 characters")
            .required("password is required"),
        password_confirmation: Yup.string()
            .oneOf([Yup.ref("password"), null], "passwords must match")
            .required("confirm your password"),
        isMale: Yup.boolean()
            .transform((value, originalValue) => {
                if (originalValue === "male") {
                    return true;
                } else if (originalValue === "female") {
                    return false;
                }
                return value;
            })
            .required("Please select a gender"),
        phone: Yup.number().required("phone number is required"),
        address: Yup.string().required("address is required"),
    });
    let submitHandeler = async (values, { setSubmitting, setStatus }) => {
        try {
            setSubmitting(true);

            let res = await axios.post(`${Host}api/register`, values);
            if (res.status === 200) {
                if (res.data.success === 1) {
                    setHaveAnAccount(true);
                    toast.success(res.data.msg);
                } else {
                    setStatus({
                        success: 0,
                        msg: "email is already in use",
                    });
                    toast.warn(res.data.msg);
                }
            }
            console.log(res);
        } catch (error) {
            console.error(error);
            setStatus({
                success: 0,
                msg: "sign up blocked",
            });
            toast.error(res.data.msg);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    password: "",
                    password_confirmation: "",
                    isMale: true,
                    phone: "",
                    address: "",
                }}
                validationSchema={SignUpSchema}
                onSubmit={submitHandeler}
            >
                {({ isSubmitting, values, setFieldValue }) => (
                    <Form className="flex flex-col items-center justify-center ">
                        <div className="relative h-12  ">
                            <Field
                                className=" relative w-full rounded placeholder-gray-700 shadow focus:ring-2 valid:focus:ring-teal-400 invalid:focus:ring-red-400"
                                autoComplete="true"
                                name="name"
                                type="text"
                                placeholder="Name"
                            />
                            <ErrorMessage
                                component="div"
                                className=" absolute left-0 -top-full flex h-full w-full animate-slideIn items-center  justify-center rounded  border  border-solid bg-white/90 p-1 text-red-400 shadow-lg"
                                name="name"
                            />
                        </div>

                        <div className=" relative h-12 ">
                            <Field
                                className=" w-full rounded  placeholder-gray-700 shadow focus:ring-2 valid:focus:ring-teal-400 invalid:focus:ring-red-400"
                                autoComplete="true"
                                name="email"
                                type="email"
                                placeholder="Email"
                            />
                            <ErrorMessage
                                component="div"
                                className=" absolute left-0 -top-full flex h-full w-full animate-slideIn items-center  justify-center rounded  border  border-solid bg-white/90 p-1 text-red-400 shadow-lg"
                                name="email"
                            />
                        </div>
                        <div className=" relative h-12">
                            <Field
                                className=" rounded placeholder-gray-700 shadow focus:ring-2 valid:focus:ring-teal-400 invalid:focus:ring-red-400"
                                autoComplete="true"
                                name="password"
                                type="password"
                                placeholder="Password"
                            />
                            <ErrorMessage
                                component="div"
                                className=" absolute left-0 -top-full flex h-full w-full animate-slideIn items-center  justify-center rounded  border  border-solid bg-white/90 p-1 text-red-400 shadow-lg"
                                name="password"
                            />
                        </div>
                        <div className=" relative  h-12">
                            <Field
                                className=" relative  rounded placeholder-gray-700 shadow focus:ring-2 valid:focus:ring-teal-400 invalid:focus:ring-red-400"
                                autoComplete="true"
                                name="password_confirmation"
                                type="password"
                                placeholder="Confirm Password"
                            />
                            <ErrorMessage
                                component="div"
                                className=" absolute left-0 -top-full flex h-full w-full animate-slideIn items-center  justify-center rounded  border  border-solid bg-white/90 p-1 text-red-400 shadow-lg"
                                name="password_confirmation"
                            />
                        </div>

                        <div className=" flex gap-2 p-2">
                            <div className=" flex flex-row-reverse items-center gap-2 p-2 ">
                                <Field
                                    value="male"
                                    id="male"
                                    checked={values.isMale == "male"}
                                    onClick={() =>
                                        setFieldValue("isMale", true)
                                    }
                                    className="  cursor-pointer text-teal-400 !ring-teal-400  hover:scale-110"
                                    name="isMale"
                                    type="radio"
                                />

                                <label className=" cursor-pointer hover:scale-105 active:scale-95" htmlFor="male">
                                    <FaMale
                                        className=" text-sky-500"
                                        size={24}
                                    />
                                </label>
                            </div>
                            <div className=" flex items-center gap-2 p-2 ">
                                <Field
                                    value="female"
                                    id="female"
                                    checked={values.isMale == "female"}
                                    onClick={() =>
                                        setFieldValue("isMale", false)
                                    }
                                    className="  cursor-pointer text-teal-400 !ring-teal-400  hover:scale-110"
                                    name="isMale"
                                    type="radio"
                                />
                                <label className=" cursor-pointer hover:scale-105 active:scale-95" htmlFor="female">
                                    <FaFemale
                                        className=" text-pink-500"
                                        size={24}
                                    />
                                </label>
                            </div>
                        </div>
                        <div className=" relative h-12">
                            <Field
                                className="  rounded placeholder-gray-700 shadow focus:ring-2 valid:focus:ring-teal-400 invalid:focus:ring-red-400"
                                name="phone"
                                type="text"
                                placeholder="Phone"
                            />
                            <ErrorMessage
                                component="div"
                                className=" absolute left-0 -top-full flex h-full w-full animate-slideIn items-center  justify-center rounded  border  border-solid bg-white/90 p-1 text-red-400 shadow-lg"
                                name="phone"
                            />
                        </div>
                        <div className=" relative h-12">
                            <Field
                                className=" rounded placeholder-gray-700 shadow focus:ring-2 valid:focus:ring-teal-400 invalid:focus:ring-red-400"
                                autoComplete="true"
                                name="address"
                                type="text"
                                placeholder="Address"
                            />
                            <ErrorMessage
                                component="div"
                                className=" absolute left-0 -top-full flex h-full w-full animate-slideIn items-center  justify-center rounded  border  border-solid bg-white/90 p-1 text-red-400 shadow-lg"
                                name="address"
                            />
                        </div>
                        <div className=" flex w-full justify-between p-4 ">
                            <Btn
                                onClick={() => {
                                    setHaveAnAccount(true);
                                }}
                                className="px-4 py-2"
                                shape="outlined"
                                type="button"
                            >
                                close
                            </Btn>
                            <Btn
                                shape="filled"
                                className="px-4 py-2"
                                type="submit"
                                disabled={isSubmitting}
                            >
                                Submit
                            </Btn>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
};
