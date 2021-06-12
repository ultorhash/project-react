import styled from 'styled-components';

export const StyledSelectedFile = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    padding: 1%;

    p {
        margin-left: 1%;
    }

    img {
        width: 20px;
        height: 20px;
    }

    button {
        margin-left: 2%;
        padding: 1%;
        border: 1px solid lightgray;
        border-radius: 5px;
        cursor: pointer;

        :hover {
            background-color: white;
        }
    }
`;