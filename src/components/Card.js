import React from 'react';
import {CurrentUserContext} from "./../contexts/CurrentUserContext";

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);

    // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = props.card.owner._id === currentUser._id;

  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = (
    `card__vector-delete ${isOwn ? 'card__vector-delete_type_activ' : ''}`
  );

    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `card__vector-like ${isLiked ? 'card__vector_active' : ''}`;

    function handleClick() {
        props.onCardClick(props.card);
      } 

      function handleLikeClick () {
        props.onCardLike(props.card);
      } 
      
    //  console.log(props);

  return (  
    <article className="card" id={props.card._id}>
     <img className="card__image" src={props.card.link} alt={props.card.name} onClick={handleClick}/>
     <div className="card__text">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__like-group">
           <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
           <label className="card__amount-like">{props.card.likes.length}</label>
        </div>
     </div>
     <button type="button" className={cardDeleteButtonClassName} />
     </article>
   
  );
}

export default Card;