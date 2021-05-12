import styled from 'styled-components';

export const StyledResize = styled.button`
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2%;
    border: none;
    border-left: 1px solid lightgray;
    border-right: 1px solid lightgray;

    img {
        width: 14px;
        height: 14px;
        background-color: transparent;
    }

    :hover {
        cursor: pointer;
    }
`;