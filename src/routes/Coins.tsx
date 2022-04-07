import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    padding: 0px 20px;
    max-width: 480px;
    margin: 0 auto;
`;

const Header = styled.header`
    height: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
    display: flex;
    align-items: center;
    background-color: white;
    color: ${(props) => props.theme.bgColor};
    border-radius: 15px;
    margin-bottom: 10px;
    a {
        padding: 20px;
        transition: color 0.2s ease-in;
        display: block;
    }
    &:hover {
        a {
            color: ${(props) => props.theme.accentColor};
        }
    }
`;

const Loader = styled.span`
    text-align: center;
    display: block;
`;

const Title = styled.h1`
    font-size: 48px;
    color: ${(props) => props.theme.accentColor};
`;

const Img = styled.img`
    display: inline;
    width: 25px;
    height: 25px;
    margin 0 10px 0 10px;
`;

interface CoinInterface {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
}

function Coins() {
    const [coins, setCoins] = useState<CoinInterface[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async () => {
            const response = await fetch(
                "https://api.coinpaprika.com/v1/coins"
            );
            const json = await response.json();
            setCoins(json.slice(0, 100));
            setLoading(false);
        })();
    }, []);

    return (
        <Container>
            <Header>
                <Title>코인</Title>
            </Header>
            {loading ? <Loader>Loading...</Loader> : null}

            <CoinsList>
                {coins.map((coin) => (
                    <Coin key={coin.id}>
                        <Link to={`/${coin.id}`} state={{ name: coin.name }}>
                            <Img
                                src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}
                            />
                            {coin.name} &rarr;
                        </Link>
                    </Coin>
                ))}
            </CoinsList>
        </Container>
    );
}
export default Coins;
