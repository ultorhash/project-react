import styled from 'styled-components';

export const StyledAsideProfileOption = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    background-color: white;
    
    img {
        border-radius: 20%;
        background-color: white;
        width: 20%;
        width: 50px;
        height: 30px;
    }

    p {
        width: 60%;
        padding-left: 10px;
        font-weight: bold;
        color: #404040;
        background-color: white;
    }

    img:last-child {
        border: 2px solid gray;
        background-color: white;
        padding: 2px 10px 2px 10px;
    }
`;