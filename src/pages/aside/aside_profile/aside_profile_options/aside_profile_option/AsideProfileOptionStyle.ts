import styled from 'styled-components';

export const StyledAsideProfileOption = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    width: 100%;
    margin: 4% 0;
    height: 30px;
    padding: 1%;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid white;
    
    img {
        background-color: white;
        width: 30px;
        height: 100%;
        margin: 0 2%;
        padding: 1%;
    }

    p {
        width: 100%;
        font-weight: bold;
        color: #606060;
        background-color: white;
        white-space: nowrap; 
        text-align: left;
        font-size: 14px;
    }

    img:last-child {
        border: 2px solid gray;
        border-radius: 5px;
    }

    img, p {
        background-color: transparent;
    }

    :hover {
        border-bottom: 1px solid lightgray;
        cursor: pointer;
        
        p {
            color: #303030;
        }
    }
`;