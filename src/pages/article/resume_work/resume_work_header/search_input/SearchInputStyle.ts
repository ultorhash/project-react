import styled from 'styled-components';

export const StyledSearchInput = styled.div`
    width: 20%;
    border: 1px solid yellow;
    display: flex;
    height: 100%;
    justify-content: center;
    padding: 1%;

    input[type="text"] {
        width: 85%;
        height: 100%;
        background-color: white;
        background-color: white;
        border: 2px solid lightgray;
        border-right: none;
        border-radius: 5px 0 0 5px;
        text-align: center;
        outline: none;
        text-align: left;
        font-size: 12px;
        color: gray;
        padding-left: 3%;
        font-weight: 400;
    }

    img {
        width: 15%;
        height: 100%;
        background-color: white;
        border-radius: 0 5px 5px 0;
        border: 2px solid lightgray;
        border-left: none;
        outline: none;
        padding: 5px;
    }
`;