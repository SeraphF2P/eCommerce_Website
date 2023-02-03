import React, { useState } from "react";
import Menu_btn from "./Menu_btn";
import Primary_navigation from "./Primary_navigation";
import Favorite_list from "./Favorite_list";
import useToggle from "../../my/customHooks/useToggle";
import { useData } from "../DataProvider";

export default ({ setsongIndexs }) => {
    const [visiabality, setvisiabality] = useState("false");
    const [modale, setModale] = useToggle(false);
    const albums = useData();
    return (
        <>
            <nav isvisiable={visiabality}>
                <Menu_btn
                    data_anim={visiabality}
                    setvisiabality={setvisiabality}
                />
                <Primary_navigation
                    aria_expanded={visiabality}
                    modale_btn={() => {
                        setModale(true);
                    }}
                />
                <Favorite_list
                    albums={albums}
                    setsongIndexs={setsongIndexs}
                    handleOpen={modale}
                    handleClose={() => {
                        setModale(false);
                    }}
                />
            </nav>
        </>
    );
};
