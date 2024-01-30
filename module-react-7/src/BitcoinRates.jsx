import { useState, useEffect } from "react";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];
function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [exchangeRate, setExchangeRate] = useState("");

  useEffect(() => {
    console.log("fetching data");
    let ignore = false;
    fetch(`https://blockchain.info/ticker`)
      .then((response) => response.json())
      .then((json) => {
        let priceData = json[currency];
        if (!ignore) setExchangeRate(priceData.last);
      });

    return () => {
      ignore = true;
      console.log("cleanup effect");
    };
  }, [currency]);

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));
  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      <div>
        <strong>Exchange Rate: </strong>
        {exchangeRate}
      </div>
    </div>
  );
}

export default BitcoinRates;
