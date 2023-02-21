import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Btn from "../../components/Btn";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

import axios from "axios";
import { Host } from "../../host";

export default ({ setHaveAnAccount }) => {
    const nav = useNavigate();

    const LoginSchema = Yup.object().shape({
        email: Yup.string()
            .email("Invalid email")
            .required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be at least 8 characters")
            .required("Password is required"),
    });
    let submitHandler = async (values, { setSubmitting, setStatus }) => {
        try {
            const res = await axios.post(
                `${Host}api/login`,
                values
            );
            if (res.data.success === 1) {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("role", res.data.roles);
                console.log(res)
                nav("/homepage");
            } else {
                setStatus({
                    success: 0,
                    msg: "Invalid email or password",
                });
                toast.error("Invalid email or password");
            }
        } catch (error) {
            setStatus({
                success: 0,
                msg: "Error logging in",
            });
            toast.error(error.message);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            <h2 className=" capitalize">login</h2>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                validationSchema={LoginSchema}
                onSubmit={submitHandler}
            >
                {({ isSubmitting }) => (
                    <Form className="flex accent-youtube flex-col gap-4 p-2">
                        <div>
                            <Field
                                type="email"
                                name="email"
                                className=" rounded placeholder-gray-700 shadow focus:ring-2 valid:focus:ring-teal-400 invalid:focus:ring-red-400"
                                placeholder="email"
                                autoComplete="true"
                            />
                        </div>
                        <div>
                            <Field
                                type="password"
                                name="password"
                                className=" rounded placeholder-gray-700 shadow focus:ring-2 valid:focus:ring-teal-400 invalid:focus:ring-red-400"
                                placeholder="password"
                                autoComplete="true"
                            />
                        </div>
                        <Btn
                            type="button"
                            className="p-2"
                            onClick={() => {
                                setHaveAnAccount(false);
                            }}
                        >
                            don't have an account ? sign up
                        </Btn>
                        <Btn
                            shape="filled"
                            type="submit"
                            disabled={isSubmitting}
                            className="rounded py-2 px-4"
                        >
                            {isSubmitting ? "submiting..." : "login"}
                        </Btn>
                    </Form>
                )}
            </Formik>
        </>
    );
};
