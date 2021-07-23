import React from 'react';

function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
      } 

  return (  
    <article className="card" id="card">
     <img className="card__image" src={props.card.link} alt={props.card.name} onClick={handleClick}/>
     <div className="card__text">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__like-group">
           <button type="button" className="card__vector-like"></button>
           <label className="card__amount-like">{props.card.likes.length}</label>
        </div>
     </div>
     <button type="button" className="card__vector-delete card__vector-delete_type_activ" />
     </article>
   
  );
}

export default Card;