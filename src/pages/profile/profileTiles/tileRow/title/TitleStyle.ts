import styled from 'styled-components';

export const StyledTitle = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    background-color: transparent;
    margin: 0 1%;

    p {
        width: 94%;
        color: gray;
        font-weight: 400;
    }

    img {
        max-width: 20px;
        max-height: 20px;
    }

    button {
        border: none;

        :hover {
            cursor: pointer;
        }
    }

    img, button, p {
        background-color: transparent;
    }
`;