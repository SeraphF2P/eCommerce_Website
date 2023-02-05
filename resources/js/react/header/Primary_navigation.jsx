import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import Options_board from "./Options_board";
import { Button } from "@mui/material";

const Styles = styled(Box)`
    color: ${({ theme }) => {
        return theme.text;
    }};
    position: fixed;
    top: 0;
    right: 0;
    z-index: 30;
    width: 100%;
    max-width: 300px;
    height: 100vh;
    transform: translateX(100%);
    background: rgb(255, 255, 255, 0.1);
    backdrop-filter: blur(40px);
    transition: transform 0.8s linear;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-block: calc(40px + 2rem);
    padding-inline: 2rem;
    &[aria-expanded="true"] {
        transform: translateX(0);
    }
    li {
    }
    .modale_btn {
        color: ${({ theme }) => {
            return theme.text;
        }};
    }
`;
export default ({ aria_expanded, modale_btn }) => {
    return (
        <>
            <Styles
                component="ul"
                key={"primary_navigation"}
                aria-expanded={aria_expanded}
                id="primary_navigation"
            >
                <li key={"li 1"}>Help</li>
                <li key={"li 2"}>Download the app</li>
                <li key={"li 3"}>Anghami plus</li>
                <li key={"li 4"}>BROWSE CONTENT</li>
                <li key={"li 5"}>Moods and generes</li>
                <li key={"li 6"}>Products</li>
                <li key={"li 7"}>
                    <Button
                        className="modale_btn"
                        onClick={() => {
                            modale_btn(true);
                        }}
                    >
                        favorite list
                    </Button>
                </li>
                <li key={"li 8"}>
                    <Options_board />
                </li>
            </Styles>
        </>
    );
};
