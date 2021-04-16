import styled from 'styled-components';

export const StyledOption = styled.a`
    display: flex;
    height: 100%;
    width: 100%;
    max-width: 40px;
    max-height: 40px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin: 0 10px;
    background-color: lightgray;
    position: relative;

    img {
        height: 50%;
        width: 50%;
        background-color: transparent;
    }

    span {
        background-color: deepskyblue;
        position: absolute;
        width: 20px;
        height: 20px;
        font-size: 8px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        top: -10%;
        right: -10%;
        color: white;
        font-weight: bold;
    }
`;