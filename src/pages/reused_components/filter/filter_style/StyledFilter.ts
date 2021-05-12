import styled from 'styled-components';

export const StyledFilter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 1%;
    min-height: 30px;
    background-color: transparent;

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        border: none;

        :hover {
            cursor: pointer;
        }

        img {
            max-width: 16px;
            max-height: 16px;
            background-color: transparent;
            margin: 0 5px;
        }

        p {
            white-space: nowrap;
            color: #181818;
            font-weight: 500;
        }
    }
`;