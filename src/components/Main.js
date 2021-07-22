import React from 'react';
import {api} from "./../utils/api";
import avatar from "./../images/avataricon.svg";

function Main (props) {
    const [userName, setUserName] = React.useState();
    const [userDescription , setUserDescription ] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();



    React.useEffect(() => {
        console.log(api);

        api.getProfileInfo()
        .then((result) => {
            console.log(result.name);
            setUserName(result.name);
            console.log(result.about);
            setUserDescription(result.about);
            console.log(result.avatar);
            setUserAvatar(result.avatar);
            //user.setUserInfo(result);
            //popupEditProfile.close();
        })

        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
           
        });

            // Возвращаем функцию, которая удаляет эффекты
        return () => {
          //document.body.classList.remove('no-cursor');
         // document.removeEventListener('mousemove', handleMouseMove);
        };
      });


  return (
    <main className="content">
    <section className="profile root__section">
        <div className="profile__avatar-info">
            <div className="profile__change-avatar">
                <img className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }}  />
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
        <template id="card-template" className="card-template">
        <article className="card" id="card">
            <img className="card__image" />
            <div className="card__text">
               <h2 className="card__title"></h2>
               <div className="card__like-group">
                  <button type="button" className="card__vector-like"></button>
                  <label className="card__amount-like">0</label>
               </div>
            </div>
            <button type="button" className="card__vector-delete" />
        </article>
    </template>
    </section>
</main>
  );
}

export default Main ;