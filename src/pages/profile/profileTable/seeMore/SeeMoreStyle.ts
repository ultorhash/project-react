import styled from 'styled-components';

export const StyledSeeMore = styled.div`
    width: 100%;
    padding: 1% 2%;
    padding-bottom: 3%;
    background-color: transparent;
    border: 1px solid lightgray;
    border-top: none;

    p {
        font-size: 20px;
        font-weight: 500;
    }

    button {
        border: none;
        background-color: transparent;

        :hover {
            cursor: pointer;
        }

        p {
            background-color: transparent;
        }
    }
`;