import { useState, useEffect } from 'react'
import './App.css'
import HomePage from './pages/HomePage';
import XmasCard from './pages/XmasCard';

function App() {
  const [cardData, setCardData] = useState();
  const [openCard, setOpenCard] = useState(false);

  const closeCard = () => {
    setOpenCard(false);
  }

  const openXmasCard = () => {
    setOpenCard(true);
  }

  const getCardData = (data) => {
    setCardData(data);
    openXmasCard();
  }

  useEffect(() => {
    console.log(cardData);
  }, [cardData])

  return (
    <>
    <XmasCard data={cardData} closeCard={closeCard} />
    {/* {
      openCard ? 
      : 
      <HomePage openCard={openXmasCard} sendData={getCardData}/> 
    } */}
    </>
  )
}

export default App
