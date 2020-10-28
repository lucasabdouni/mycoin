import React from 'react';
import { SubTitle, Title, Moedas } from './style';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
    return (
        <>
            <SubTitle>INFORMAÇÃO QUE VALE DINHEIRO</SubTitle>
            <Title>MinhaMoeda.com</Title>
            <Moedas>
                <Link to={`/moeda/btc`}>
                    <img
                        src="https://cdn.iconscout.com/icon/free/png-256/bitcoin-1824299-1545921.png"
                        alt="Bitcoin"
                    />
                    <p>Bitcoin</p>
                </Link>
                <Link to={`/moeda/chz`}>
                    <img
                        src="https://s2.coinmarketcap.com/static/img/coins/200x200/4066.png"
                        alt="Chiliz"
                    />
                    <p>Chiliz</p>
                </Link>
                <Link to={`/moeda/eth`}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png"
                        alt="Ethereum"
                    />
                    <p>Ethereum</p>
                </Link>
                <Link to={`/moeda/ltc`}>
                    <img src="https://i.imgur.com/8ZrcNNh.png" alt="Litecoin" />
                    <p>Litecoin</p>
                </Link>
            </Moedas>
        </>
    );
};

export default Dashboard;
