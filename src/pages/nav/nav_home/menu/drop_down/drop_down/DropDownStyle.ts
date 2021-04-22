import styled, { keyframes } from 'styled-components';

const FadeInAnimation = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const StyledDropDown = styled.div`
    background-color: white;
    height: auto;
    position: absolute;
    top: 100%;
    left: 15%;
    width: 70%;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 10px;
    animation: fade 0.5s linear forwards;
    animation-name: ${FadeInAnimation};

    p {
        text-align: left;
    }
`;