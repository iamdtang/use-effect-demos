import "./App.css";
// import BitcoinPrices2 from "./BitcoinPrices2";
// import Coordinates from "./Coordinates";
import SelectCoin from "./SelectCoin";
import Counter1 from "./Counter1";
import Counter2 from "./Counter2";
import RandomActivity from "./RandomActivity";
import BitcoinPrices1 from "./BitcoinPrices1";

export default function App() {
  return (
    <div>
      <h1>useEffect Examples</h1>
      <div>
        <h2>
          1. Updating the document title - useEffect without a dependency array
        </h2>
        <Counter2 />
      </div>
      <div>
        <h2>
          2. Bitcoin Prices - useEffect without a dependency array and not
          causing an infinite loop
        </h2>
        <BitcoinPrices1 />
      </div>
      <div>
        <h2>
          3. Random Activity - useEffect without a dependency array causing an
          infinite loop
        </h2>
        <RandomActivity />
      </div>
      <div>
        <h2>4. Select a Coin - useEffect with a dependency array</h2>
        <SelectCoin />
      </div>
    </div>
  );
}
