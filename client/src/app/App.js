import { useState, useEffect } from "react";
import axios from 'axios';
import { Card } from "../components/Card";
import { FeedbackBar } from "../components/FeedbackBar";
import "../style/App.css";

//Endpoint where Server is hosting
const endpoint = 'http://localhost:8000';


//Mockdata for Development
let mock = [
  {
    "id":"1",
    "quest":"Test",
    "answer":"Test"
  }
];

function App() {

  //Hooks
  const [cards, setCards] = useState(mock);
  const [cardLength, setCardLength] = useState(0);
  const [cardCounter, setCardCounter] = useState(0);
  const [showAnsw, setShowAnsw] = useState('false');


  //Fetch Cards from DB
  const fetchCards = async() => {
    const { data, status } = await axios.get(endpoint + '/read');
    if(status > 199 && status < 300){
      setCards(data);
      setCardLength(data.length);      
    }
  }

  //Change Answer and Question Content
  const handleShowAnsw = () => {
      if(showAnsw === 'true') setShowAnsw('false')
      if(showAnsw === 'false') setShowAnsw('true')
  };

  //Show next Card
  const handleNext = () => {
    setShowAnsw('false')
    if(cardCounter === cardLength - 1){
      setCardCounter(0);
    }
    else {
      setCardCounter(cardCounter + 1);
    }
  }

  //Get cards when open app
  useEffect(() => {
    fetchCards();
  }, []);


  return (
    <>
      <div className="App">
        <Card 
          currentCard = { cards[cardCounter] }
          showAnsw = { showAnsw }
          handleShowAnsw = { handleShowAnsw }
        />
      </div>
      < FeedbackBar handleNext={ handleNext } />
    </>
  );
}

export default App;
