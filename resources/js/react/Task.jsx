import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";
import axios from "axios";
const Styles = styled(Box)`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    background: white;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .wrapper {
        position: relative;
        width: 200px;
        height: 200px;
        border: 1px solid;
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 16px;
    }
    .content {
        position: absolute;
        bottom: 0;
        left: 0;
        background: red;
        width: 100%;
        transition: height 0.3s linear;
        height: ${({ data }) => {
            return data.alcohol;
        }};

        .text {
            position: absolute;
            top: -24px;
            width: 100%;
            text-align: center;
        }
    }
`;
export default () => {
    const [data, setData] = useState({});
    function getData() {
        axios.get("https://random-data-api.com/api/v2/beers").then((res) => {
            setData(res.data);
        });
    }
    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            <Styles data={data}>
                <div className="wrapper">
                    <span>name :{data.name}</span>
                    <span>style : {data.style}</span>
                    <div className="content">
                        <span className="text">{data.alcohol}</span>
                    </div>
                </div>
                <Button
                    onClick={() => {
                        getData();
                    }}
                >
                    click
                </Button>
            </Styles>
        </>
    );
};
