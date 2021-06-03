import styled from 'styled-components';

export const StyledSearch = styled.div`
    width: 20%;
    display: flex;
    height: auto;
    justify-content: center;
    background-color: transparent;

    input[type="text"] {
        width: 80%;
        height: auto;
        background-color: white;
        border: 2px solid lightgray;
        border-right: none;
        border-radius: 5px 0 0 5px;
        text-align: center;
        outline: none;
        text-align: left;
        font-size: 14px;
        color: gray;
        font-weight: 400;
        padding: 2%;
    }

    button {
        width: 20%;
        height: 100%;
        background-color: white;
        border: 2px solid lightgray;
        border-left: none;
        border-radius: 0 5px 5px 0;
        outline: none;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            background-color: transparent;
        }

        :hover {
            cursor: pointer;
        }
    }
`;