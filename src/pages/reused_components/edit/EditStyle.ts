import styled from 'styled-components';

export const StyledEdit = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: white;
    padding-right: 14px;

    img {
        width: 20px;
        height: 20px;
        background-color: transparent;
    }

    button {
        background-color: transparent;
        border: 1px solid white;

        :hover {
            cursor: pointer;
        }
    }
`;