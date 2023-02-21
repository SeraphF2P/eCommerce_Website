import React, { useMemo, useEffect, useState } from "react";
import Btn from "../../components/Btn";
import axios from "axios";
import { toast } from "react-toastify";
import { Host } from "../../host";

export default ({ setAppliedType }) => {
    const [typeFilters, setTypeFilters] = useState([]);
    const getData = async () => {
        try {
            const res = await axios.get(
                `${Host}api/cat/view-all`,
                {
                    headers: {
                        Accept: "application/json",
                        Authorization:
                            "Bearer " + localStorage.getItem("token"),
                    },
                }
            );
            setTypeFilters(() => {
                return res.data.Categories.filter((item) => {
                    return item.description == "jafer ali";
                });
            });
        } catch (error) {
            toast.error(error.message);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            {typeFilters &&
                typeFilters.map((item, index) => {
                    return (
                        <React.Fragment key={"color button" + index}>
                            <Btn
                                onClick={() => {
                                    setAppliedType((prev) => {
                                        return prev == item.name
                                            ? ""
                                            : item.name;
                                    });
                                }}
                                className=" rounded-full   bg-white px-2 py-1"
                            >
                                {item.name}
                            </Btn>
                        </React.Fragment>
                    );
                })}
        </>
    );
};
