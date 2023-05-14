import { useState, useEffect } from "react";

export default function BitcoinPrices1() {
  const [usdPrice, setUsdPrice] = useState();
  const [eurPrice, setEurPrice] = useState();

  // No dependency array but no infinite loop like
  // in the last example. This is because the data that
  // the API is responding with isn't constantly changing,
  // so the useState setters won't trigger the component to
  // rerender.
  useEffect(() => {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsdPrice(data.bpi.USD.rate);
        setEurPrice(data.bpi.EUR.rate);
      });
  });

  return (
    <div>
      <div>USD: {usdPrice}</div>
      <div>EUR: {eurPrice}</div>
    </div>
  );
}
