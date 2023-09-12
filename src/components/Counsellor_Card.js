import React, {useState} from 'react'
import './Counsellor_card.css';

function Card ({ imageUrl, bio, name }) {
    const [likes, setLikes] = useState(0);
  
    function handleLikeClick() {
      setLikes(likes + 1);
    };
  
    return (
      <div className="counsellor-card">
        <div className="left-section">
          <img src={imageUrl} alt="Card" className="counsellor-card-image" />
          <button onClick={handleLikeClick} className="like-button">
            Like ({likes})
          </button>
        </div>
        <div className="right-section">
          <h1 className="card-name">{name}</h1>
          <p className="counsellor-card-text">{bio}</p>
        </div>
      </div>
    );
  };

export default Card;