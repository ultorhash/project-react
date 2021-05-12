import styled from 'styled-components';

export const StyledAll = styled.button`
    background-color: lightgray;
    height: 100%;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 5px;
    padding: 0 3%;

    img {
        max-width: 20px;
        max-height: 20px;
        background-color: transparent; 
    }

    span {
        background-color: transparent;
        color: dodgerblue;
        font-weight: 500;
        margin: 0 20%;
    }

    :hover {
        cursor: pointer;
    }
`;