import styled from 'styled-components';

export const StyledWork = styled.div`
    width: 100%;
    border-radius: 5px;
    margin: 1% 0;
    padding: 0.5% 1.5%;
    box-shadow: 0 2px 2px silver;
    border: 1px solid lightgray;
    background-color: white;

    h2, p {
        background-color: transparent;
    }

    h2 {
        color: #0033cc;
        font-size: 18px;
        font-weight: 500;
    }

    p {
        color: #606060;
        font-weight: 500;
        margin: 0.5% 0;
    }
`;