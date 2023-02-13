import React, { useMemo } from 'react';
import Btn from '../../components/Btn';
import data from "../../data.json"
export default ({setAppliedType})=>{ 
    const typeFilters = useMemo(() => {
        let subArray = [];
        data.map((item) => {
            if (subArray.includes(item.type) == false) {
                subArray.push(item.type);
            }
        });
        return subArray;
    }, []);
 return (
  <>
   {typeFilters &&
                            typeFilters.map((type,index) => {
                                return (
                                    <>
                                        <Btn
                                            key={index}
                                            onClick={() => {
                                                setAppliedType((prev) => {
                                                    return prev == type
                                                        ? ""
                                                        : type;
                                                });
                                            }}
                                            className=" rounded-full   bg-white px-2 py-1"
                                        >
                                            {type}
                                        </Btn>
                                    </>
                                );
                            })}
  </>
 )}