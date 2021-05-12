import styled from 'styled-components';

export const StyledSettings = styled.div`
    width: 5%;
    height: auto;
    display: flex;
    justify-content: center;

    button {
        width: 100%;
        height: 100%;
        border: none;

        :hover {
            cursor: pointer;
        }
    }

    img {
        width: 100%;
        height: 100%;
        max-width: 24px;
        max-height: 24px;
    }
`;