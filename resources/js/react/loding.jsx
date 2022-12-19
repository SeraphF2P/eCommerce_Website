import styled from "styled-components";
import { BallTriangle } from 'react-loader-spinner'

const Styled_Loading = styled(BallTriangle)`
    position: fixed !important;
    background: red;
    width: 100vh  !important;
    height: 100vh !important;
`
export {Styled_Loading}