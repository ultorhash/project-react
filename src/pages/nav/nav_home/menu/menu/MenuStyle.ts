import styled from 'styled-components';

export const StyledMenu = styled.div`
    width: 85%;
    height: auto;
    display: flex;
    background-color: white;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
    column-gap: 20px;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
    position: relative;

    p {
        background-color: transparent;
        font-size: 20px;
    }

    img {
        background-color: transparent;
        margin-left: 5%;
    }

    button {
        width: 30px;
        height: 20px;
        margin-left: 35%;
        background-color: transparent;
        border-radius: 10%;
        border: 1px solid lightgray;

        :hover {
            cursor: pointer;
            background-color: rgb(240, 240, 240);
        }

        :focus {
            cursor: pointer;
            outline: none;
        }
    }
`;