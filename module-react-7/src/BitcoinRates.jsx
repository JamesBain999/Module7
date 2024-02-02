import React from "react";
import { useChangeMood } from "./ChangeMoodContext";
import useBitcoinRates from "./useBitcoinRates";

function BitcoinRates() {
  const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];
  const { currentMood } = useChangeMood(); // Retrieve the currentMood from the context

  const [currency, setCurrency] = React.useState(currencies[0]);
  const price = useBitcoinRates(currency);

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <div>
        <strong>Current Mood: </strong>
        {currentMood}
      </div>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      <div>
        <strong>Exchange Rate: </strong>
        {price}
      </div>
    </div>
  );
}

export default BitcoinRates;
