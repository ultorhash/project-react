import styled from 'styled-components';

export const StyledROFollowed = styled.div`
    width: auto;
    max-width: 140px;
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: 1px solid blue;
    border-radius: 5px;
    margin-left: 5%;

    p {
        text-align: center; 
        vertical-align: middle;
        display: table-cell;
        color: 	#4169E1;
        font-weight: 500;
        font-size: 12px;
        background-color: transparent;
    }

    img {
        width: 100%;
        height: 100%;
        max-width: 20px;
        max-height: 20px;
        margin: 10%;
        background-color: transparent;
    }

    button {
        width: 80px;
        margin: 5%;
        text-align: center;
        object-fit: fill;
        background-color: white;
        border: 2px solid lightgray;
        border: none;
        outline: none;
        background-color: transparent;

        img {
            margin-top: 20%;
            background-color: transparent;
            max-width: 10px;
            max-height: 10px;
        }

        :hover {
            cursor: pointer;
        }
    }
`;