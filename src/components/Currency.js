import React, { useState } from "react";

function Currency() {
    const currencies = ['BTC', 'ETH', 'USD', 'XRP', 'LTC', 'ADA' ]
    const [amount, setAmount] = useState("BTC");
    const [firstcurruncy, setfirstCurruncy] = useState('BTC')
    const [secondcurruncy, setsecondCurruncy] = useState('BTC')
  return (
    <div className="currency">
      <h2>Currency Converter</h2>
      <div className="input">
        <table>
          <tbody>
            <tr>
              <td>From</td>
              <td>
                <input type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                name="currency-1" />
              </td>
              <td>
                <select name="currency-A">
                value{firstcurruncy}
                className="currency-A"
                onChange={(e) => setfirstCurruncy(e.target.value)}
                {currencies.map(currency => (
                    <option key={currency} value={currency}>
                    {currency}
                    </option>
                ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>To</td>
              <td>
                <input type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                name="currency-B" />
              </td>
              <td>
                <select name="currency-B">
                value{secondcurruncy}
                className="currency-B"
                onChange={(e) => setsecondCurruncy(e.target.value)}
                {currencies.map(currency => (
                    <option key={currency} value={currency}>
                    {currency}
                    </option>
                ))}
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <button id="convert-button">Convert</button>
      </div>
    </div>
  );
}

export default Currency;
