import React from 'react';


function Main (props) {
  return (
    <main className="content">
    <section className="profile root__section">
        <div className="profile__avatar-info">
            <div className="profile__change-avatar">
                <img className="profile__avatar" src="<%=require('./../images/image.jpg')%>" alt="Аватар"/>
                <img onClick={props.onEditAvatar} onClose={props.closeAllPopups} className="profile__edit-icon" src="<%=require('./../images/avataricon.svg')%>" alt="Редактировать"/>
            </div>
            <div className="profile__info">
                <div className="profile__info-name">
                    <h1 className="profile__name">Жак-Ив Кусто</h1>
                    <button  onClick={props.onEditProfile} onClose={props.closeAllPopups}  type="button" class="profile__edit-button" aria-label="Редактировать">     
                    </button>
                </div>
                <p className="profile__job">Исследователь океана</p>
            </div>
        </div>
        <button type="button" onClick={props.onAddPlace} onClose={props.closeAllPopups}  className="profile__add-button" aria-label="Добавить">                   
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