import { useState, useEffect } from "react";
import Loading from "./Loading";

export default function BitcoinPrices2() {
  const [usdPrice, setUsdPrice] = useState();
  const [eurPrice, setEurPrice] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // Same example as the last one but with a loading indicator
  useEffect(() => {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsdPrice(data.bpi.USD.rate);
        setEurPrice(data.bpi.EUR.rate);
        setIsLoading(false);
      });
  });

  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <div>USD: {usdPrice}</div>
      <div>EUR: {eurPrice}</div>
    </div>
  );
}
