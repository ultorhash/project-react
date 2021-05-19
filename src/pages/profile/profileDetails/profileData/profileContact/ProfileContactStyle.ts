import styled from 'styled-components';

export const StyledProfileContact = styled.div`
    width: 45%;
    height: auto;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;

    img {
        width: 100%;
        height: 100%;
        max-width: 20px;
        max-height: 20px;
        margin-bottom: 10%;
    }

    button, p, img {
        background-color: transparent;
        color: #282828;
        font-weight: 500;
    }

    button {
        width: 20%;
        margin-left: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;

        :hover {
            cursor: pointer;
        }
    }
`;