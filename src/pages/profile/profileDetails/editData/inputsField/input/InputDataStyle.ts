import styled from 'styled-components';

export const StyledInputData = styled.input`
    border: 2px solid lightgray;
    margin: 4%;
    height: 30px;
    text-align: center;
    background-color: transparent;
    border-radius: 5px;

    :focus {
        outline: none;
    }

    ::placeholder {
        color: gray;
    }
`;