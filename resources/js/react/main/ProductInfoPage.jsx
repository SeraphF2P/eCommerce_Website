import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import Btn from "../components/Btn";
import dataBase from "../dataBase.json";
export default () => {
    const id = useParams();
    const data = useMemo(() => {
        return dataBase.find((item) => {
            return item.id == Object.values(id);
        });
    }, []);
    return (
        <>
            <section className=" flex  h-screen w-screen items-center justify-center bg-white pt-20">
                <div className="mx-4 flex h-[calc(100vh-120px)] w-full  max-w-screen-md animate-fade-up flex-col overflow-hidden rounded shadow-md md:mx-auto sm:flex-row">
                    <div className="  relative h-2/5 w-full overflow-hidden bg-fuchsia-500 sm:h-full sm:w-2/5">
                        <img
                            className=" absolute top-0 left-0 h-full w-full object-cover"
                            src={data.product_image_url}
                            alt="product image"
                        />
                    </div>
                    <div className="   flex h-3/5 flex-col p-4 sm:h-full sm:w-3/5 sm:justify-center ">
                        <div className=" flex items-center justify-between p-2 gap-2">
                            <div className="   capitalize ">
                                {data.seller_name}
                            </div>
                            
                            <div className=" capitalize ">{data.price}$</div>
                            <Btn className={`px-4 py-2   capitalize `}>
                                order now
                            </Btn>
                        </div>
                        <div className=" px-2 capitalize">
                            on stack :{" "}
                            <span className=" text-zinc-400">num</span>
                        </div>
                        <div className=" p-2 ">
                            <h3>descriptions</h3>
                            <section className=" remove_scroll_bar max-h-60  overflow-scroll rounded bg-gray-200 p-2 leading-8 ">
                                <h4 className=" capitalize font-bold font-mono">{data.product_name}</h4>
                                <p>{data.description}</p>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
