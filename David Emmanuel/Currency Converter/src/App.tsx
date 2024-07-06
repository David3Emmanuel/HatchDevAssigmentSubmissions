import { useState } from 'react';
import './App.css'

const CURRENCIES = {
  NGN: {
    name: "Nigerian Naira",
    rate: 1,
  },
  USD: {
    name: "US Dollar",
    rate: 1527.50,
  },
  EUR: {
    name: "Euro",
    rate: 16559.89,
  },
  JPY: {
    name: "Japanese Yen",
    rate: 9.50,
  },
  GBP: {
    name: "Pound Sterling",
    rate: 1956.58,
  },
  AUD: {
    name: "Australian Dollar",
    rate: 1031.14,
  },
  CAD: {
    name: "Canadian Dollar",
    rate: 1118.11,
  },
  CHF: {
    name: "Swiss Franc",
    rate: 1704.78,
  },
  CNY: {
    name: "Chinese Yuan",
    rate: 210.14,
  },
  HKD: {
    name: "Hong Kong Dollar",
    rate: 195.47,
  },
}

type Currency = keyof typeof CURRENCIES

const convert = (fromCurrency: Currency, toCurrency: Currency, amount: number) => {
  return amount * CURRENCIES[fromCurrency].rate / CURRENCIES[toCurrency].rate
}

function App() {
  const [fromAmountString, setFromAmountString] = useState('')
  const [toAmountString, setToAmountString] = useState('')
  const [fromCurrency, _setFromCurrency] = useState<Currency>('USD')
  const [toCurrency, _setToCurrency] = useState<Currency>('NGN')


  const setFromCurrency = (value: Currency) => {
    _setFromCurrency(value)
    if (value === toCurrency) {
      _setToCurrency(fromCurrency)
      swapInputs()
    }
    if (fromAmountString) {
      setToAmountString(convert(value, toCurrency, parseFloat(fromAmountString)).toString())
    }
  }

  const setToCurrency = (value: Currency) => {
    _setToCurrency(value)
    if (value === fromCurrency) {
      _setFromCurrency(toCurrency)
      swapInputs()
    }
    if (fromAmountString) {
      setToAmountString(convert(fromCurrency, value, parseFloat(fromAmountString)).toString())
    }
  }

  const swapInputs = () => {
    const temp = fromAmountString;
    setFromAmountString(toAmountString)
    setToAmountString(temp)
  }

  return (
    <>
      <h1>Currency Converter</h1>
      <CurrencyInput
        amountString={fromAmountString}
        setAmountString={setFromAmountString} setOtherAmountString={setToAmountString}
        currency={fromCurrency} otherCurrency={toCurrency} setCurrency={setFromCurrency}
      />
      <CurrencyInput
        amountString={toAmountString}
        setAmountString={setToAmountString} setOtherAmountString={setFromAmountString}
        currency={toCurrency} otherCurrency={fromCurrency} setCurrency={setToCurrency}
      />
    </>
  )
}

function CurrencyInput({ amountString, setAmountString, setOtherAmountString, currency, otherCurrency, setCurrency }: {
  amountString: string
  setAmountString: (amountString: string) => void,
  setOtherAmountString: (amountString: string) => void,
  currency: Currency,
  otherCurrency: Currency,
  setCurrency: (currency: Currency) => void
}) {

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const stringValue = e.target.value

    if (stringValue === '') {
      setAmountString('')
      setOtherAmountString('')
    } else {
      const value = Math.max(parseFloat(stringValue), 0)
      setAmountString(value.toString())
      setOtherAmountString(convert(currency, otherCurrency, value).toString())
    }
  }

  return <div className='currency-input'>
    <input type='number' value={amountString} onChange={handleAmountChange} />
    <select value={currency} onChange={e => setCurrency(e.target.value as Currency)}>
      {Object.entries(CURRENCIES).map(([symbol, { name }]) => (
        <option key={symbol} value={symbol}>{name} ({symbol})</option>
      ))}
    </select>
  </div>
}

export default App
