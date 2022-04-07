// useEffect(() => {
//     (async () => {
//         const infoData = await (
//             await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
//         ).json();
//         const priceData = await (
//             await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
//         ).json();
//         setInfo(infoData);
//         setPriceInfo(priceData);
//         setLoading(false);
//     })();
// }, [coinId]);
const BASE_URL = "https://api.coinpaprika.com/v1";

export function fetchCoins() {
    return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}

export function fetchCoinInfo(coinId: string) {
    return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
        response.json()
    );
}

export function fetchCoinTickers(coinId: string) {
    return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
        response.json()
    );
}
