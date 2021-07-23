import React from 'react';
import {api} from "./../utils/api";
import avatar from "./../images/avataricon.svg";
import Card from './Card';

function Main (props) {
    const [userName, setUserName] = React.useState();
    const [userDescription , setUserDescription ] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();
  
    React.useEffect(() => {
        api.getProfileInfo()
        .then((result) => {
            setUserName(result.name);
            setUserDescription(result.about);
            setUserAvatar(result.avatar);
        })

        .catch((err) => {
            console.log(err);
        })
        .finally(() => {       
        });
      },[]);

  return (
    <main className="content">
    <section className="profile root__section">
        <div className="profile__avatar-info">
            <div className="profile__change-avatar">
                <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})`  }}  />
                <img onClick={props.onEditAvatar} className="profile__edit-icon" src={avatar} alt="Редактировать"/>
            </div>
            <div className="profile__info">
                <div className="profile__info-name">
                    <h1 className="profile__name">{userName}</h1>
                    <button  onClick={props.onEditProfile}  type="button" className="profile__edit-button" aria-label="Редактировать">     
                    </button>
                </div>
                <p className="profile__job">{userDescription}</p>
            </div>
        </div>
        <button type="button" onClick={props.onAddPlace}  className="profile__add-button" aria-label="Добавить">                   
       </button>
    </section>

    <section className="cards root__section" id="cards">
       { props.cards.map((card, i) => (
            <div key={i}>
           <Card card={card} onCardClick={props.onCardClick} /> 
           </div> 
        ))}

    </section>
</main>
  );
}

export default Main ;