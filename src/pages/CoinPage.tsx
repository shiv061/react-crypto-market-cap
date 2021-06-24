import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { coinsDataSelector } from '../services/api';

const CoinPage = () => {
  const params: { coin: string } = useParams();
  const coinsData = useSelector(coinsDataSelector);
  console.log(coinsData);

  return <div>CoinPage</div>;
};

export default CoinPage;
