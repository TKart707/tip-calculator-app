import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`       
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.background};
        font-family: 'Space Mono', monospace;
        font-weight: 700;
    }
`;

export default GlobalStyles;
