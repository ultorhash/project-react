import styled from 'styled-components';

export const StyledProfileInfo = styled.div`
    width: 40%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    background-color: white;

    h2, p {
        color: #282828;
        margin: 0.5%;
        margin-left: 5%;
        background-color: transparent;
    }

    h2 {
        font-size: 16px;
    }

    p {
        font-size: 14px;
    }
`;