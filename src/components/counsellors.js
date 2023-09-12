import React, { useEffect, useState } from 'react';
import Card from './Counsellor_Card';

function Counsellor () {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    // Fetch data from db.json when the component mounts
    fetch('http://localhost:8002/cards') // Assuming you have an endpoint on your server to retrieve card data
      .then((response) => response.json())
      .then((data) => {
        setCardData(data); // Set the retrieved data to the cardData state
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // The empty array means this effect runs once, similar to componentDidMount

  return (
    <div>
      <h1>Card List</h1>
      <div className="card-list">
        {cardData.map((card, index) => (
          <Card
            key={index}
            imageUrl={card.imageUrl}
            name={card.username}
            bio={card.bio}
          />
        ))}
      </div>
    </div>
  );
};

export default Counsellor;