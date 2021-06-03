import styled from 'styled-components';

export const StyledFilter = styled.button`
    width: auto;
    margin: ${props => props.theme.extraStyle ? "0 1%" : ""};
    display: flex;
    background-color: ${props => props.theme.color};
    color: ${props => props.theme.textColor};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5% 2%;
    border-radius: 5px;
    border: 1px solid gray;
    box-shadow: ${props => props.theme.extraStyle ? "0 2px 2px lightgray" : ""};
    border: ${props => props.theme.extraStyle ? "1px solid gray" : "none"};

    :hover {
        cursor: pointer;
    }

    span {
        white-space: nowrap;
        background-color: transparent;
        font-weight: 500;
    }

    img {
        background-color: transparent;
        color: red;
        width: 20px;
        height: 20px;
        margin-right: 10%;
    }
`;