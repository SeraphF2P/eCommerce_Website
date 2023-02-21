import axios from "axios";
import { customAlphabet } from "nanoid";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Btn from "../../components/Btn";
import ChildrenToggler from "../../components/ChildrenToggler";
import NewPage from "../../components/NewPage";
export default ({ saveChanges, setInStack, stateContainer }) => {
    const [product_type, setProduct_type] = useState("shoe");
    const [description, setDescription] = useState("");
    const generateId = customAlphabet(
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    );

    const id = generateId();

    const sendData = async () => {
        try {
            const res = await axios.post(
                "http://api.inspiration-sy.com:8880/api/cat/add",
                {
                    name: "userName",
                    type: product_type,
                    id: generateId(),
                    description:"asdasd",
                    themes: [stateContainer],
                },
                {
                    headers: {
                        Accept: "application/json",
                        Authorization:
                            "Bearer " + localStorage.getItem("token"),
                    },
                }
            );
            console.log(res);
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <>
            <ChildrenToggler
                onClick={() => {
                    saveChanges();
                }}
                BtnContent="save"
                shape="filled"
                className={` rounded px-4 py-2`}
            >
                {({ setOpen }) => {
                    return (
                        <NewPage
                            clickOutSide={setOpen}
                            className={` flex items-center justify-center bg-gray-700/70 backdrop-blur`}
                        >
                            <div className=" flex w-80 flex-col gap-2  rounded bg-gray-700 p-4">
                                <div className=" flex gap-2">
                                    <div className="  text-black">
                                        <input
                                            className=" w-full rounded"
                                            placeholder="in stack"
                                            onChange={(e) => {
                                                setInStack(e);
                                            }}
                                            type="number"
                                        />
                                    </div>
                                    <div className="  text-black">
                                        <input
                                            className=" w-full rounded"
                                            placeholder="type"
                                            onChange={(e) => {
                                                setProduct_type(e.target.value);
                                            }}
                                            type="text"
                                        />
                                    </div>
                                </div>
                                <div className=" text-black">
                                    <textarea
                                        placeholder="write a description here..."
                                        minLength={15}
                                        maxLength={40}
                                        cols={10}
                                        rows={4}
                                        className={` w-full resize-none rounded`}
                                        value={description}
                                        name="description"
                                        onChange={(e) => {
                                            setDescription(e.target.value);
                                        }}
                                        type="text"
                                    />
                                </div>

                                <div className=" flex  gap-2 ">
                                    <Btn
                                        onClick={() => {
                                            setOpen(false);
                                        }}
                                        shape="filled"
                                        className={`flex-grow rounded bg-red-400 px-4  py-2 capitalize`}
                                    >
                                        close
                                    </Btn>

                                    <Btn
                                        onClick={() => {
                                            sendData();
                                           
                                        }}
                                        shape="filled"
                                        className={`flex-grow rounded px-4 py-2  capitalize`}
                                    >
                                        upload
                                    </Btn>
                                </div>
                            </div>
                        </NewPage>
                    );
                }}
            </ChildrenToggler>
        </>
    );
};
