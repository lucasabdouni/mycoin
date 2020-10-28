import styled from 'styled-components';

export const SubTitle = styled.h1 `
    font-family: 'Open Sans Condensed', sans-serif;
    font-size: 27px;
    font-weight: lighter;
    color: #363636;
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
    margin-left: 320px;
    margin-top: 107;

    @media (max-width: 760px) {

    font-size: 40px;
    margin-left: 15px;
    margin-top: 20px;
}
`;

export const Moedas = styled.form `
    margin-top: 30px;
    margin-left: 320px;
    display: flex;

    @media (max-width: 760px) {
        flex-direction: column;
        margin-left: 15px;
        margin-right: 20px;
    }

    a {
        opacity: 60%;
        background: white;
        border-radius: 5px;
        width: 100%;
        padding:70px 90px;
        text-decoration: none;
        align-items: center;

        transition: all ease 0.2s;
        transform: scale(0.9);
        align-items: center;
    }

    a:hover {
        transform: scale(1);
    }

    a p {
        margin-top: 15px;
        text-align: center;
    }

    img {
        width: 104px;
        height: 104px;

        @media (max-width: 760px) {
            width: 150px;
            height: 150px;
    }
}
`;

