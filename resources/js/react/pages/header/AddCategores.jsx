import { Field, Formik, Form } from "formik";
import { customAlphabet } from "nanoid";
import React from "react";
import Btn from "../../components/Btn";
import ChildrenToggler from "../../components/ChildrenToggler";
import NewPage from "../../components/NewPage";
import * as Yup from "yup";
import { toast } from "react-toastify";
import axios from "axios";
import { Host } from "../../host";
export default () => {
   

    const addCategorysSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, "catagory should be at least 3 characters")
            .required("name is required"),
        description: Yup.string()
            .min(6, "description must be at least 6 characters")
            .required("description is required"),
    });
    let submitHandler = async (values, { setSubmitting, setStatus }) => {
        try {
            const res = await axios.post(`${Host}cat/add`, values, {
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
            });
            console.log(res);
            if (res.data.success === 1) {
                toast.success("category added successfully");
            } else {
                setStatus({
                    success: 0,
                    msg: "proccess failed",
                });
                toast.error("prosses failed");
            }
        } catch (error) {
            setStatus({
                success: 0,
                msg: "submit failed",
            });
            toast.error(error.message);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            <div className=" flex items-center justify-center">
                <ChildrenToggler
                    className=" px-4 py-2 text-xl capitalize"
                    onClick={() => {
                        viewData();
                    }}
                    BtnContent="add category"
                >
                    {({ setOpen }) => {
                        return (
                            <NewPage
                                clickOutSide={setOpen}
                                className={` flex items-center justify-center bg-slate-700/70 backdrop-blur`}
                            >
                                <Formik
                                    initialValues={{
                                        name: "",
                                        description: "",
                                    }}
                                    validationSchema={addCategorysSchema}
                                    onSubmit={submitHandler}
                                >
                                    {({ isSubmitting }) => (
                                        <Form className="flex flex-col gap-4 rounded bg-gray-700 p-2">
                                            <div>
                                                <Field
                                                    type="text"
                                                    name="name"
                                                    className=" rounded placeholder-gray-700 shadow focus:ring-2 valid:focus:ring-teal-400 invalid:focus:ring-red-400"
                                                    placeholder="name"
                                                    autoComplete="true"
                                                />
                                            </div>
                                            <div>
                                                <Field
                                                    type="text"
                                                    name="description"
                                                    className=" rounded placeholder-gray-700 shadow focus:ring-2 valid:focus:ring-teal-400 invalid:focus:ring-red-400"
                                                    placeholder="description"
                                                    autoComplete="true"
                                                />
                                            </div>
                                            <Btn
                                                shape="filled"
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="rounded py-2 px-4"
                                            >
                                                {isSubmitting
                                                    ? "submiting..."
                                                    : "submit"}
                                            </Btn>
                                        </Form>
                                    )}
                                </Formik>
                            </NewPage>
                        );
                    }}
                </ChildrenToggler>
            </div>
        </>
    );
};
