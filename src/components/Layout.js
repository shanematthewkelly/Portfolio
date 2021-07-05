import styled from "styled-components";

export const Grid = styled.section`
    display: grid;
    overflow: hidden;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    padding: 10px;
    gap: 0.8rem;

    @media all and (max-width: 500px) {
        display: block;
        }
`;

export const GridItem = styled.div`
    /** [Enable & Disable Grid Outline] */
    /* border: dashed 2px var(--primaryColor); */
    height: 100vh;
`;