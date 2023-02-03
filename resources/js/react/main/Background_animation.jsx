import React, { useEffect, useMemo } from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { HiMusicalNote } from "react-icons/hi2";
import { GiMusicalNotes, GiMusicalScore } from "react-icons/gi";
import { MdMusicNote } from "react-icons/md";
import { ImHeadphones } from "react-icons/im";
import { IconContext } from "react-icons";
import { intersecObserveToggler } from "../../my/ui";
import { randomNumBetween } from "../../my/other";

const Wrapper = styled(Box)`
    width: 100%;
    height: calc(100% - 64px);
    position: absolute;
    z-index: 0;
    top: 32px;
    left: 0;
    display: grid;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(80px, 1fr));
    overflow: hidden;
    .icon {
        transition: fill 1s linear, scale 0.3s linear;
        &.show {
            fill: ${({ theme }) => {
                return theme.second;
            }};
        }
        &:hover {
            scale: 1.1;
        }
    }
`;

const icons = [
    <HiMusicalNote />,
    <GiMusicalNotes />,
    <GiMusicalScore />,
    <MdMusicNote />,
    <ImHeadphones />,
];
export default () => {
    const empty_arr = Array(
        Math.floor(((window.innerWidth * window.innerHeight) / (80 * 80)) * 5)
    ).fill(1);
    useEffect(() => {
        intersecObserveToggler(".icon", "show", { rootMargin: "-100px 0px" });
        return () => {
            intersecObserveToggler(".icon", "show", {
                rootMargin: "-100px 0px",
                cleanUP: true,
            });
        };
    }, []);
    const span_elements = useMemo(() => {
        return empty_arr.map(() => {
            const icon_wrapper = {
                top: `${randomNumBetween(0, 80)}px`,
                left: `${randomNumBetween(0, 80)}px`,
                transform: `
                rotate(${randomNumBetween(-45, 45)}deg)
                scale(calc(${randomNumBetween(5, 10) / 10}))
                `,
                position: "absolute",
            };
            return (
                <div>
                    <div style={{ position: "relative" }}>
                        <div style={icon_wrapper}>
                            {icons[randomNumBetween(0, icons.length)]}
                        </div>
                    </div>
                </div>
            );
        });
    }, []);

    return (
        <Wrapper>
            <IconContext.Provider
                value={{
                    size: "40",
                    color: "hsl(0, 0%, 100%,0.2)",
                    className: "icon",
                }}
            >
                {span_elements}
            </IconContext.Provider>
        </Wrapper>
    );
};
