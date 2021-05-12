import styled from 'styled-components';

export const StyledElementImage = styled.div`
    width: 30%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2%;
    max-width: 100px;

    img {
        width: 100%;
        height: 100%;
        max-height: 80px;
        max-width: 80px;
        background-color: transparent;
    }
`;