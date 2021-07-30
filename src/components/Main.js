import React from 'react';
import {api} from "./../utils/api";
import avatar from "./../images/avataricon.svg";
import Card from './Card';
import {CurrentUserContext} from "./../contexts/CurrentUserContext";


function Main (props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [cards, setСards] = React.useState([]);
    
    React.useEffect(() => {
        api.getInitialCards()
        .then((res) => {
            setСards(res);
          }).catch(err => console.log(err))
      },[])

      function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === currentUser._id);        
        // Отправляем запрос в API и получаем обновлённые данные карточки
        api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
            // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
          const newCards = cards.map((c) => c._id === card._id ? newCard : c);
          // Обновляем стейт
          setСards(newCards);
        });
    }

    
    function handleCardDelete (card) {        
        api.deleteCard(card._id).then(() => {
            console.log(cards);
            // Формируем новый массив на основе имеющегося, удаляя из него карточку card._id
          var newCards = cards.filter(function(c) {
            return c._id !== card._id;
          });

          console.log(newCards);
          // Обновляем стейт
          setСards(newCards);
        });
    }

  return (
          <>         
    <main className="content">
    <section className="profile root__section">
        <div className="profile__avatar-info">
            <div className="profile__change-avatar">
                <div className="profile__avatar" style={{ backgroundImage: `url(${currentUser.avatar})`  }}  />
                <img onClick={props.onEditAvatar} className="profile__edit-icon" src={avatar} alt="Редактировать"/>
            </div>
            <div className="profile__info">
                <div className="profile__info-name">
                    <h1 className="profile__name">{currentUser.name}</h1>
                    <button  onClick={props.onEditProfile}  type="button" className="profile__edit-button" aria-label="Редактировать">     
                    </button>
                </div>
                <p className="profile__job">{currentUser.about}</p>
            </div>
        </div>
        <button type="button" onClick={props.onAddPlace}  className="profile__add-button" aria-label="Добавить">                   
       </button>
    </section>

    <section className="cards root__section" id="cards">
       { cards.map((card, i) => (
           <Card onCardLike={handleCardLike} onCardDelete ={handleCardDelete}  key={card._id} card={card} onCardClick={props.onCardClick} /> 
        ))}

    </section>
</main>
</>

  );
}

export default Main ;