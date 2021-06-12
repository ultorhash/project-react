import styled from 'styled-components';

export const StyledPhoto = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2%;
    background-color: white;

    p, img {
        background-color: transparent;
    }

    img {
        width: 80%;
        height: 80%;
        border-radius: 50%;
    }

    p {
        white-space: nowrap;
        color: lightskyblue;
        font-weight: 500;
    }
`;