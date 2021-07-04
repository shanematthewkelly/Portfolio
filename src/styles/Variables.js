import { css } from "styled-components";

const Variables = css`
    :root {
        --canvas: rgb(25, 25, 25);
        --primaryColor: rgb(55, 210, 117);
        --secondaryColor: rgb(17, 17, 17);
        --scrollbarColor: rgb(102, 102, 102);
        --button-hover: rgba(55, 210, 117, 0.082);

        --nav-scroll: rgb(25, 25, 25, 0.9);
        --nav-scroll-shadow: 0px 4px 14px 0px #111111;

        --burger-width: 30px;
        --burger-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
        --burger-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
        --burger-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
        --burger-after-active: bottom 0.1s ease-out,
            transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
    }
`;

export default Variables;