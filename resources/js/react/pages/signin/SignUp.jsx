import React, { useRef, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Btn from "../../components/Btn";
import axios from "axios";
import { toast } from "react-toastify";

import { FaMale, FaFemale } from "react-icons/fa";
export default ({ setHaveAnAccount }) => {
    const [isMale, setIsMale] = useState(true);
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
        isMale: Yup.boolean().required("Required"),
        phone: Yup.number().required("phone number is required"),
        address: Yup.string().required("address is required"),
    });
    let submitHandeler = async (values, { setSubmitting, setStatus }) => {
        try {
            setSubmitting(true);
            let res = await axios.post(
                "http://api.inspiration-sy.com:8880/api/register",
                values
            );

            if (res.data.success === 1) {
                alert(values);
                setHaveAnAccount(true);
                toast.success(res.data.msg);
            } else {
                setStatus({
                    success: 0,
                    msg: "email is already in use",
                });
                toast.warn(res.data.msg);
            }
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
                {({ isSubmitting, errors, touched }) => (
                    <>
                        <Form className="flex flex-col items-center justify-center">
                            <div
                                onBlur={() => {
                                    if (errors.name && touched.name) {
                                        toast.error(errors.name);
                                    }
                                }}
                                className=" relative h-12  "
                            >
                                <Field
                                    className=" relative w-full rounded focus:ring-2 focus:valid:ring-blue-500  focus:invalid:ring-red-400"
                                    autoComplete="true"
                                    name="name"
                                    type="text"
                                    placeholder="Name"
                                />
                            </div>

                            <div
                                onBlur={() => {
                                    if (errors.email && touched.email) {
                                        toast.error(errors.email);
                                    }
                                }}
                                className=" relative h-12 "
                            >
                                <Field
                                    className=" w-full rounded focus:ring-2 focus:valid:ring-blue-500  focus:invalid:ring-red-400"
                                    autoComplete="true"
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                />
                            </div>
                            <div
                                onBlur={() => {
                                    if (errors.password && touched.password) {
                                        toast.error(errors.password);
                                    }
                                }}
                                className=" relative h-12"
                            >
                                <Field
                                    className=" rounded focus:ring-2 focus:valid:ring-blue-500  focus:invalid:ring-red-400"
                                    autoComplete="true"
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                />
                            </div>
                            <div
                                onBlur={() => {
                                    if (
                                        errors.password_confirmation &&
                                        touched.password_confirmation
                                    ) {
                                        toast.error(
                                            errors.password_confirmation
                                        );
                                    }
                                }}
                                className=" relative h-12"
                            >
                                <Field
                                    className=" rounded focus:ring-2 focus:valid:ring-blue-500  focus:invalid:ring-red-400"
                                    autoComplete="true"
                                    name="password_confirmation"
                                    type="password"
                                    placeholder="Confirm Password"
                                />
                            </div>

                            <div className=" flex gap-2 p-2">
                                <div className=" flex flex-row-reverse items-center gap-2 p-2 ">
                                    <Field
                                        onClick={() => {
                                            setIsMale(true);
                                        }}
                                        checked={isMale}
                                        className=" form-radio cursor-pointer checked:text-teal-400 hover:scale-110"
                                        name="isMale"
                                        type="radio"
                                        value={true}
                                    />
                                    <FaMale
                                        className=" text-sky-500"
                                        size={24}
                                    />
                                </div>
                                <div className=" flex items-center gap-2 p-2 ">
                                    <Field
                                        onClick={() => {
                                            setIsMale(false);
                                        }}
                                        checked={isMale == false}
                                        className=" form-radio cursor-pointer checked:text-teal-400 hover:scale-110"
                                        name="isMale"
                                        type="radio"
                                        value={false}
                                    />
                                    <FaFemale
                                        className=" text-pink-500"
                                        size={24}
                                    />
                                </div>
                            </div>
                            <div
                                onBlur={() => {
                                    if (errors.phone && touched.phone) {
                                        toast.error(errors.phone);
                                    }
                                }}
                                className=" relative h-12"
                            >
                                <Field
                                    className="  rounded focus:ring-2 focus:valid:ring-blue-500  focus:invalid:ring-red-400"
                                    autoComplete="true"
                                    name="phone"
                                    type="number"
                                    placeholder="Phone"
                                />
                            </div>
                            <div
                                onBlur={() => {
                                    if (errors.address && touched.address) {
                                        toast.error(errors.address);
                                    }
                                }}
                                className=" relative h-12"
                            >
                                <Field
                                    className=" rounded focus:ring-2 focus:valid:ring-blue-500  focus:invalid:ring-red-400"
                                    autoComplete="true"
                                    name="address"
                                    type="text"
                                    placeholder="Address"
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
                    </>
                )}
            </Formik>
        </>
    );
};
