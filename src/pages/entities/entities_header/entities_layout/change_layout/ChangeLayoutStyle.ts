import styled from 'styled-components';

export const StyledChangeLayout = styled.div`
    border: 2px solid lightgray;
    width: 40px;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    :hover {
        cursor: pointer;
    }

    img {
        width: 30px;
        height: 30px;
        padding: 10%;
    }
`;