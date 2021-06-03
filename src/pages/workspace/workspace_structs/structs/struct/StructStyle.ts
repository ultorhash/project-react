import styled from 'styled-components';

export const StyledStruct = styled.div`
    width: 100%;
    border: 2px solid lightgray;
    margin: 0 0.5%;
    padding: 1%;
    border-radius: 6px;
    position: relative;
    box-shadow: 0 2px 2px gray;

    h2, p, span, img {
        background-color: transparent;
    }

    h2 {
        color: #404040;
        font-weight: 500;
        margin: 2% 0;
    }

    span {
        color: #101010;
        font-weight: bold;
    }

    p {
        color: dimgray;
        font-weight: 500;
    }

    img {
        width: 50px;
        height: 50px;
    }

    img:first-child {
        position: absolute;
        width: 70%;
        height: 70%;
        left: 25%;
        top: 20%;
        opacity: 0.05;
    }
`;