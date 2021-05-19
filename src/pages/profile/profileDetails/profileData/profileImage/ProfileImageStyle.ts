import styled from 'styled-components';

export const StyledProfileImage = styled.div`
    width: 15%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2%;
    background-color: white;
    position: relative;

    img {
        width: 100%;
        height: auto;
        border-radius: 50%;
        position: relative; 
    }

    p {
        text-align: center;
        font-weight: 500;
        background-color: transparent;
    }

    a {
        text-decoration: none;
        color: #5F9EA0;
        background-color: transparent;
    }
`;