import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Btn from "../../components/Btn";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

import axios from "axios";

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
        let res;
        try {
            res = await axios.post(
                "http://api.inspiration-sy.com:8880/api/login",
                values
            );
            if (res.data.success === 1) {
                localStorage.setItem("token", JSON.stringify(res.data.token));
                toast.success(res.data.msg);
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
                    <Form className="flex flex-col gap-4 p-2">
                        <div>
                            <Field
                                type="email"
                                name="email"
                                className="rounded placeholder-gray-400 shadow"
                                placeholder="email"
                                autoComplete="true"
                            />
                        </div>
                        <div>
                            <Field
                                type="password"
                                name="password"
                                className="rounded placeholder-gray-700 shadow"
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
