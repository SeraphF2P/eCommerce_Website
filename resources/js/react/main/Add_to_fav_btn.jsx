import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { FcPlus } from "react-icons/fc";
const Div = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
    input {
        width: 70%;
        height: 40px;
        font-size: 2.5rem;
        border-radius: 8px;
        border: 0.5px solid gray;
    }
    button {
        &:hover {
            scale: 1.1;
        }
    }
`;
export default ({ addTask }) => {
    const [currentvalue, setCurrentvalue] = useState("");
    return (
        <Div>
            <input
                onChange={(e) => setCurrentvalue(e.target.value)}
                value={currentvalue}
                type="text"
            />
            <button
                onClick={() => {
                    addTask(currentvalue);
                    setCurrentvalue("");
                }}
            >
                <FcPlus size={32} />
                <span className="v_hidden">Add task</span>
            </button>
        </Div>
    );
};
