import styled from "styled-components";

export const Grid = styled.section`
    display: grid;
    overflow: hidden;
    grid-template-columns: repeat(auto-fit, minmax(530px, 1fr));
    padding: 10px;
    gap: 0.8rem;

    @media all and (max-width: 500px) {
        display: block;
        }
`;

export const GridItem = styled.div`
    /** [Enable & Disable Grid Outline] */
    /* border: var(--border); */
    height: 100vh;
`;