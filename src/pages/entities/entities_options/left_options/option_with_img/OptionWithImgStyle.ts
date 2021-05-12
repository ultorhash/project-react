import styled from 'styled-components';

export const StyledOptionWithImg = styled.button`
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2%;
    border: none;

    img, span {
        background-color: transparent;
        color: gray;
    }

    img {
        width: 14px;
        height: 14px;
        margin-right: 10%;
    }

    :hover {
        cursor: pointer;
    }
`;