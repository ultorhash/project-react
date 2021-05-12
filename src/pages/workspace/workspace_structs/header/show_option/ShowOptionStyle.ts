import styled from 'styled-components';

export const StyledShowOption = styled.div`
    width: 50%;
    height: auto;
    display: flex;
    justify-content: flex-end;
    background-color: transparent;

    button {
        background-color: transparent;
        border: none;

        :hover {
            cursor: pointer;
        }
    }

    p {
        background-color: transparent;
        color: dimgray;
        font-weight: 600;
    }
`;