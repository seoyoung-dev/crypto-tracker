import { useParams } from "react-router";

interface RouteParams {
    coinId: string;
}

function Coin() {
    const { coinId } = useParams<RouteParams>();
    return <h1>Coin: {coinId}</h1>;
}
export default Coin;

// react-router-dom v6부터는 제네릭을 지원하지 않음
