import styled from 'styled-components';

export const StyledDropDownCorpo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    width: 100%;
    height: 30px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid lightgray;
    
    img {
        background-color: white;
        width: 30px;
        height: 100%;
        margin: 0 2%;
        padding: 1%;
    }

    p {
        width: 100%;
        font-weight: 500;
        color: #606060;
        background-color: white;
        white-space: nowrap; 
        text-align: left;
        font-size: 14px;
    }

    img:last-child {
        border-radius: 5px;
        width: 15px;
        height: 15px;
    }

    img, p {
        background-color: transparent;
    }

    :hover {
        cursor: pointer;
    }
`;