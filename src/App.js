import { useState } from "react";
import Container from "./components/Container";
import Spinner from "./components/Spinner";

function App() {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async (event) => {
    setIsLoading(true)

    const res = await fetch("https://meowfacts.herokuapp.com/")
    const { data } = await res.json()
    setQuote(data)

    setIsLoading(false)
  }

  return (
    <Container>
      <button data-testid="button" onClick={handleClick}>
        <span>get a fact</span>
      </button>
      {isLoading || quote === '' ? 
        ( <Spinner /> ) : ( <span data-testid="quote">{quote}</span> )
      }
    </Container>
  );
}

export default App;