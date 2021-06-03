import styled from 'styled-components';

export const StyledFollowed = styled.div`
    width: 20%;
    display: flex;
    height: auto;
    justify-content: center;
    align-items: center;
    background-color: transparent;

    p {
        text-align: center; 
        vertical-align: middle;
        display: table-cell;
        color: 	#4169E1;
        font-weight: 500;
    }

    img {
        width: 100%;
        height: 100%;
        max-width: 20px;
        max-height: 20px;
        margin: 0 8%;
        background-color: transparent;
    }

    button {
        width: 20%;
        height: 80%;
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