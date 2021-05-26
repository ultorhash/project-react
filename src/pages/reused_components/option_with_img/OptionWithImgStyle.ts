import styled from 'styled-components';

export const StyledOptionWithImg = styled.button`
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1%;
    border: none;
    margin: 0 1%;
    background-color: transparent;

    :hover {
        cursor: pointer;
    }

    img {
        width: 100%;
        height: 100%;
        max-width: 16px;
        max-height: 16px;
        margin-right: 10%;
        background-color: transparent;
    }

    p {
        font-weight: 500;
        color: #282828;
        white-space: nowrap;
        background-color: transparent;
    }
`;