import styled from 'styled-components';

export const StyledButton = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1%;
    background-color: transparent;

    button {
        padding: 2%;
        border-radius: 6px;
        border: 1px solid lightgray;
        color: black;
        font-weight: 500;
        min-width: 40%;
        background-color: white;
        transition: 0.2s linear 0.2s;

        :hover {
            border: 1px solid gray;
            cursor: pointer;        
        }
    }
`;