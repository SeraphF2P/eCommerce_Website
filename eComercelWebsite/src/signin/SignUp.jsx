import React, {  useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Btn from "../components/Btn";


export default () => {
    const form = useRef(null);
    const SignUpSchema = Yup.object().shape({
        name: Yup.string().min(3, "Write Your Full Name").required("Required"),
        email: Yup.string().email("Invalid email").required("Required"),
        password: Yup.string()
            .min(5, "must be at least 5 characters")
            .required("Required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Required"),
    });

    return (
        <>
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                }}
                validationSchema={SignUpSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        setSubmitting(false);
                        form.current.submit();
                    }, 400);
                }}
            >
                {({ isSubmitting }) => (
                    <div className=" flex  animate-fade-up  flex-col items-center justify-center  rounded-lg bg-slate-200 p-4  shadow-md">
                        <Form
                            ref={form}
                            id="signUpForm"
                            action="/"
                            method="get"
                            className=" flex flex-col items-center justify-center gap-8 p-4"
                        >
                            <div className=" h-12">
                                <Field
                                    className=" rounded focus:ring-2 focus:valid:ring-blue-500 focus:invalid:ring-red-400"
                                    autoComplete="true"
                                    name="name"
                                    type="text"
                                    placeholder="Name"
                                />
                                <ErrorMessage
                                    className=" w-full p-2 text-left text-sm text-red-400  "
                                    name="name"
                                    component="div"
                                />
                            </div>

                            <div className=" h-12">
                                <Field
                                    className=" rounded focus:ring-2 focus:valid:ring-blue-500 focus:invalid:ring-red-400"
                                    autoComplete="true"
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                />
                                <ErrorMessage
                                    className=" w-full p-2 text-left text-sm text-red-400  "
                                    name="email"
                                    component="div"
                                />
                            </div>

                            <div className=" h-12">
                                <Field
                                    className=" rounded focus:ring-2 focus:valid:ring-blue-500 focus:invalid:ring-red-400"
                                    autoComplete="true"
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                />
                                <ErrorMessage
                                    className=" w-full p-2 text-left text-sm text-red-400  "
                                    name="password"
                                    component="div"
                                />
                            </div>
                            <div className=" h-12">
                                <Field
                                    className=" rounded focus:ring-2 focus:valid:ring-blue-500 focus:invalid:ring-red-400"
                                    autoComplete="true"
                                    name="confirmPassword"
                                    type="password"
                                    placeholder="Confirm Password"
                                />
                                <ErrorMessage
                                    className=" w-full p-2 text-left text-sm text-red-400  "
                                    name="confirmPassword"
                                    component="div"
                                />
                            </div>
                        </Form>
                        <div className=" flex w-full justify-between p-4 ">
                            <Btn className="px-4 py-2" shape="outlined">
                                close
                            </Btn>
                            <Btn
                                className="px-4 py-2"
                                type="submit"
                                form="signUpForm"
                                disabled={isSubmitting}
                            >
                                Submit
                            </Btn>
                        </div>
                    </div>
                )}
            </Formik>
        </>
    );
};
