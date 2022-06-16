import { changeCurrency } from "./redux/features/appSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks/reduxHooks";
import { useGetBitcoinDataQuery } from "./redux/services/app";

const App = () => {
  const { currency } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  const { data } = useGetBitcoinDataQuery(undefined);

  const handleCurrency = (e: any) => {
    dispatch(changeCurrency(e.target.value));
  };

  return (
    <div>
      <h1>Bitcoin price converter</h1>
      <select value={currency} onChange={handleCurrency}>
        {data &&
          Object.keys(data).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
      </select>
      <h2>
        {data && data[currency].symbol}: {data && data[currency].last}
      </h2>
    </div>
  );
};

export default App;
