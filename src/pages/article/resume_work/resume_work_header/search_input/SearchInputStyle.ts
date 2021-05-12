import styled from 'styled-components';

export const StyledSearchInput = styled.div`
    width: 20%;
    display: flex;
    height: 100%;
    justify-content: center;
    padding: 5px;

    input[type="text"] {
        width: 80%;
        height: 100%;
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

    button {
        width: 20%;
        height: 100%;
        text-align: center;
        object-fit: fill;
        background-color: white;
        border: 2px solid lightgray;
        border-left: none;
        border-radius: 0 5px 5px 0;
        outline: none;

        img {
            background-color: transparent;
        }

        :hover {
            cursor: pointer;
        }
    }
`;