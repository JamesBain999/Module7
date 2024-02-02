import { useEffect, useState, useReducer } from "react";
import axios from "axios";

function useBitcoinRates(currency) {
  const [price, dispatch] = useReducer(reducer, "");

  useEffect(() => {
    axios
      .get("https://blockchain.info/ticker")
      .then((response) => {
        dispatch({
          type: "FETCH_SUCCESS",
          payload: response.data[currency].last,
        });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR", payload: error.message });
      });
  }, [currency]);

  return price;

  //const [exchangeRate, setExchangeRate] = useState("");
  // useEffect(() => {
  //   console.log("fetching data");
  //   let ignore = false;
  //   fetch(`https://blockchain.info/ticker`)
  //     .then((response) => response.json())
  //     .then((json) => {
  //       let priceData = json[currency];
  //       if (!ignore) setExchangeRate(priceData.last);
  //     });

  //   return () => {
  //     ignore = true;
  //     console.log("cleanup effect");
  //   };
  // }, [currency]);

  //return { exchangeRate }
}

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return action.payload;
    case "FETCH_ERROR":
      return error.message;
    default:
      return state;
  }
}

export default useBitcoinRates;
