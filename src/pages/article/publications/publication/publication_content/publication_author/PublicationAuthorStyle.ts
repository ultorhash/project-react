import styled from 'styled-components';

export const StyledPublicationAuthor = styled.div`
    display: flex;
    justify-content: left;
    align-content: center;
    margin-top: 1%;
    background-color: transparent;

    p {
        color: dimgray;
        margin: 0 1%;
        background-color: transparent;
    }

    img {
        width: 100%;
        height: 100%;
        max-width: 24px;
        max-height: 24px;
        border-radius: 50%;
    }

    span {
        margin: 0 1%;
        color: #404040;
        font-weight: 400;
        background-color: transparent;
    }
`;