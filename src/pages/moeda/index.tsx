import React, { useEffect, useState } from 'react';
import { SubTitle, Title, Informacao, Botao } from './style';
import { useRouteMatch } from 'react-router-dom';
import api from '../../services/api';

interface MoedaParams {
    moeda: string;
}

interface InfoMoedas {
    high: string;
    low: string;
    vol: string;
    buy: string;
    sell: string;
}

const Moedas: React.FC = () => {
    const { params } = useRouteMatch<MoedaParams>();
    let titleMoeda = null;

    if (params.moeda === 'btc') {
        titleMoeda = 'Bitcoins';
    } else if (params.moeda === 'chz') {
        titleMoeda = 'Chiliz';
    } else if (params.moeda === 'eth') {
        titleMoeda = 'Ethereum';
    } else {
        titleMoeda = 'Litecoin';
    }

    const [info, setInfo] = useState<InfoMoedas>({
        high: '0',
        low: '0',
        vol: '0',
        buy: '0',
        sell: '0',
    });

    useEffect(() => {
        api.get(`${params.moeda}/ticker`).then(response => {
            setInfo(response.data.ticker);
        });
    }, []);

    return (
        <>
            <SubTitle>
                Alta tecnologia para trazer as melhores oportunidades.
            </SubTitle>
            <Title>{titleMoeda}</Title>
            <Informacao>
                <h3>
                    Alta: <strong>{parseFloat(info.high).toFixed(3)}</strong>
                </h3>
                <h3>
                    Baixa: <strong>{parseFloat(info.low).toFixed(3)}</strong>
                </h3>
                <h3>
                    Volume: <strong>{parseFloat(info.vol).toFixed(3)}</strong>
                </h3>
                <h3>
                    Compra: <strong>{parseFloat(info.buy).toFixed(3)}</strong>
                </h3>
                <h3>
                    Venda: <strong>{parseFloat(info.sell).toFixed(3)}</strong>
                </h3>
            </Informacao>
            <a href="/">
                <Botao>
                    <button type="submit">Inicio</button>
                </Botao>
            </a>
        </>
    );
};

export default Moedas;
