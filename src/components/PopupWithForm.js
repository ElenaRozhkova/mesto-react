import React from 'react';

function PopupWithForm (props) {
// Хук, управляющий внутренним состоянием.
//const [rating, setRating] = React.useState(0);

  return (
      <> 
      <div className={`popup popup_type_edit ${props.isOpen1 ? "popup_opened" : ""}`}>
   
    <div className="popup__container">
        <form id="editPopup" name="editPopup" className="popup__form" novalidate>
            <fieldset className="popup__form-set">
              <>
                <button type="button" onClick ={props.onClose} className="popup__close popup__close_type_edit"> 
              <div className="popup__close-icon"></div>
            </button>
                <h2 className="popup__title">Редактировать профиль</h2>
                <input type="text" className="popup__input popup__input_type_name" id="name" name="nameInput" placeholder="Имя" required minlength="2" maxlength="40" />
                <span className="popup__input-error name-error"></span>
                <input type="text" className="popup__input popup__input_type_job" id="job" name="jobInput" placeholder="О себе" required minlength="2" maxlength="200" />
                <span className="popup__input-error job-error"></span>
                <button type="submit" className="popup__button">Сохранить</button>
                </>
            </fieldset>
        </form>
    </div>
</div>


<div className={`popup popup_type_add ${props.isOpen2 ? "popup_opened" : ""}`}>
<div className="popup__container">
    <form id="newItemPopup" name="addPopup" className="popup__form" novalidate>
        <fieldset className="popup__form-set">
            <button type="button" onClick ={props.onClose} className="popup__close popup__close_type_add"> 
            <div className="popup__close-icon"></div>
        </button>
            <h2 className="popup__title">Новое место</h2>
            <input type="text" className="popup__input popup__input_type_text" id="add" name="name" placeholder="Название" required minlength="2" maxlength="30" />
            <span className="popup__input-error add-error"></span>
            <input type="url" className="popup__input popup__input_type_link" id="url" name="link" placeholder="Ссылка на картинку" required />
            <span className="popup__input-error url-error"></span>
            <button type="submit" className="popup__button popup__button_type_add">Создать</button>
        </fieldset>
    </form>
</div>
</div>


<div className="popup popup_type_question">
        <div className="popup__container">
            <form id="newQuestionPopup" name="questionPopup" className="popup__form" novalidate>
                <fieldset className="popup__form-set">
                    <button type="button" className="popup__close popup__close_type_question"> 
                    <div className="popup__close-icon"></div>
                </button>
                    <label className="popup__title popup__title_type_question">Вы уверены?</label>
                    <button type="submit" className="popup__button popup__button_type_question">Да</button>
                </fieldset>
            </form>
        </div>
    </div>


    <div className={`popup popup_type_avatar ${props.isOpen3 ? "popup_opened" : ""}`}>
        <div className="popup__container">
            <form id="avatarPopup" name="avatarPopup" className="popup__form" novalidate>
                <fieldset className="popup__form-set">
                    <button type="button" onClick ={props.onClose} className="popup__close popup__close_type_avatar"> 
                    <div className="popup__close-icon"></div>
                    </button>
                    <h2 className="popup__title">Обновить аватар</h2>
                    <input type="url" className="popup__input popup__input_type_text" id="avatar" name="avatar" placeholder="https://somewebsite.com/someimage.jpg" required />
                    <span className="popup__input-error avatar-error"></span>
                    <button type="submit" className="popup__button popup__button_type_add">Сохранить</button>
                </fieldset>
            </form>
        </div>
    </div>
</>
  );
}

export default PopupWithForm;