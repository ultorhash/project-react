import styled from 'styled-components';

export const StyledIcon = styled.div`
    width: 100%;
    height: auto;
    border: 10px solid gray;
    margin: 0 auto;
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 2% 0;
    background-color: black;
    overflow: hidden;
    border-radius: 20px;
    padding: 5%;

    img {
        width: 5%;
        height: auto;
        background-color: transparent;
        animation: spin 6s linear infinite;
        @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
        @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
        @keyframes spin {
            0% {
                margin-left: -10%;
            }
            10%{
                margin-left: 20%;
            }
            100% {
                -webkit-transform: rotate(360deg);
                transform:rotate(360deg);
                margin-left: 110%;
            }
        }
    }
`;