import { Field, Form, Formik } from "formik";
import { customAlphabet } from "nanoid";
import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { RiAddLine } from "react-icons/ri";

import Btn from "../../components/Btn";
import ChildrenToggler from "../../components/ChildrenToggler";

import NewPage from "../../components/NewPage";

import * as Yup from "yup";
import { toast } from "react-toastify";
import { Host } from "../../host";
import axios from "axios";
import SelectCategory from "./SelectCategory";
import { motion as m } from "framer-motion";
import { burgerMenuAnimation } from "../../components/animate";
const notifyError = (errors, touched, key) => {
    if (errors[key] && touched[key]) {
        toast.error(errors[key]);
    }
};
export default () => {
    const seller_name = "userName";
    // const generateId = customAlphabet(
    //     "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    // );
    // const id = generateId();

    const addProductSchema = Yup.object().shape({
        title: Yup.string()
            .min(5, "product name should be at least 5 charcter")
            .required("product name is required"),
        price: Yup.number()
            .min(4, "price must be at least 4 characters")
            .required("price is required"),
        image: Yup.mixed().required("image is required"),
        category: Yup.string().required("category is required"),
        description: Yup.string()
            .min(15, "description should be at least 15 charcter")
            .max(40, "description should be less than 40 charcter")
            .required("description is required"),
    });
    let submitHandler = async (values, { setSubmitting, setStatus }) => {
        try {
            const res = await axios.post(
                `${Host}api/post/add`,
                {
                    title: values.title,
                    description: values.description,
                    price: values.price,
                    // uniqueId: generateId(),
                    catId: JSON.stringify(values.category),
                    files: [values.image],
                },
                {
                    headers: {
                        Accept: "application/json",
                        Authorization:
                            "Bearer " + localStorage.getItem("token"),
                    },
                }
            );
            if (res.data.success === 1) {
                toast.success("added successfully");
            } else {
                setStatus({
                    success: 0,
                    msg: "some error occurred",
                });
                toast.error(res.data.msg);
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
            <ChildrenToggler
                className=" px-4 py-2 text-xl capitalize"
                BtnContent="add product"
            >
                {({ setOpen }) => {
                    return (
                        <NewPage
                            clickOutSide={setOpen}
                            className={`  flex justify-center bg-gray-700/70  backdrop-blur`}
                        >
                            <Formik
                                onSubmit={submitHandler}
                                validationSchema={addProductSchema}
                                initialValues={{
                                    price: 119.99,
                                    category: "",
                                    title: "",
                                    image: "",
                                    description: "",
                                }}
                            >
                                {({
                                    isSubmitting,
                                    values,
                                    errors,
                                    touched,
                                }) => {
                                    return (
                                        <Form className=" flex flex-col justify-between">
                                            <div
                                                className={` animate-fade-up relative mx-auto mt-10  h-96 w-64 cursor-pointer  rounded-lg bg-emerald-100  text-black   shadow`}
                                            >
                                                <>
                                                    <div className=" group relative  h-3/5 max-w-full overflow-hidden rounded-tr-lg  rounded-tl-lg ">
                                                        <img
                                                            className="absolute top-0 left-0  h-full w-full  object-cover duration-300 group-hover:scale-105 "
                                                            src={
                                                                values.image
                                                                    ? values.image
                                                                    : "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8UnVubmluZyUyMFNob2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                                                            }
                                                            alt=""
                                                        />
                                                        <Field
                                                            onBlur={() => {
                                                                notifyError(
                                                                    errors,
                                                                    touched,
                                                                    "image"
                                                                );
                                                                console.log(
                                                                    values.image
                                                                );
                                                            }}
                                                            name="image"
                                                            type="file"
                                                            accept="image/*"
                                                            className={` 
                                                             absolute top-0 left-0 h-full
                                                            
                                                            w-full cursor-pointer transition-transform duration-300 file:h-full file:w-full file:border-transparent  
                                                            file:bg-transparent group-hover:scale-105 `}
                                                            alt="uploded image"
                                                        />
                                                    </div>

                                                    <div className="  flex  h-2/5 w-full  flex-col gap-4 p-4     ">
                                                        <div className=" w-4/5 truncate capitalize ">
                                                            <Field
                                                                onBlur={() => {
                                                                    notifyError(
                                                                        errors,
                                                                        touched,
                                                                        "title"
                                                                    );
                                                                }}
                                                                className="ml-0 w-full truncate bg-transparent pl-0 capitalize"
                                                                name="title"
                                                                placeholder="Product Name"
                                                                type="text"
                                                            />
                                                        </div>
                                                        <div className="   w-3/5 truncate text-sm capitalize text-gray-500  ">
                                                            {seller_name}
                                                        </div>

                                                        <div
                                                            className=" absolute -left-6 bottom-4 w-24 
                                rounded-tr rounded-br rounded-tl-full  rounded-bl-full bg-emerald-400 
                         text-right  capitalize before:absolute
                        before:left-0 before:bottom-0 before:z-0
                        before:block before:h-12 before:w-6 before:rounded-tl-full 
                         before:rounded-bl-full  before:bg-gradient-to-l  before:from-emerald-400/90
                          before:to-emerald-500 "
                                                        >
                                                            <Field
                                                                onBlur={() => {
                                                                    notifyError(
                                                                        errors,
                                                                        touched,
                                                                        "price"
                                                                    );
                                                                }}
                                                                className="   z-10 ml-6  w-full bg-transparent py-2  "
                                                                type="number"
                                                                name="price"
                                                                placeholder="price"
                                                            />
                                                        </div>
                                                        <div className=" absolute bottom-0 right-0 grid h-32 w-32 grid-cols-2 grid-rows-2 p-2 ">
                                                            <Btn
                                                                shape="outlined"
                                                                className="group row-start-2  flex h-14 w-14 items-center justify-center bg-white/70    "
                                                            >
                                                                <RiAddLine
                                                                    className="pointer-events-none fill-black group-hover:fill-blue-400 group-disabled:fill-black group-[.active]:fill-blue-400 "
                                                                    size={24}
                                                                />
                                                                <span className=" sr-only">
                                                                    add to cart
                                                                </span>
                                                            </Btn>
                                                            <Btn
                                                                shape="outlined"
                                                                className=" group  col-start-2 flex h-14 w-14 items-center justify-center  bg-white/70  "
                                                            >
                                                                <AiOutlineHeart
                                                                    className=" pointer-events-none group-hover:fill-red-600  group-disabled:fill-black  group-[.active]:fill-red-600"
                                                                    size={24}
                                                                />
                                                                <span className=" sr-only">
                                                                    add to
                                                                    favorite
                                                                </span>
                                                            </Btn>
                                                        </div>
                                                    </div>
                                                </>
                                            </div>

                                            <div className=" flex w-80 flex-col gap-2 rounded bg-gray-700 p-2">
                                                <div className="  text-black">
                                                    <SelectCategory
                                                        onBlur={() => {
                                                            notifyError(
                                                                errors,
                                                                touched,
                                                                "category"
                                                            );
                                                        }}
                                                        className=" w-full rounded"
                                                        placeholder="category"
                                                        name="category"
                                                    />
                                                </div>
                                                <div className=" text-black">
                                                    <Field
                                                        onBlur={() => {
                                                            notifyError(
                                                                errors,
                                                                touched,
                                                                "description"
                                                            );
                                                        }}
                                                        as="textarea"
                                                        placeholder="write a description here..."
                                                        cols={10}
                                                        rows={4}
                                                        className={` w-full resize-none rounded`}
                                                        name="description"
                                                        type="text"
                                                    />
                                                </div>
                                                <div className=" flex gap-2">
                                                    <Btn
                                                        type="submit"
                                                        disabled={isSubmitting}
                                                        shape="filled"
                                                        className={`  flex-grow rounded px-4 py-2 text-white  `}
                                                    >
                                                        submit
                                                    </Btn>
                                                    <Btn
                                                        className={` flex-grow rounded bg-red-400 px-4 py-2 text-white  `}
                                                        onClick={() => {
                                                            setOpen(false);
                                                        }}
                                                    >
                                                        close
                                                    </Btn>
                                                </div>
                                            </div>
                                        </Form>
                                    );
                                }}
                            </Formik>
                        </NewPage>
                    );
                }}
            </ChildrenToggler>
        </>
    );
};
