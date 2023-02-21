import axios from "axios";
import { Field, ErrorMessage } from "formik";
import React, { useEffect, useState } from "react";
import { Host } from "../../host";
export default (props) => {
    const [categories, setCategories] = useState([]);
    const fetchData = async () => {
        try {
            const res = await axios.get(`${Host}api/cat/view-all`, {
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
            });
            if (res.status === 200 && res.data.success === 1) {
                const filteredCategories = res.data.Categories.filter(
                    (item) => item.description === "jafer ali"
                );
                setCategories(filteredCategories);
                console.log(categories);
            } else {
                toast.error("Error fetching categories");
            }
        } catch (error) {
            toast.error(error.message);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    const [isSelected, setisSelected] = useState(false);
    return (
        <>
            <div
                onClick={() => {
                    setisSelected(true);
                    console.log(categories);
                }}
                className=" relative"
            >
                <label
                    className={` ${
                        isSelected && "-translate-y-8 text-base text-white"
                    } placeholder-shown:
                    
                    absolute top-2 left-2 transition-transform duration-300`}
                    htmlFor="category"
                >
                    Select a category
                </label>

                <Field {...props} as="select" id="category">
                    <option value=""></option>
                    {categories.map((option, ind) => {
                        return (
                            <option className="" key={ind} value={option.id}>
                                {option.name}
                            </option>
                        );
                    })}
                </Field>

                {/* <ErrorMessage
                    key="category"
                    component="div"
                    className=" absolute top-0 left-0 h-full -translate-x-full  bg-white capitalize text-base text-red-400 transition-transform "
                    name="category"
                /> */}
            </div>
        </>
    );
};
