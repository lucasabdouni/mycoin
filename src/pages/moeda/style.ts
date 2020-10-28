import styled from 'styled-components';

export const SubTitle = styled.h1 `
    font-family: 'Open Sans Condensed', sans-serif;
    font-size: 27px;
    font-weight: lighter;
    color: #363636;
    max-width: 450px;
    margin-left: 320px;
    margin-top: 97px;

    @media (max-width: 760px) {

    margin-left: 15px;
    font-size: 18px;
    margin-top: 50px;
}
`;

export const Title = styled.h1 `
    font-size: 87px;
    font-weight: bolder;
    color: #363636;
    max-width: 550px;
    margin-left: 320px;
    margin-top: 107;

    @media (max-width: 760px) {

    font-size: 70px;
    margin-left: 15px;
    margin-top: 30px;
    }
`;

export const Informacao = styled.div `
    h3 {
    font-size: 47px;
    color: #4ece72;
    max-width: 550px;
    margin-left: 420px;
    margin-top: 107;

    @media (max-width: 760px) {

    font-size: 30px;
    margin-left: 20px;
    margin-top: 20px;
    background-color: #f6f6f6;

    }

    strong {
        color: #363636;
    }
}
`;

export const Botao = styled.div `

    button {
    max-width: 450px;
    margin-left: 700px;
    margin-top: 70px;
    width: 100px;
    height: 40px;
    background: #363636;
    border-radius: 5px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;
    cursor: pointer;

    @media (max-width: 760px) {

    margin-left: 20px;
}

    &:hover {
            background-color: #a8a8b3;
        }
    }
`;


