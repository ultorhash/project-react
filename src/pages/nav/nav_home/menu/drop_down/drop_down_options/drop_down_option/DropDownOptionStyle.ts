import styled from 'styled-components';

export const StyledDropDownOption = styled.a`
    height: 40px;
    width: 100%;
    background-color: transparent;
    display: flex;
    text-align: center;
    align-items: center;
    text-decoration: none;
    color: dimgray;
    font-weight: 500;
    margin: 30px 0 30px 0;

    p {
        margin-left: 5%;
        height: 100%;
        display: flex;
        align-items: center;
        background-color: transparent;
        font-size: 20px;
        letter-spacing: 1px;
    }

    img {
        height: 100%;
        background-color: transparent;
        width: 15%;
        margin-left: 5%;
    }
`;