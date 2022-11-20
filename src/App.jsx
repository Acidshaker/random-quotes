import './App.css'
import QuoteBox from './components/QuoteBox';
import QuoteButton from './components/QuoteButton';
import quoteDB from "./db/quoteDB.json";
import colors from "./db/colors.js"
import { useState } from 'react';

function App() {
 
  // Functions
  const getRandomItem = (array) => {
    return array[Math.floor(Math.random()*array.length)];
  };
  
  const [quote, setQuote] = useState(getRandomItem(quoteDB));
  const [color, setColor] = useState(getRandomItem(colors));
  // console.log(quote);
  
  const getNewValues = () => {
    const newQuote = getRandomItem(quoteDB);
    setQuote(newQuote);
    const newColor = getRandomItem(colors)
    setColor(newColor);
    console.log(newColor);
    console.log(newQuote);
  };

  const stylesApp = {
    color: color, 
    backgroundColor: color
  }

  const stylesButton = {
    backgroundColor: color
  }
  
  
  return (
    <div className="App" style ={stylesApp}>
      <QuoteBox 
        quote={quote} 
        getNewValues={getNewValues}
        stylesButton={stylesButton} 
        />
      </div>
  )
}

export default App
